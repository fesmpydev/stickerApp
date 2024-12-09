import { FlatList, StyleSheet, Platform, Pressable } from "react-native";
import { Image } from "expo-image";
import { emojiList } from "@/constants/emojis";
import useEmojiModal from "@/hooks/useEmojiModal";

export default function EmojiList() {
  const { selectEmoji } = useEmojiModal();
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      contentContainerStyle={styles.listContainer}
      data={emojiList}
      renderItem={({ item, index }) => (
        <Pressable onPress={() => selectEmoji(item)}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#fff",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 30,
  },
});
