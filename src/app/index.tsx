import Login from '../components/login';
import {ThemeProvider} from '@shopify/restyle';
import theme from '../utils/theme';
import { Box } from '@Components/common';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box flex={1} mx={'m'} justifyContent='center'>
        <Login />
    </Box>
    </ThemeProvider>
  );
}


export default App;