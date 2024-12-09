import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </Provider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#fff",
  },
});
