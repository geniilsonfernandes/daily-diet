import { TouchableOpacity } from "react-native";
import styled, { css, DefaultTheme } from "styled-components/native";
import { ButtonProps } from ".";

const WrapperModifer = {
  fill: (theme: DefaultTheme) => css`
    background: ${theme.COLORS.BASE.GRAY_200};
  `,
  border: (theme: DefaultTheme) => css`
    background: ${theme.COLORS.BASE.WHITE};
    border: ${theme.COLORS.BASE.GRAY_200};
  `,
  disabled: (theme: DefaultTheme) => css`
    background: ${theme.COLORS.BASE.GRAY_300};
  `
};

export const Wrapper = styled(TouchableOpacity)<
  Pick<ButtonProps, "fill" | "isDisabled">
>`
  ${({ theme, fill, isDisabled }) => css`
    background: ${theme.COLORS.BASE.GRAY_200};
    border-radius: ${theme.RADIUS}px;
    height: 50px;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    ${fill ? WrapperModifer.fill(theme) : WrapperModifer.border(theme)}
    ${isDisabled && WrapperModifer.disabled(theme)}
  `}
`;

export const Title = styled.Text<Pick<ButtonProps, "fill">>`
  ${({ theme, fill }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${fill ? theme.COLORS.BASE.WHITE : theme.COLORS.BASE.GRAY_200};
    font-weight: 600;
    margin: 0 8px;
  `}
`;
