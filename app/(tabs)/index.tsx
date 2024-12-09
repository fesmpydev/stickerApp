import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useImagePicker from "@/hooks/useImagePicker";
import useEmojiModal from "@/hooks/useEmojiModal";
import useDownloadImage from "@/hooks/useDownloadImage";
import ImageViewer from "@/components/ImageViewer";
import ShowAppOptions from "@/components/ShowAppOptions";
import ImageSelectionButtons from "@/components/ImageSelectionButtons";
import EmojiModal from "@/components/EmojiModal";
import EmojiList from "@/components/EmojiList";
import EmojiSelected from "@/components/EmojiSelected";
import ScreenShot from "@/components/ScreenShot";

export default function HomeScreen() {
  const { showAppOptions, selectedImage } = useImagePicker();
  const { isEmojiSelectedActive } = useEmojiModal();
  const { imageRef, downloadImage } = useDownloadImage();

  const mainImage = require("@/assets/images/background-image.png");

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScreenShot imageRef={imageRef}>
          <ImageViewer imgSource={mainImage} selectedImage={selectedImage} />
          {isEmojiSelectedActive && <EmojiSelected />}
        </ScreenShot>
      </View>
      <View style={styles.optionsContainer}>
        {showAppOptions ? (
          <ShowAppOptions onDownloadImage={downloadImage} />
        ) : (
          <ImageSelectionButtons />
        )}
        <EmojiModal>
          <EmojiList />
        </EmojiModal>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 1,
  },
  optionsContainer: {
    position: "absolute",
    bottom: 30,
  },
});
