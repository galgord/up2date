declare global {
  export type APP_PROFILE = 'development' | 'testing' | 'production'

  export interface Environment {
    APP_PROFILE: APP_PROFILE
    API_URL: string
    API_VERSION: string
    PUBLIC_SUPABASE_URL: string
    PUBLIC_SUPABASE_ANON_KEY: string
  }
}

export default {}
