import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const HeaderNavigation = styled.View`
  ${({ theme }) => css`
    position: absolute;
    top: 56px;
    margin: 0 ${theme.SPACING.SM}px;
    z-index: 100;
    flex-direction: row;
  `}
`;

export const Item = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.BASE.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    min-width: 50%;
  `}
`;
export const IconBack = styled(TouchableOpacity)``;
