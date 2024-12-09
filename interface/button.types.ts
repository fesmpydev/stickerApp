import FontAwesome from "@expo/vector-icons/FontAwesome";

type FontAwesomeGlyphs = keyof typeof FontAwesome.glyphMap;

interface Icon {
  name: FontAwesomeGlyphs;
  size: number;
  color: string;
}

export interface Props {
  label: string;
  icon?: Icon;
  bgColor?: "#fff" | "#000";
  textColor?: "#fff" | "#000";
  bRadius?: number;
  width?: number;
  column?: boolean;
  onPress: () => void;
}
