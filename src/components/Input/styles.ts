import { TouchableOpacity, TextInput as TextInputNative } from "react-native";

import styled, { css } from "styled-components/native";

export const WrapperInput = styled.View`
  flex-grow: 1;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_200};
    font-weight: 600;
    padding-bottom: 8px;
  `}
`;

type props = {
  hasError: boolean;
};
export const WrapperTextInput = styled(TouchableOpacity)<props>`
  ${({ theme, hasError }) => css`
    border-radius: ${theme.RADIUS}px;
    border: 1px solid
      ${hasError ? theme.COLORS.BRAND.RED.DARK : theme.COLORS.BASE.GRAY_500};
    min-height: 48px;
    justify-content: center;
  `}
`;
export const TextInput = styled(TextInputNative)`
  ${({ theme }) => css`
    padding: 0 ${theme.SPACING.MD}px;
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_200};
  `}
`;

export const InputValue = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_200};
  `}
`;
export const Error = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BRAND.RED.DARK};
  `}
`;
