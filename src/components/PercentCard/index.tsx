import * as S from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export type PercentCardProps = {
  percent?: number;
  limit?: number;
};

export const PercentCard = ({ percent = 0, limit = 75 }: PercentCardProps) => {
  const theme = useTheme();
  const color = percent > limit ? "WARNING" : "NORMAL";

  return (
    <S.Wrapper backgroundColor={color}>
      <S.Title>{percent}%</S.Title>
      <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
      <S.Icon>
        <Feather
          name="arrow-up-right"
          size={24}
          color={
            color !== "NORMAL"
              ? theme.COLORS.BRAND.GREEN.DARK
              : theme.COLORS.BRAND.RED.DARK
          }
        />
      </S.Icon>
    </S.Wrapper>
  );
};
