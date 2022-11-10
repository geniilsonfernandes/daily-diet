import styled, { css } from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.25);
`;

export const ModalContent = styled.View`
  margin: 0 32px;
  padding: 15px 25px;

  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.BASE.WHITE};

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const ModalText = styled.Text`
  ${({ theme }) => css`
    margin: ${theme.SPACING.XL}px 0;
    width: 100%;
    text-align: center;

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_100};
  `}
`;
