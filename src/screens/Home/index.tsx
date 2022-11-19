import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { SectionList, View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MealsCard } from "../../components/MealsCard";
import { PercentCard } from "../../components/PercentCard";
import { getAllMeals } from "../../store";
import { MealTypes } from "../../types";
import { filteringMeals } from "../../utils/filteringMeals";

import * as S from "./styles";

type Data = {
  title: string;
  data: MealTypes[];
};

function Home() {
  const [data, setData] = useState<Data[]>();
  const navigation = useNavigation();

  const handleShowStatistics = () => {
    navigation.navigate("Statistics", {
      percent: 68
    });
  };

  const handleCreateNewMeal = () => {
    navigation.navigate("Create", { mode: "create" });
  };
  const handleShowMeal = (id: string) => {
    navigation.navigate("Meal", { id });
  };

  const getData = async () => {
    try {
      const data = await getAllMeals();

      console.log(filteringMeals(data));

      setData(filteringMeals(data));
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
    <S.Wrapper>
      <Header />
      <PercentCard onPress={() => handleShowStatistics()} percent={69} />
      <S.ListHead>
        <S.Label>Refeições</S.Label>
        <Button
          title="Nova refeição"
          icon="plus"
          fill
          onPress={() => handleCreateNewMeal()}
        />
      </S.ListHead>
      <View style={{ flex: 1, paddingBottom: 16 }}>
        <SectionList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
          sections={data || []}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MealsCard
              title={item.name}
              timer={item.time}
              diet={item.diet}
              onPress={() => handleShowMeal(item.id)}
            />
          )}
          renderSectionHeader={(item) => (
            <S.SectionTitle>{item.section.title}</S.SectionTitle>
          )}
        />
      </View>
    </S.Wrapper>
  );
}

export default Home;
