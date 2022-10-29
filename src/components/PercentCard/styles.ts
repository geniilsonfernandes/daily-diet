import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type WrapperProps = {
  backgroundColor?: string;
};

export const Wrapper = styled(TouchableOpacity)<WrapperProps>`
  ${({ theme, backgroundColor }) => css`
    background: ${backgroundColor};
    justify-content: center;
    width: 100%;
    padding: 20px;
    border-radius: ${theme.RADIUS}px;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XX}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-weight: 600;
    color: ${theme.COLORS.BASE.GRAY_100};
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-weight: 400;
    color: ${theme.COLORS.BASE.GRAY_200};
  `}
`;
export const Icon = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  padding: 16px;
`;
