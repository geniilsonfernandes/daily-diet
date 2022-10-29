import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import getStatusColor from "../../utils/getStatusColor";
import { PercentHeader } from "../../components/PercentHeader";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Box } from "../../components/Box";

import * as S from "./styles";

function Statistics() {
  const statusColor = getStatusColor(54);
  const navigation = useNavigation();
  const theme = useTheme();

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  return (
    <S.Wrapper backgroundColor={statusColor.light}>
      <HeaderNavigation
        onClickArrowLeft={handleGoBack}
        color={statusColor.dark}
      />

      <PercentHeader percent={90.86} />

      <S.Content>
        <S.ContentHead>
          <S.ContentText>Estatísticas gerais</S.ContentText>
        </S.ContentHead>

        <Box style={{ marginBottom: theme.SPACING.MD }}>
          <S.BoxTitle>4</S.BoxTitle>
          <S.SubTitle>melhor sequência de pratos dentro da dieta</S.SubTitle>
        </Box>

        <Box style={{ marginBottom: theme.SPACING.MD }}>
          <S.BoxTitle>109</S.BoxTitle>
          <S.SubTitle>refeições registradas</S.SubTitle>
        </Box>

        <View
          style={{
            paddingBottom: theme.SPACING.MD,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Box
            backgroundColor={theme.COLORS.BRAND.GREEN.LIGHT}
            style={{ width: "47%" }}
          >
            <S.BoxTitle>32</S.BoxTitle>
            <S.SubTitle>refeições dentro da dieta</S.SubTitle>
          </Box>

          <Box
            backgroundColor={theme.COLORS.BRAND.RED.LIGHT}
            style={{ width: "47%" }}
          >
            <S.BoxTitle>77</S.BoxTitle>
            <S.SubTitle>refeições fora da dieta</S.SubTitle>
          </Box>
        </View>
      </S.Content>
    </S.Wrapper>
  );
}

export default Statistics;
