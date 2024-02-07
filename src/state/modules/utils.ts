import {
  ApolloClient,
  ApolloLink,
  DocumentNode,
  GraphQLRequest,
  NormalizedCacheObject,
  ReactiveVar,
} from '@apollo/client'
import { ContextSetter, setContext } from '@apollo/client/link/context'
import storage from '@app/utils/storage'
import { Context, Extension, ExtensionCleaner } from '../types'

/**
 * Init all the extensions
 */
export const initExtensions = async (
  env: Environment,
  client: ApolloClient<NormalizedCacheObject>,
  extensions: Extension[],
  origin: string | null
): Promise<ExtensionCleaner[]> => {
  const extensionCleaners = [] as ExtensionCleaner[]
  for (let i = 0; i < extensions.length; i += 1) {
    const { init } = extensions[i]
    if (init) {
      // eslint-disable-next-line no-await-in-loop
      const cleaner = await init(client, env, origin)
      if (cleaner) {
        extensionCleaners.unshift(cleaner)
      }
    }
  }
  return extensionCleaners
}

/**
 * Get all type definitons from the extensions
 */
export const getExtensionTypeDefs = (extensions: Extension[]): DocumentNode[] =>
  extensions.reduce(
    (acc: DocumentNode[], { typeDefs }: Extension): DocumentNode[] =>
      typeDefs ? acc.concat(typeDefs) : acc,
    []
  )

const createRequestContextLink = (
  getRequestContext:
    | ContextSetter
    | ((
        operation: GraphQLRequest,
        previousContext: Context,
        env: Environment
      ) => Promise<Context | void>),
  env: Environment,
  client: ApolloClient<NormalizedCacheObject>
): ApolloLink =>
  setContext(async (operation: GraphQLRequest, previousContext: Context): Promise<Context> => {
    const context = await getRequestContext(operation, previousContext, env)
    return {
      ...context,
      client,
      environment: env,
    }
  })

/**
 * Get all the links from the extensions
 */
export const getExtensionLinks = (
  env: Environment,
  client: ApolloClient<NormalizedCacheObject>,
  extensions: Extension[]
): ApolloLink[] =>
  extensions.reduce((acc: ApolloLink[], { getLinks, getContext }: Extension): ApolloLink[] => {
    if (getContext) {
      acc.push(createRequestContextLink(getContext, env, client))
    }

    if (getLinks) {
      return acc.concat(getLinks(env))
    }

    return acc
  }, [])

// export const getExtensionTypePolicies = (env: Environment, extensions: Extension[]): TypePolicies =>
//   extensions.reduce((acc: TypePolicies, { getTypesPolicies }: Extension) => {
//     if (getTypesPolicies) {
//       return merge(getTypesPolicies(env), acc);
//     } else {
//       return acc;
//     }
//   }, {});

/**
 * Clean up all the extensions
 */
export const cleanUpExtensions = async (
  env: Environment,
  client: ApolloClient<NormalizedCacheObject>,
  cleaners: ExtensionCleaner[] | undefined
): Promise<void> => {
  if (!cleaners) {
    return
  }

  cleaners.forEach(async (cleaner: ExtensionCleaner) => {
    if (cleaner) {
      await cleaner(client, env)
    }
  })
}

export const persistReactiveVar = <T>(reactiveVar: ReactiveVar<T>, storageName: string): T => {
  let value = reactiveVar()
  const previousValue = storage.getString(storageName)
  if (previousValue !== undefined) {
    try {
      const parsed = JSON.parse(previousValue)
      value = parsed
    } catch {
      value = previousValue as unknown as T
    }
  }

  reactiveVar(value)

  const onNextChange = (newValue: T | undefined) => {
    try {
      if (newValue === undefined) {
        storage.delete(storageName)
      } else {
        const parsedValue = typeof newValue === 'string' ? newValue : JSON.stringify(newValue)
        storage.set(storageName, parsedValue)
      }
    } catch {
      // This will fail if something bad happens with the storage (Like a size limit exced)
      // Or the json parse fails converting the object.
      console.log('[[Error]] Persisting reactive variable')
    }
  }

  reactiveVar.onNextChange(onNextChange)

  return value
}
