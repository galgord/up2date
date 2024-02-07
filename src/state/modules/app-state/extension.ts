import { AppState, AppStateStatus as RNAppStateStatus } from 'react-native'
import { ApolloClient } from '@apollo/client'
import { NormalizedCacheObject, makeVar } from '@apollo/client/cache'
import { AppStateStatus } from '__generated__/global-types'
import { Extension } from '@app/state/types'
import { persistReactiveVar } from '../utils'
import typeDefs from './type-defs.graphql'

const RNAppStateToAppStateStatus: Record<RNAppStateStatus, AppStateStatus> = {
  active: AppStateStatus.ACTIVE,
  background: AppStateStatus.BACKGROUND,
  extension: AppStateStatus.EXTENSION,
  inactive: AppStateStatus.INACTIVE,
  unknown: AppStateStatus.UNKNOWN,
}

export const language = makeVar<string | null>(null)
export const isAppLoaded = makeVar<boolean>(false)
export const appState = makeVar<AppStateStatus>(RNAppStateToAppStateStatus[AppState.currentState])

const init = (_client: ApolloClient<NormalizedCacheObject>, _env: Environment): (() => void) => {
  const storeAppState = (state: RNAppStateStatus): void => {
    appState(RNAppStateToAppStateStatus[state] || null)
  }

  storeAppState(AppState.currentState)
  const changeSubscription = AppState.addEventListener('change', storeAppState)

  const cleanUp = (): void => {
    changeSubscription.remove()
  }

  // Variables rehydrated from the storage
  persistReactiveVar(language, 'language')

  return cleanUp
}

const AppStateExtension: Extension = {
  init,
  typeDefs,
}

export default AppStateExtension
