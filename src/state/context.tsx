import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { ApolloConsumer, ApolloProvider } from '@apollo/client'
import Box from '@app/components/Box'
import Text from '@app/components/Text'
import Environment from '@app/utils/environment'
import createClient from './createClient'
import { Client, ClientDestroyer } from './types'

let apolloClient: Client | undefined

export const getClient = (): Client | undefined => apolloClient

const useClient = (env: Environment | undefined) => {
  const [client, setClient] = useState<Client | undefined>(undefined)
  const [resetTrigger, setResetTrigger] = useState({})
  const destroyClient = useRef<undefined | ClientDestroyer>(undefined)
  const [isLoadingClient, setIsLoadingClient] = useState(true)
  const [hasErrors, setHasErrors] = useState<undefined | boolean>(undefined)

  const reset = React.useCallback(() => {
    setResetTrigger({})
  }, [])

  const handleCreateClient = React.useCallback(() => {
    if (destroyClient?.current) {
      destroyClient.current()
    }

    setIsLoadingClient(true)
    if (env) {
      const clientPromise = createClient(env, reset)

      clientPromise
        .then(([c, destroy]): void => {
          setClient(c)
          apolloClient = c

          destroyClient.current = destroy
          setHasErrors(false)
        })
        .catch((error) => {
          console.error(error, 'client initialization')
          setHasErrors(true)
        })
        .finally(() => setIsLoadingClient(false))
    } else {
      setClient(undefined)
      apolloClient = undefined
    }
  }, [env, reset])

  useEffect(
    function createClientTrigger() {
      // handleCreateClient("");
    },
    [resetTrigger, handleCreateClient]
  )

  /**
   * Destroy client effect.
   * Only destroy the client when the env change.
   */
  useEffect(
    (): (() => void) => (): void => {
      if (destroyClient?.current) {
        destroyClient.current()
      }
    },
    [env, resetTrigger, reset]
  )

  return { client, handleCreateClient, hasErrors, loading: isLoadingClient }
}

interface ProviderProps {
  children: ReactNode | ReactNode[]
  loadingComponent: JSX.Element
}

const Provider = ({ children, loadingComponent }: ProviderProps): JSX.Element => {
  const { client, hasErrors, handleCreateClient, loading: loadingClient } = useClient(Environment)

  useEffect(
    function onMount() {
      handleCreateClient()
    },
    [handleCreateClient]
  )

  if (hasErrors) {
    // Show some mechanism for retry like pull-to-refresh or a classic button
    return (
      <Box justifyContent="center" alignItems="center">
        <Text>Erro apollo client</Text>
      </Box>
    )
  }

  if (!client || loadingClient) {
    return loadingComponent
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default {
  Consumer: ApolloConsumer,
  Provider,
}
