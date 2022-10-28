import { TouchableOpacity } from "react-native";
import styled, { css, DefaultTheme } from "styled-components/native";
import { MealsCardProps } from ".";

export const Wrapper = styled(TouchableOpacity)`
  ${({ theme }) => css`
    background: ${theme.COLORS.BASE.WHITE};
    border: 1px solid ${theme.COLORS.BASE.GRAY_400};
    border-radius: ${theme.RADIUS}px;
    padding: 0 12px;
    height: 50px;
    width: 100%;
    flex-direction: row;
    align-items: center;
  `}
`;

export const Divisor = styled.View`
  ${({ theme }) => css`
    height: ${theme.FONT_SIZE.MD}px;
    width: 2px;
    background: ${theme.COLORS.BASE.GRAY_400};
  `}
`;

const StatusModifer = {
  green: (theme: DefaultTheme) => css`
    background: ${theme.COLORS.BRAND.GREEN.MID};
  `,
  red: (theme: DefaultTheme) => css`
    background: ${theme.COLORS.BRAND.RED.MID};
  `
};

export const Status = styled.View<Pick<MealsCardProps, "status">>`
  ${({ theme, status }) => css`
    height: ${theme.FONT_SIZE.MD}px;
    width: ${theme.FONT_SIZE.MD}px;
    border-radius: ${theme.FONT_SIZE.MD / 2}px;
    background: transparent;
    margin-left: auto;
    ${status === "GREEN" && StatusModifer.green(theme)}
    ${status === "RED" && StatusModifer.red(theme)}
  `}
`;

export const Timer = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_200};
    font-weight: 600;
    margin: 0 8px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_200};
    font-weight: 400;
    margin: 0 8px;
  `}
`;
