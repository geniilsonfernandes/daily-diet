import { View } from "react-native";
import { useState, useCallback } from "react";
import { useTheme } from "styled-components/native";
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from "@react-navigation/native";
import getStatusColor from "../../utils/getStatusColor";
import { PercentHeader } from "../../components/PercentHeader";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Box } from "../../components/Box";
import { StatisticsTypes, UserStatisticsTypes } from "../../types";

import * as S from "./styles";
import { getAllMeals } from "../../store";
import { getUserStatistics } from "../../utils/getUserStatistics";

function Statistics() {
  const [userStatistics, setUserStatistics] = useState<UserStatisticsTypes>();
  const params = useRoute();
  const item = params.params as StatisticsTypes;

  const statusColor = getStatusColor(item.percent);
  const navigation = useNavigation();
  const theme = useTheme();

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  const getData = async () => {
    try {
      const data = await getAllMeals();
      const { sequence } = getUserStatistics(data);
      setUserStatistics(sequence);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  return (
    <S.Wrapper backgroundColor={statusColor.light}>
      <HeaderNavigation
        onClickArrowLeft={handleGoBack}
        color={statusColor.dark}
      />

      <PercentHeader percent={userStatistics?.percentage} />

      <S.Content>
        <S.ContentHead>
          <S.ContentText>Estatísticas gerais</S.ContentText>
        </S.ContentHead>

        <Box style={{ marginBottom: theme.SPACING.MD }}>
          <S.BoxTitle>{userStatistics?.bestSequenc}</S.BoxTitle>
          <S.SubTitle>melhor sequência de pratos dentro da dieta</S.SubTitle>
        </Box>

        <Box style={{ marginBottom: theme.SPACING.MD }}>
          <S.BoxTitle>{userStatistics?.diet.allMeals}</S.BoxTitle>
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
            <S.BoxTitle>{userStatistics?.diet.inDiet}</S.BoxTitle>
            <S.SubTitle>refeições dentro da dieta</S.SubTitle>
          </Box>

          <Box
            backgroundColor={theme.COLORS.BRAND.RED.LIGHT}
            style={{ width: "47%" }}
          >
            <S.BoxTitle>{userStatistics?.diet.outDiet}</S.BoxTitle>
            <S.SubTitle>refeições fora da dieta</S.SubTitle>
          </Box>
        </View>
      </S.Content>
    </S.Wrapper>
  );
}

export default Statistics;
