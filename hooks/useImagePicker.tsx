import { launchImageLibraryAsync, ImagePickerResult } from "expo-image-picker";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { changeUsePhoto, setSelectedImage } from "@/redux/features/app";

export default function useImagePicker() {
  const state = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const { showAppOptions, selectedImage } = state;

  const choosePhoto = async () => {
    try {
      const result: ImagePickerResult = await launchImageLibraryAsync({
        allowsEditing: true,
      });
      const { assets, canceled } = result;

      if (canceled) {
        return;
      }

      const uri = assets.find((item) => item.uri);

      if (!uri) throw new Error("Asset not found");

      dispatch(setSelectedImage(uri.uri));
    } catch (error) {
      console.log(error);
    }
  };

  const usePhoto = () => {
    dispatch(changeUsePhoto(true));
  };

  const resetPhoto = () => {
    dispatch(changeUsePhoto(false));
  };

  return {
    selectedImage,
    showAppOptions,
    choosePhoto,
    usePhoto,
    resetPhoto,
  };
}
