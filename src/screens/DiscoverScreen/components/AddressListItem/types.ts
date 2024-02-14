import { IconNames } from '@app/components/Icon/Icon'
import { Theme } from '@app/utils/theme'

export interface AddressListItemProps {
  iconName: IconNames
  label: string
  iconColor?: keyof Theme['colors']
  textColor?: keyof Theme['colors']
}
