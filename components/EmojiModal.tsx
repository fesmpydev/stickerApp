import { Modal, StyleSheet, View, Text, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Props } from "@/interface/emojiModal.types";
import useEmojiModal from "@/hooks/useEmojiModal";

export default function EmojiModal({ children }: Props) {
  const { isEmojiModalVisible, disableModalEmoji } = useEmojiModal();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isEmojiModalVisible}
    >
      <View style={styles.modalContent}>
        <View style={styles.titleContent}>
          <Text style={styles.title}>Choose an sticker</Text>
          <Pressable onPress={disableModalEmoji}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    width: "100%",
    height: "25%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContent: {
    height: "20%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
});
