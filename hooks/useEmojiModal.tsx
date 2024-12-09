import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setIsEmojiModalVisible, setEmojiSelected } from "@/redux/features/app";

export default function useEmojiModal() {
  const state = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const { isEmojiModalVisible, emojiSelected, isEmojiSelectedActive } = state;

  const enableModalEmoji = () => {
    dispatch(setIsEmojiModalVisible(true));
  };

  const disableModalEmoji = () => {
    dispatch(setIsEmojiModalVisible(false));
  };

  const selectEmoji = (emoji: string) => {
    dispatch(setEmojiSelected(emoji));
    disableModalEmoji();
  };

  const resetSelectEmoji = () => {
    dispatch(setEmojiSelected(""));
  };

  return {
    isEmojiModalVisible,
    isEmojiSelectedActive,
    emojiSelected,
    enableModalEmoji,
    disableModalEmoji,
    selectEmoji,
    resetSelectEmoji,
  };
}
