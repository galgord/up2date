import { LayoutProps, ResponsiveValue, layout } from '@shopify/restyle'
import { Theme } from '@app/utils/theme'
import Box from '../Box/Box'

interface Props {
  children: React.ReactNode
  gutter?: ResponsiveValue<keyof Theme['spacing'], Theme['breakpoints']>
  layout?: LayoutProps<Theme>
  backgroundColor?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>
}

const Container = ({ children, gutter = 'm', backgroundColor, layout }: Props) => {
  return (
    <Box padding={gutter} height={'100%'} backgroundColor={backgroundColor}>
      {children}
    </Box>
  )
}

export default Container
