import { Context, GraphQLRequest, makeVar } from '@apollo/client'
import { ContextSetter } from '@apollo/client/link/context'
import { Session } from '__generated__/global-types'
import { Extension, ExtensionCleaner } from '@app/state/types'
import { persistReactiveVar } from '../utils'
import typeDefs from './type-defs.graphql'

export const session = makeVar<Session>({ token: null })

const init = async (): Promise<ExtensionCleaner> => {
  await persistReactiveVar(session, 'session')
  return () => {}
}

const getContext: ContextSetter = async (
  _operation: GraphQLRequest,
  { headers }: Context
): Promise<Context | undefined> => {
  const token = session().token
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    }
  }

  return undefined
}

const AppStateExtension: Extension = {
  init,
  typeDefs,
  getContext,
}

export default AppStateExtension
