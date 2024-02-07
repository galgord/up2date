import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'
import i18next from 'i18next'
import HttpApi from 'i18next-http-backend'
import { Service } from '../types'

export const SUPPORTED_LANGUAGES = ['en', 'es', 'pr']

const init = async (env: Environment) => {
  await i18next
    .use(HttpApi)
    .use(initReactI18next)
    .init({
      debug: env.APP_PROFILE !== 'production',
      supportedLngs: SUPPORTED_LANGUAGES,
      preload: SUPPORTED_LANGUAGES,
      nonExplicitSupportedLngs: false,

      lng: Localization.getLocales()[0].languageCode ?? 'en',
      fallbackLng: 'en',
      backend: {
        loadPath: (lngs: string[]) =>
          `${env.API_URL}/storage/${env.API_VERSION}/object/public/translations/${lngs[0].split('-')[0]}.json`,
        parse: (data: any) => JSON.parse(data),
      },
    })

  return i18next
}

const i18nService: Service<typeof i18next, 'i18n'> = {
  name: 'i18n',
  enabled: true,
  init,
  getInstance: () => i18next,
}

export default i18nService
