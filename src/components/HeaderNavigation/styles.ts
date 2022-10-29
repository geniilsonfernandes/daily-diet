import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const HeaderNavigation = styled.View`
  ${({ theme }) => css`
    position: absolute;
    top: 68px;
    left: ${theme.SPACING.SM};
    z-index: 100;
  `}
`;
export const IconBack = styled(TouchableOpacity)``;
