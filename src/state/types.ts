import {
  ApolloClient,
  ApolloLink,
  DocumentNode,
  NormalizedCacheObject,
  Resolvers, // TypePolicy,
} from '@apollo/client'
import { ContextSetter } from '@apollo/client/link/context'

export type ClientDestroyer = () => Promise<void>
export type Client = ApolloClient<NormalizedCacheObject> & {
  reset: () => void
}

export type ExtensionCleaner =
  | ((client: ApolloClient<NormalizedCacheObject>, env: Environment) => Promise<void>)
  | (() => void)
  | void

export type ResolverFunction = (
  parent: unknown,
  args: unknown,
  context: object,
  info?: unknown
) => unknown

export interface Extension {
  getLinks?: (env: Environment) => ApolloLink[]
  init?: (
    client: ApolloClient<NormalizedCacheObject>,
    env: Environment,
    origin: string | null
  ) => Promise<ExtensionCleaner> | (() => void)
  resolvers?: Resolvers
  // getTypesPolicies?: (env: Environment) => TypePolicy; //{ [fieldName: string]: FieldPolicy<any> | FieldReadFunction<any> },
  getContext?: ContextSetter
  typeDefs?: DocumentNode
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Context = Record<string, any>
