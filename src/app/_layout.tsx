
import { Slot } from 'expo-router';
import { SessionProvider } from '@Utils/ctx';
import theme from '@Utils/theme';
import { ThemeProvider } from '@shopify/restyle';

const Root = () => {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <Slot screenOptions={{
            headerShown: false
        }}/>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default Root;