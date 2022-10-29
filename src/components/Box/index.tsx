import { TouchableOpacityProps, ViewStyle } from "react-native";
import * as S from "./styles";

type BoxProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
} & TouchableOpacityProps;

export const Box = ({ children, backgroundColor, style }: BoxProps) => {
  return (
    <S.Wrapper backgroundColor={backgroundColor} style={style}>
      {children}
    </S.Wrapper>
  );
};
