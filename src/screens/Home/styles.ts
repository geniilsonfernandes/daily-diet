import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  ${({ theme }) => css`
    padding: 0 ${theme.SPACING.SM}px;
  `}
`;
export const ListHead = styled.View`
  ${({ theme }) => css`
    padding: ${theme.SPACING.XXX}px 0;
  `}
`;
export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BASE.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-bottom: ${theme.SPACING.SM - 4}px;
  `}
`;
