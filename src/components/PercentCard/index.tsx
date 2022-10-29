import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";
import getStatusColor from "../../utils/statusColor";

export type PercentCardProps = {
  percent?: number;
  limit?: number;
} & TouchableOpacityProps;

export const PercentCard = ({
  percent = 0,
  limit = 75,
  ...rest
}: PercentCardProps) => {
  const statusColor = getStatusColor(percent, limit);

  return (
    <S.Wrapper backgroundColor={statusColor.light} {...rest}>
      <S.Title>{percent}%</S.Title>
      <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
      <S.Icon>
        <Feather name="arrow-up-right" size={24} color={statusColor.dark} />
      </S.Icon>
    </S.Wrapper>
  );
};
