import styled, { css } from "styled-components/native";

type WrapperProps = {
  backgroundColor?: "NORMAL" | "WARNING";
};

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, backgroundColor }) => css`
    background: ${backgroundColor !== "NORMAL"
      ? theme.COLORS.BRAND.GREEN.LIGHT
      : theme.COLORS.BRAND.RED.LIGHT};
    justify-content: center;
    width: 100%;
    height: 200px;
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
