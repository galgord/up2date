import {createTheme} from '@shopify/restyle';

const theme = createTheme({
  colors: {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',
  
    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',
  
    black: '#0B0B0B',
    white: '#F0F2F3',
    gray: '#9DA3B4',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: 'ShopifySans-Bold',
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: 'black',
    },
    subheader: {
      fontFamily: 'ShopifySans-SemiBold',
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'black',
    },
    body: {
      fontFamily: 'ShopifySans',
      fontSize: 16,
      lineHeight: 24,
      color: 'black',
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
export default theme;