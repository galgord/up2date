import { useReactiveVar } from '@apollo/client'
import { Session } from '__generated__/global-types'
import { session } from './extension'

export const useSessionData = () => {
  const sessionValue = useReactiveVar(session)

  return {
    session: sessionValue,
    set: (value: Session) => session(value),
  }
}
