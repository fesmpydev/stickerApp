import { StyleSheet, View } from "react-native";
import useImagePicker from "@/hooks/useImagePicker";
import Button from "@/components/Button";

export default function ImageSelectionButtons() {
  const { choosePhoto, usePhoto } = useImagePicker();

  return (
    <View style={styles.container}>
      <Button
        label="Choose a photo"
        icon={{ name: "picture-o", size: 18, color: "#25292e" }}
        bgColor="#fff"
        textColor="#000"
        bRadius={10}
        onPress={choosePhoto}
      />
      <Button label="Use this photo" onPress={usePhoto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
