import Config from 'react-native-config'
import Constants from 'expo-constants'

function getEnvironmentValue(key: string) {
  const ENVIRONMENT_VALUE = Config[key] ?? Constants.expoConfig?.extra?.env?.[key]
  if (!ENVIRONMENT_VALUE) {
    throw new Error(`${key} is missing.`)
  }
  return ENVIRONMENT_VALUE
}

const Env: Environment = {
  APP_PROFILE: 'development', //getEnvironmentValue('APP_PROFILE') as APP_PROFILE,
  API_URL: getEnvironmentValue('API_URL'),
  API_VERSION: getEnvironmentValue('API_VERSION'),
  PUBLIC_SUPABASE_URL: getEnvironmentValue('PUBLIC_SUPABASE_URL'),
  PUBLIC_SUPABASE_ANON_KEY: getEnvironmentValue('PUBLIC_SUPABASE_ANON_KEY'),
}

export default Env
