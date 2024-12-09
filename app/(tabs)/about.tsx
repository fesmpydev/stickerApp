import { Text, View, ImageBackground, StyleSheet } from "react-native";

export default function AboutScreen() {
  const background = require("@/assets/images/about.jpg");
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>About Screen</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    objectFit: "cover",
  },
  title: {
    fontSize: 26,
    fontWeight: 800,
    textAlign: "center",
    paddingTop: 30,
    color: "#fff",
  },
});
