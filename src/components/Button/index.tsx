import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

export type ButtonProps = {
  title: string;
  icon?: JSX.Element;
  fill?: boolean;
} & TouchableOpacityProps;

export const Button = ({ title, icon, fill = true, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper {...rest} fill={fill}>
      {icon}
      <S.Title fill={fill}>{title}</S.Title>
    </S.Wrapper>
  );
};
