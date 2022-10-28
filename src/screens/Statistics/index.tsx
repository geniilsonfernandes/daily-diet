import { View, Text } from "react-native";
import { useTheme } from "styled-components/native";
import { Box } from "../../components/Box";
import { PercentHeader } from "../../components/PercentHeader";

import * as S from "./styles";

function Statistics() {
  const theme = useTheme();
  return (
    <View>
      <PercentHeader percent={90.86} />
      <S.Content>
        <S.ContentHead>
          <S.ContentText>Estatísticas gerais</S.ContentText>
        </S.ContentHead>
        <View style={{ paddingBottom: theme.SPACING.MD }}>
          <Box>
            <S.BoxTitle>4</S.BoxTitle>
            <S.SubTitle>melhor sequência de pratos dentro da dieta</S.SubTitle>
          </Box>
        </View>
        <View style={{ paddingBottom: theme.SPACING.MD }}>
          <Box>
            <S.BoxTitle>109</S.BoxTitle>
            <S.SubTitle>refeições registradas</S.SubTitle>
          </Box>
        </View>
        <View style={{ paddingBottom: theme.SPACING.MD, flexDirection: "row" }}>
          <View style={{ width: "50%", paddingRight: theme.SPACING.MD / 2 }}>
            <Box backgroundColor={theme.COLORS.BRAND.GREEN.LIGHT}>
              <S.BoxTitle>32</S.BoxTitle>
              <S.SubTitle>refeições dentro da dieta</S.SubTitle>
            </Box>
          </View>
          <View style={{ width: "50%", paddingLeft: theme.SPACING.MD / 2 }}>
            <Box backgroundColor={theme.COLORS.BRAND.RED.LIGHT}>
              <S.BoxTitle>77</S.BoxTitle>
              <S.SubTitle>refeições fora da dieta</S.SubTitle>
            </Box>
          </View>
        </View>
      </S.Content>
    </View>
  );
}
export default Statistics;
