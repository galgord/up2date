import React from 'react'
import Box from '@app/components/Box'
import Icon from '@app/components/Icon'
import Text from '@app/components/Text'
import { Theme } from '@app/utils/theme'
import { AddressListItemProps } from './types'

const AddressListItem: React.FC<AddressListItemProps> = ({
  iconName,
  label,
  iconColor = 'scrim',
  textColor = 'scrim',
}) => (
  <Box
    flexDirection="row"
    height={48}
    paddingLeft="s"
    gap="s"
    alignItems="center"
    borderBottomWidth={1}
    borderBottomColor="outlineVariant">
    <Icon name={iconName} size={24} color={iconColor as keyof Theme['colors']} />
    <Text variant="label/medium" color={textColor as keyof Theme['colors']}>
      {label}
    </Text>
  </Box>
)

export default AddressListItem
