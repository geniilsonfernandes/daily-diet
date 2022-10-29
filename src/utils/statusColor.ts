import theme from "../theme";

type statusColorProps = (
  percent: number,
  limit?: number
) => {
  light: string;
  mid: string;
  dark: string;
};

const statusColor: statusColorProps = (percent, limit = 75) => {
  const color = percent > limit ? "WARNING" : "NORMAL";
  const light =
    color !== "NORMAL"
      ? theme.COLORS.BRAND.GREEN.LIGHT
      : theme.COLORS.BRAND.RED.LIGHT;
  const mid =
    color !== "NORMAL"
      ? theme.COLORS.BRAND.GREEN.MID
      : theme.COLORS.BRAND.RED.MID;
  const dark =
    color !== "NORMAL"
      ? theme.COLORS.BRAND.GREEN.DARK
      : theme.COLORS.BRAND.RED.DARK;

  return { light, mid, dark };
};

export default statusColor;
