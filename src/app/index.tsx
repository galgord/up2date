import { Redirect, usePathname } from 'expo-router'

export default () => {
  const pathname = usePathname()

  // Base path is not used. We redirect base on the user session.
  if (pathname === '/') {
    return <Redirect href={'/discover'} />
  }
}
