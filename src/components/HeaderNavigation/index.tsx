import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

type HeaderNavigationProps = {
  color?: string;
  title?: string;
  onClickArrowLeft?: () => void;
};

export const HeaderNavigation = ({
  onClickArrowLeft,
  color,
  title
}: HeaderNavigationProps) => {
  return (
    <S.HeaderNavigation>
      <S.Item>
        <S.IconBack onPress={onClickArrowLeft}>
          <Feather name="arrow-left" size={24} color={color} />
        </S.IconBack>
      </S.Item>
      <S.Item>{title && <S.Title>{title}</S.Title>}</S.Item>
      <S.Item></S.Item>
    </S.HeaderNavigation>
  );
};
