import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { MMKVWrapper, persistCache } from 'apollo3-cache-persist'
import TimeoutLink from 'apollo-link-timeout'
import storage from '@app/utils/storage'
import extensions from './modules/extensions'
import {
  cleanUpExtensions,
  getExtensionLinks,
  getExtensionTypeDefs, // getExtensionTypePolicies,
  initExtensions,
} from './modules/utils'
import { Client, ClientDestroyer, ExtensionCleaner } from './types'

// TODO: Use grapqhl instrospection to get all possible types
// and types policies from the graphql files.
let client: ApolloClient<NormalizedCacheObject>
export const createCache = (): InMemoryCache =>
  // const customTypePolicies = getExtensionTypePolicies(env, extensions);
  new InMemoryCache({
    possibleTypes: {},
  })

const createClient = async (
  env: Environment,
  reset: () => void
): Promise<[Client, ClientDestroyer]> => {
  const cache = createCache()
  let extensionCleaners: ExtensionCleaner[] | undefined

  await persistCache({
    cache,
    storage: new MMKVWrapper(storage),
    debug: true,
  })

  client = new ApolloClient({
    cache,
    defaultOptions: {
      mutate: {
        errorPolicy: 'all',
      },
      query: {
        errorPolicy: 'all',
        fetchPolicy: 'network-only',
      },
      watchQuery: {
        errorPolicy: 'all',
      },
    },
    link: ApolloLink.from([
      ...getExtensionLinks(env, client, extensions),
      new TimeoutLink(35000), // TODO: Move this to an evn variable.
      new HttpLink({
        uri: `${env.API_URL}/graphql/${env.API_VERSION}`,
      }),
    ]),
    typeDefs: getExtensionTypeDefs(extensions),
    connectToDevTools: env.APP_PROFILE !== 'production',
  })
  try {
    extensionCleaners = await initExtensions(env, client, extensions, origin)
  } catch (e) {
    console.error(e as Error, 'Extensions initialization')
  }
  const destroyClient = async (): Promise<void> => {
    await cleanUpExtensions(env, client, extensionCleaners)
    await client.stop()
  }
  return [Object.assign(client, { reset }), destroyClient]
}

export default createClient
