import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type BoxProps = {
  children: React.ReactNode;
  backgroundColor?: string;
} & TouchableOpacityProps;

export const Box = ({ children, backgroundColor }: BoxProps) => {
  return <S.Wrapper backgroundColor={backgroundColor}>{children}</S.Wrapper>;
};
