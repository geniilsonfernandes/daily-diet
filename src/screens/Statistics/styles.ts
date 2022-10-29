import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type WrapperProps = {
  backgroundColor: string;
};
export const Wrapper = styled(SafeAreaView)<WrapperProps>`
  ${({ backgroundColor }) => css`
    background: ${backgroundColor};
  `}
`;

export const HeaderNavigation = styled.View`
  ${({ theme }) => css`
    position: absolute;
    top: 68px;
    left: ${theme.SPACING.SM}px;
    z-index: 100;
  `}
`;
export const IconBack = styled(TouchableOpacity)``;

export const Content = styled.View`
  ${({ theme }) => css`
    background: ${theme.COLORS.BASE.WHITE};
    height: 100%;
    border-radius: ${theme.RADIUS * 3}px;
    margin-top: -40px;
    padding: 0 ${theme.SPACING.XL}px;
  `}
`;

export const ContentHead = styled.View`
  padding: 32px 0;
`;

export const ContentText = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BASE.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
export const BoxTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-weight: 600;
    color: ${theme.COLORS.BASE.GRAY_100};
    margin-bottom: ${theme.SPACING.SM - 8}px;
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-weight: 400;
    color: ${theme.COLORS.BASE.GRAY_200};
  `}
`;
