import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Category, CategoryEdge, Node, Session } from '__generated__/global-types'
import Box from '@app/components/Box'
import Button from '@app/components/Button'
import Container from '@app/components/Container'
import Text from '@app/components/Text'
import services from '@app/services'
import { useLanguage } from '@app/state/modules/app-state'
import { ActiveCategoriesQueryResult } from '../operations/__generated__/queries.generated'

interface Props {
  onPressLogin: () => void
  onPressLogout: () => void
  session: Session
  categories?: ActiveCategoriesQueryResult['categoires']
}

const DiscoverView = ({ onPressLogin, onPressLogout, session, categories }: Props) => {
  const { language, set: setLanguage } = useLanguage()
  const { t } = useTranslation()

  // TODO: Move this to layout to catch the default language from the user
  // This is only temporal to show how it works.
  useEffect(
    function onMount() {
      if (language && language !== services.i18n?.language) {
        if (services.i18n) services.i18n?.changeLanguage(language)
      }

      if (!language) {
        const lang = services.i18n?.language
        if (lang) {
          setLanguage(lang)
        }
      }
    },
    [services.i18n, language]
  )

  function toggleLanguage(value: string) {
    setLanguage(value)
    services.i18n?.changeLanguage(value)
  }

  return (
    <Container backgroundColor={'surface'}>
      <Box flex={1} justifyContent="center">
        <Text variant={'body/medium'}>
          Discover {language}: {t('global.save')}
        </Text>

        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-around'}
          marginVertical={'l'}>
          <Button title="EN" onPress={() => toggleLanguage('en')} />
          <Button title="ES" onPress={() => toggleLanguage('es')} />
          <Button title="PR" onPress={() => toggleLanguage('pr')} />
        </Box>
        {session.token ? (
          <Button title="Logout" onPress={onPressLogout} />
        ) : (
          <Button title="Login" onPress={onPressLogin} />
        )}
      </Box>

      <Box>
        {categories &&
          categories.edges &&
          categories?.edges.map((cat) => <Text key={cat?.node?.id}>{cat?.node?.name}</Text>)}
      </Box>
    </Container>
  )
}

export default DiscoverView
