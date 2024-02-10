import { LayoutProps, ResponsiveValue, layout } from '@shopify/restyle'
import { Theme } from '@app/utils/theme'
import Box from '../Box/Box'

interface Props {
  children: React.ReactNode
  gutter?: ResponsiveValue<keyof Theme['spacing'], Theme['breakpoints']>
  layout?: LayoutProps<Theme>
  gap?: ResponsiveValue<keyof Theme['spacing'], Theme['breakpoints']>
  backgroundColor?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>
}

const Container = ({ children, gutter = 'm', backgroundColor, layout, gap }: Props) => (
  <Box gap={gap} padding={gutter} height="100%" backgroundColor={backgroundColor}>
    {children}
  </Box>
)

export default Container
