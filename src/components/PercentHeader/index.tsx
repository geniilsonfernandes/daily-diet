import * as S from "./styles";
import getStatusColor from "../../utils/getStatusColor";

export type PercentHeaderProps = {
  percent?: number;
  limit?: number;
};

export const PercentHeader = ({ percent = 0 }: PercentHeaderProps) => {
  const statusColor = getStatusColor(percent);

  return (
    <S.Wrapper backgroundColor={statusColor.light}>
      <S.Title>{percent}%</S.Title>
      <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
    </S.Wrapper>
  );
};
