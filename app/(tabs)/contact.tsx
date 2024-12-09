import { Text, View, ImageBackground, StyleSheet } from "react-native";

export default function ContactScreen() {
  const background = require("@/assets/images/contact.jpg");
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Contact Screen</Text>
        <Text style={styles.bold}>
          Author: <Text style={styles.author}>Fabio Sosa</Text>
        </Text>
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
  },
  title: {
    fontSize: 26,
    fontWeight: 800,
    textAlign: "center",
    paddingTop: 30,
    color: "#fff",
  },
  bold: {
    fontWeight: 800,
    color: "#fff",
    fontSize: 14,
  },
  author: {
    fontSize: 14,
    color: "#fff",
  },
});
