import { TouchableOpacity, Image } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.SPACING.XX}px 0;
  `}
`;
export const Logo = styled(Image)``;
export const User = styled(TouchableOpacity)`
  ${({ theme }) => css`
    background: ${theme.COLORS.BASE.GRAY_100};
    padding: 3px;
    border-radius: 50px;
  `}
`;
