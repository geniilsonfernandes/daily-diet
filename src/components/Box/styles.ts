import styled, { css } from "styled-components/native";

type WrapperProps = {
  backgroundColor?: string;
};

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, backgroundColor }) => css`
    background: ${backgroundColor
      ? backgroundColor
      : theme.COLORS.BASE.GRAY_600};
    border-radius: ${theme.RADIUS}px;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px;
  `}
`;
