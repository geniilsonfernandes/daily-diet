import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { PercentCard } from "../../components/PercentCard";

import * as S from "./styles";

function Home() {
  const navigation = useNavigation();

  const handleShowStatistics = () => {
    navigation.navigate("Statistics");
  };

  return (
    <S.Wrapper>
      <Header />
      <PercentCard onPress={() => handleShowStatistics()} percent={76} />
      <S.ListHead>
        <S.Label>Refeições</S.Label>
        <Button title="Nova refeição" />
      </S.ListHead>
    </S.Wrapper>
  );
}

export default Home;
