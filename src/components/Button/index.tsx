import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

export type ButtonProps = {
  title: string;
  icon?: keyof typeof Feather.glyphMap;
  fill?: boolean;
} & TouchableOpacityProps;

export const Button = ({ title, icon, fill = false, ...rest }: ButtonProps) => {
  const theme = useTheme();

  return (
    <S.Wrapper {...rest} fill={fill}>
      {icon && (
        <Feather
          name={icon}
          size={18}
          color={fill ? theme.COLORS.BASE.WHITE : theme.COLORS.BASE.GRAY_200}
        />
      )}
      <S.Title fill={fill}>{title}</S.Title>
    </S.Wrapper>
  );
};
