import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Box from '@app/components/Box'
import Button from '@app/components/Button'
import Container from '@app/components/Container'
import Input from '@app/components/Input'
import Text from '@app/components/Text'
import { useAppState } from '@app/state/modules/app-state'

interface Props {
  onSignin: (email: string, password: string) => Promise<void>
  onSignup: (email: string, password: string) => Promise<void>
  loading: boolean
}

const Signin = ({ onSignin, onSignup, loading }: Props) => {
  console.log('[[loading]]', loading)
  const { appState } = useAppState()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (type: 'signin' | 'signup') =>
    handleSubmit((data) => {
      console.log('[[DATA]]', data)
      if (type === 'signin') {
        onSignin(data.email, data.password)
      }

      if (type === 'signup') {
        onSignup(data.email, data.password)
      }
    })()

  return (
    <Container>
      <Box marginTop={'xl'} padding={'l'}>
        <Text>{appState}</Text>
        <Box paddingVertical={'xs'} mt={'l'} alignSelf={'stretch'}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                leftIcon={{
                  name: 'mail',
                  size: 24,
                  color: 'black',
                }}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                placeholder="email@address.com"
                autoCapitalize="none"
              />
            )}
          />
        </Box>
        <Box paddingVertical={'xs'} alignSelf={'stretch'}>
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                leftIcon={{
                  name: 'lock',
                  size: 24,
                  color: 'black',
                }}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
              />
            )}
          />
        </Box>
        <Box paddingVertical={'xs'} mt={'l'} alignSelf={'stretch'}>
          <Button
            title="Sign in"
            disabled={loading}
            loading={loading}
            onPress={() => onSubmit('signin')}
          />
        </Box>
        <Box paddingVertical={'xs'} alignSelf={'stretch'}>
          <Button
            title="Sign up"
            disabled={loading}
            loading={loading}
            onPress={() => onSubmit('signup')}
          />
        </Box>
      </Box>
      <Text>{errors.email?.message}</Text>
      <Text>{errors.password?.message}</Text>
    </Container>
  )
}

export default Signin
