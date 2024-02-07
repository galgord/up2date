import { useCallback } from 'react'
import { useRouter } from 'expo-router'
import { useSessionData } from '@app/state/modules/auth'
import DiscoverView from './DiscoverView'
import { useActiveCategoriesQuery } from './operations/__generated__/queries.generated'

const DiscoverContainer = () => {
  const router = useRouter()
  const { session, set: setSession } = useSessionData()
  const onPressLogout = useCallback(() => setSession({ token: null }), [])
  const onPressLogin = useCallback(() => router.navigate('/login'), [])

  const { data, loading } = useActiveCategoriesQuery({ fetchPolicy: 'network-only' })

  return (
    <DiscoverView
      onPressLogin={onPressLogin}
      onPressLogout={onPressLogout}
      session={session}
      categories={!loading ? data?.categoires : null}
    />
  )
}

export default DiscoverContainer
