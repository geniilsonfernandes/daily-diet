import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

type HeaderNavigationProps = {
  color?: string;
  onClickArrowLeft: () => void;
};

export const HeaderNavigation = ({
  onClickArrowLeft,
  color
}: HeaderNavigationProps) => {
  return (
    <S.HeaderNavigation>
      <S.IconBack onPress={onClickArrowLeft}>
        <Feather name="arrow-left" size={24} color={color} />
      </S.IconBack>
    </S.HeaderNavigation>
  );
};
