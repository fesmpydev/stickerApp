import { View } from "react-native";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  imageRef: React.RefObject<View>;
}

/**
 * Este componente se utiliza junto con useDownloadImage. Este componente referencia un area que se necesita hacer un screen obteniendo la prop de referencia del custom hook mencionado. useDownloadImage se utiliza para ejecutar la funcionalidad de descarga de la imagen del contenido referenciado.
 * @param param
 * @returns
 */
export default function ScreenShot({ children, imageRef }: Props) {
  return (
    <View ref={imageRef} collapsable={false}>
      {children}
    </View>
  );
}
