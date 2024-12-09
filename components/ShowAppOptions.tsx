import { View, StyleSheet } from "react-native";
import Button from "./Button";
import useImagePicker from "@/hooks/useImagePicker";
import useEmojiModal from "@/hooks/useEmojiModal";

interface Props {
  onDownloadImage: () => void;
}

export default function ShowAppOptions({ onDownloadImage }: Props) {
  const { resetPhoto } = useImagePicker();
  const { enableModalEmoji, resetSelectEmoji } = useEmojiModal();
  return (
    <View style={styles.container}>
      <Button
        label="Reset"
        icon={{ name: "rotate-right", size: 34, color: "#fff" }}
        width={70}
        column
        onPress={() => {
          resetPhoto();
          resetSelectEmoji();
        }}
      />
      <Button
        label=""
        icon={{ name: "plus", size: 34, color: "#000" }}
        bgColor="#fff"
        bRadius={100}
        width={70}
        onPress={enableModalEmoji}
      />
      <Button
        label="Download"
        icon={{ name: "download", size: 34, color: "#fff" }}
        width={70}
        column
        onPress={onDownloadImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
