import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import Environment from '@app/utils/environment'
import { mmkvStorageConfig } from './storage'

const supabaseUrl = Environment.PUBLIC_SUPABASE_URL
const supabaseAnonKey = Environment.PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    //  @ts-ignore
    storage: mmkvStorageConfig,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
