import {
  TouchableOpacity,
  TextInput as TextInputNative,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css, DefaultTheme } from "styled-components/native";

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
    padding-bottom: ${theme.SPACING.SM}px;
  `}
`;

export const DietOptions = styled.View`
  ${({ theme }) => css`
    flex-grow: 1;
    padding-top: ${theme.SPACING.XL}px;
    padding-bottom: ${theme.SPACING.SM}px;
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

export const Error = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BRAND.RED.DARK};
    padding-top: ${theme.SPACING.SS}px;
  `}
`;
