import { useRef, useEffect } from "react";
import { View, Platform } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import domToImage from "dom-to-image";

export default function useDownloadImage() {
  const imageRef = useRef<View>(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();

  useEffect(() => {
    if (status === null) {
      requestPermission().then();
    }
  }, []);

  const downloadImage = async () => {
    try {
      if (Platform.OS === "web") {
        if (imageRef.current) {
          // @ts-ignore
          const dataUrl = await domToImage.toJpeg(imageRef.current, {
            quality: 0.95,
            width: 320,
            height: 440,
          });

          let link = document.createElement("a");
          link.download = "sticker-smash.jpeg";
          link.href = dataUrl;
          link.click();
        }
      } else {
        const localURI = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localURI);
        localURI && alert("Saved!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    imageRef,
    downloadImage,
  };
}
