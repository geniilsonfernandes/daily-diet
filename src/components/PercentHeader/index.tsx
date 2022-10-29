import * as S from "./styles";
import getStatusColor from "../../utils/statusColor";

export type PercentHeaderProps = {
  percent?: number;
  limit?: number;
};

export const PercentHeader = ({ percent = 0 }: PercentHeaderProps) => {
  const statusColor = getStatusColor(54);

  return (
    <S.Wrapper backgroundColor={statusColor.light}>
      <S.Title>{percent}%</S.Title>
      <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
    </S.Wrapper>
  );
};
