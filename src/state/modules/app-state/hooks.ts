import { useReactiveVar } from '@apollo/client'
import { AppStateStatus } from '__generated__/global-types'
import { appState, isAppLoaded, language } from './extension'

export const useAppState = () => {
  const appStateData = useReactiveVar(appState)

  return {
    appState: appStateData,
    set: (value: AppStateStatus) => appState(value),
  }
}

export const useLanguage = () => {
  const languageData = useReactiveVar(language)

  return {
    language: languageData,
    set: (value: string) => language(value),
  }
}

export const useAppLoaded = () => {
  const appLoadedData = useReactiveVar(isAppLoaded)

  return {
    appLoaded: appLoadedData,
    set: (value: boolean) => isAppLoaded(value),
  }
}
