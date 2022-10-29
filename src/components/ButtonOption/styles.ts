import { TouchableOpacity } from "react-native";

import styled, { css, DefaultTheme } from "styled-components/native";

type OptionsButtonProps = {
  active?: boolean;
  color: "RED" | "GREEN";
};

const OptionsButtonModifier = {
  active: (theme: DefaultTheme, color: "RED" | "GREEN") => css`
    background: ${color == "GREEN"
      ? theme.COLORS.BRAND.GREEN.LIGHT
      : theme.COLORS.BRAND.RED.LIGHT};
    border: 1px solid
      ${color == "GREEN"
        ? theme.COLORS.BRAND.GREEN.DARK
        : theme.COLORS.BRAND.RED.DARK};
  `
};

export const OptionsButton = styled(TouchableOpacity)<OptionsButtonProps>`
  ${({ theme, active, color }) => css`
    height: 50px;
    flex: 1;
    justify-content: center;
    align-items: center;
    background: ${theme.COLORS.BASE.GRAY_600};
    border-radius: ${theme.RADIUS}px;
    flex-direction: row;
    ${active && OptionsButtonModifier.active(theme, color)}
  `}
`;
export const OptionText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.GRAY_200};
  `}
`;
type OptionStatusProps = Pick<OptionsButtonProps, "color">;
export const OptionStatus = styled.View<OptionStatusProps>`
  ${({ theme, color }) => css`
    width: 8px;
    border-radius: 4px;
    height: 8px;
    background: ${color === "RED"
      ? theme.COLORS.BRAND.RED.DARK
      : theme.COLORS.BRAND.GREEN.DARK};
    margin-right: 8px;
  `}
`;
