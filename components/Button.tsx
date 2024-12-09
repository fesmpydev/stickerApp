import { StyleSheet, View, Pressable, Text } from "react-native";
import { Props } from "@/interface/button.types";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({
  label,
  icon,
  bgColor,
  textColor,
  bRadius,
  width,
  column,
  onPress,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        bgColor && { backgroundColor: bgColor },
        bRadius ? { borderRadius: bRadius } : "",
        width ? { width: width } : "",
      ]}
    >
      <Pressable
        style={[
          styles.button,
          icon && {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          column ? { flexDirection: "column" } : "",
        ]}
        onPress={onPress}
      >
        {icon && (
          <FontAwesome name={icon.name} size={icon.size} color={icon.color} />
        )}
        <Text style={[styles.buttonLabel, textColor && { color: textColor }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 14,
  },
});
