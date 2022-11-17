import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type WrapperProps = {
  backgroundColor: string;
};

export const Wrapper = styled(SafeAreaView)<WrapperProps>`
  ${({ backgroundColor }) => css`
    background: ${backgroundColor};
    height: 100%;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    background: ${theme.COLORS.BASE.WHITE};
    border-top-left-radius: ${theme.RADIUS * 3}px;
    border-top-right-radius: ${theme.RADIUS * 3}px;
    margin-top: 68px;
    padding: 0 ${theme.SPACING.XL}px;
    padding-top: ${theme.SPACING.XL}px;
    flex-grow: 1;
  `}
`;

export const CardText = styled.View`
  margin-bottom: 16px;
`;

export const MealStatus = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  position: relative;
`;
export const Footer = styled.View`
  ${({ theme }) => css`
    background: ${theme.COLORS.BASE.WHITE};
    padding: 16px ${theme.SPACING.XL}px;
  `}
`;

export const FooterItem = styled.View`
  padding-top: 8px;
`;

type StatusDiet = {
  status?: "POSITIVE" | "NEGATIVE";
};
export const StatusDots = styled.View<StatusDiet>`
  ${({ theme, status = "POSITIVE" }) => css`
    position: absolute;
    left: 14px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: ${status == "POSITIVE"
      ? theme.COLORS.BRAND.GREEN.DARK
      : theme.COLORS.BRAND.RED.DARK};
  `}
`;
export const StatusText = styled.Text`
  ${({ theme }) => css`
    background: ${theme.COLORS.BASE.GRAY_600};
    padding: 8px 32px;
    padding-right: 16px;
    border-radius: 50px;
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_100};
  `}
`;

type TitleProps = {
  size?: "XL" | "SM";
};

export const Title = styled.Text<TitleProps>`
  ${({ theme, size = "SM" }) => css`
    font-size: ${size == "SM" ? theme.FONT_SIZE.XL : theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_200};
    font-weight: 600;
    padding-bottom: 4px;
  `}
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_300};
    font-weight: 600;
  `}
`;
