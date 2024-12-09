import { StyleSheet } from "react-native";
import useEmojiModal from "@/hooks/useEmojiModal";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function EmojiSelected() {
  const { emojiSelected } = useEmojiModal();

  const scaleImage = useSharedValue(40);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      scaleImage.value !== 40 * 2
        ? (scaleImage.value = scaleImage.value * 2)
        : (scaleImage.value = Math.round(scaleImage.value / 2));
    });

  const drag = Gesture.Pan().onChange((e) => {
    translateX.value += e.changeX;
    translateY.value += e.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[styles.container, containerStyle]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={emojiSelected}
            resizeMode="contain"
            style={[styles.image, imageStyle]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    top: -350,
  },
  image: {
    width: 40,
    height: 40,
  },
});
