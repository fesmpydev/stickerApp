import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedImage: "",
  emojiSelected: "",
  isEmojiModalVisible: false,
  showAppOptions: false,
  isEmojiSelectedActive: false,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeUsePhoto: (state, action) => {
      state.showAppOptions = action.payload;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    setIsEmojiModalVisible: (state, action) => {
      state.isEmojiModalVisible = action.payload;
    },
    setEmojiSelected: (state, action) => {
      state.emojiSelected = action.payload;
      state.isEmojiSelectedActive = true;
    },
  },
});

export const {
  changeUsePhoto,
  setSelectedImage,
  setIsEmojiModalVisible,
  setEmojiSelected,
} = app.actions;
export default app.reducer;
