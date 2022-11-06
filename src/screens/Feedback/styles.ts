import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 48px;
  `}
`;

type TitleColorProps = {
  color: "RED" | "GREEN";
};
export const Title = styled.Text<TitleColorProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-weight: 600;
    color: ${color === "GREEN"
      ? theme.COLORS.BRAND.GREEN.DARK
      : theme.COLORS.BRAND.RED.DARK};
    margin-bottom: ${theme.SPACING.SM - 8}px;
    text-align: center;
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-weight: 400;
    color: ${theme.COLORS.BASE.GRAY_200};
    margin-bottom: 48px;
  `}
`;
export const Strong = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-weight: 600;
    color: ${theme.COLORS.BASE.GRAY_200};
  `}
`;

export const FeedbackImage = styled(Image)``;
export const Footer = styled.View`
  width: 190px;
  margin-top: 48px;
`;
