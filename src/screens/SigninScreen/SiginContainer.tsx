import { useState } from 'react'
import { Alert } from 'react-native'
import { useRouter } from 'expo-router'
import { useSessionData } from '@app/state/modules/auth'
import { supabase } from '@app/utils/supabase'
import SinginView from './SigninView'

const SinginContainer = () => {
  const router = useRouter()
  const { set: setSession } = useSessionData()
  const [loading, setLoading] = useState(false)

  async function signInWithEmail(email: string, password: string) {
    if (loading) return

    setLoading(true)
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setLoading(false)
      return Alert.alert(error.message)
    }
    if (data.session) {
      setSession({ token: data.session.access_token })
      setLoading(false)
      router.replace('/')
    }
  }

  async function signUpWithEmail(email: string, password: string) {
    if (loading) return

    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setLoading(false)
      setSession({ token: session?.access_token })
      return Alert.alert(error.message)
    }

    if (!session) {
      setLoading(false)
      Alert.alert('Please check your inbox for email verification!')
    }
  }

  return <SinginView onSignin={signInWithEmail} onSignup={signUpWithEmail} loading={loading} />
}

export default SinginContainer
