import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../components/Button";
import positive from "../../assets/diet_positive.png";
import Negative from "../../assets/diet_negative.png";

import * as S from "./styles";

function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();
  const params = route.params as { diet: string };

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  return (
    <S.Wrapper>
      <S.Title color={params.diet === "yes" ? "GREEN" : "RED"}>
        {params.diet === "yes" ? "Continue assim!" : "Que pena!"}
      </S.Title>
      {params.diet === "yes" ? (
        <S.SubTitle>
          Você continua <S.Strong>dentro da dieta.</S.Strong> Muito bem!
        </S.SubTitle>
      ) : (
        <S.SubTitle>
          Você <S.Strong>saiu da dieta</S.Strong> dessa vez, mas continue se
          esforçando e não desista!
        </S.SubTitle>
      )}

      <S.FeedbackImage source={params.diet === "yes" ? positive : Negative} />
      <S.Footer>
        <Button title="Ir para a página inicial" fill onPress={handleGoBack} />
      </S.Footer>
    </S.Wrapper>
  );
}

export default Feedback;
