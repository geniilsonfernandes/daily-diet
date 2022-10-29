import {
  TouchableOpacity,
  TextInput as TextInputNative,
  ScrollView
} from "react-native";
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
    flex: 1 0 75%;
  `}
`;
export const ContentFooter = styled.View`
  ${({ theme }) => css`
    flex-grow: 1;
    justify-content: center;
    background-color: ${theme.COLORS.BASE.WHITE};
    padding: 0 ${theme.SPACING.XL}px;
    max-height: 100px;
  `}
`;

export const WrapperInput = styled.View`
  ${({ theme }) => css`
    flex-grow: 1;
  `}
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

export const WrapperTextInput = styled(TouchableOpacity)`
  ${({ theme }) => css`
    border-radius: ${theme.RADIUS}px;
    border: 1px solid ${theme.COLORS.BASE.GRAY_500};
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
