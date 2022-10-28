import * as S from "./styles";

export type PercentHeaderProps = {
  percent?: number;
  limit?: number;
};

export const PercentHeader = ({
  percent = 0,
  limit = 75
}: PercentHeaderProps) => {
  const color = percent > limit ? "WARNING" : "NORMAL";

  return (
    <S.Wrapper backgroundColor={color}>
      <S.Title>{percent}%</S.Title>
      <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
    </S.Wrapper>
  );
};
