import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from "@expo-google-fonts/nunito-sans";

import { Loading } from "./src/components/Loading";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {fontsLoaded ? (
          <Text>Open up App.tsx to start working on your app!</Text>
        ) : (
          <Loading />
        )}
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
