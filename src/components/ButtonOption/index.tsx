import { TouchableOpacityProps, ViewStyle } from "react-native";
import * as S from "./styles";

export type OptionsButtonProps = {
  active?: boolean;
  color: "RED" | "GREEN";
  title: string;
  style?: ViewStyle;
} & TouchableOpacityProps;

export const ButtonOption = ({
  color = "GREEN",
  active,
  title,
  style,
  ...rest
}: OptionsButtonProps) => {
  return (
    <S.OptionsButton color={color} active={active} {...rest} style={style}>
      <S.OptionStatus color={color} />
      <S.OptionText>{title}</S.OptionText>
    </S.OptionsButton>
  );
};
