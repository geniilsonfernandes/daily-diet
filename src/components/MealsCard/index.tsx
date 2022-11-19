import { TouchableOpacityProps } from "react-native";
import { DietTypes } from "../../types";
import * as S from "./styles";

export type MealsCardProps = {
  title: string;
  timer: string;
  diet?: DietTypes;
} & TouchableOpacityProps;

export const MealsCard = ({ title, timer, diet, ...rest }: MealsCardProps) => {
  const titleFormated =
    title.length > 30 ? `${title.substring(0, 30)}...` : title;

  return (
    <S.Wrapper {...rest}>
      <S.Timer>{timer}</S.Timer>
      <S.Divisor />
      <S.Title>{titleFormated}</S.Title>
      <S.Status color={diet === "yes" ? "GREEN" : "RED"} />
    </S.Wrapper>
  );
};
