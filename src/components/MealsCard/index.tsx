import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

export type MealsCardProps = {
  status?: "RED" | "GREEN";
  title: string;
  timer: string;
} & TouchableOpacityProps;

export const MealsCard = ({
  status,
  title,
  timer,
  ...rest
}: MealsCardProps) => {
  const titleFormated =
    title.length > 30 ? `${title.substring(0, 30)}...` : title;

  return (
    <S.Wrapper {...rest}>
      <S.Timer>{timer}</S.Timer>
      <S.Divisor />
      <S.Title>{titleFormated}</S.Title>
      <S.Status status={status} />
    </S.Wrapper>
  );
};
