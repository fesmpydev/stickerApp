import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View>
        <Text>Sorry, the route does not exist</Text>
        <Link href="/">Go to home</Link>
      </View>
    </>
  );
}
