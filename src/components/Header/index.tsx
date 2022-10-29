import { Image } from "react-native";

import * as S from "./styles";

import logo from "../../assets/logo.png";
import user from "../../assets/user.png";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo source={logo} />
      <S.User>
        <Image source={user} />
      </S.User>
    </S.Wrapper>
  );
};
