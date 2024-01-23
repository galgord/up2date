import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';
import Login from '../components/login';
import {ThemeProvider} from '@shopify/restyle';
import theme from '../utils/theme';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Login />
        <Link href="/home">
          <Text>Home</Text>
        </Link>
      </View>
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
export default App;