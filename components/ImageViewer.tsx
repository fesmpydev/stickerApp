import { View, StyleSheet } from "react-native";
import { ImageViewerProps } from "@/interface/imageViewer.types";
import { Image } from "expo-image";

export default function ImageViewer({
  imgSource,
  selectedImage,
}: ImageViewerProps) {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={selectedImage ? { uri: selectedImage } : imgSource}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    objectFit: "cover",
  },
});
