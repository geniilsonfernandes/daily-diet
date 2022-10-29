import { useNavigation } from "@react-navigation/native";
import { SectionList, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MealsCard } from "../../components/MealsCard";
import { PercentCard } from "../../components/PercentCard";

import * as S from "./styles";

const DATA = [
  {
    title: "10.10.22",
    data: [
      { id: "31", meal: "X-tudo", time: "20:00", diet: false },
      { id: "1212", meal: "Whey protein com leite", time: "20:00", diet: true }
    ]
  },
  {
    title: "10.09.22",
    data: [
      { id: "131", meal: "X-tudo", time: "20:00", diet: false },
      { id: "211", meal: "Whey protein com leite", time: "20:00", diet: true },
      { id: "3211", meal: "Whey protein com leite", time: "20:00", diet: true },
      {
        id: "21211",
        meal: "Whey protein com leite",
        time: "20:00",
        diet: true
      },
      { id: "2121", meal: "Whey protein com leite", time: "20:00", diet: true },
      { id: "21311", meal: "Whey protein com leite", time: "20:00", diet: true }
    ]
  }
];

function Home() {
  const navigation = useNavigation();
  const pe = 86;
  const handleShowStatistics = () => {
    navigation.navigate("Statistics", {
      percent: pe
    });
  };

  return (
    <S.Wrapper>
      <Header />
      <PercentCard onPress={() => handleShowStatistics()} percent={pe} />
      <S.ListHead>
        <S.Label>Refeições</S.Label>
        <Button title="Nova refeição" icon="plus" fill />
      </S.ListHead>
      <View style={{ flex: 1, paddingBottom: 16 }}>
        <SectionList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
          sections={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MealsCard title={item.meal} timer={item.time} diet={item.diet} />
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
