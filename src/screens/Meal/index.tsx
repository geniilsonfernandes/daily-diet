import { useState } from "react";
import getStatusColor from "../../utils/getStatusColor";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import ModalDeleteMeal from "../../components/ModalDeleteMeal";

import * as S from "./styles";

function Meal() {
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const params = route.params as { id: string };

  const statusColor = getStatusColor(85);

  const handleGoBack = () => {
    navigation.navigate("Home");
  };
  const handleGoEditMeal = () => {
    navigation.navigate("Create");
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const dieat = true;

  return (
    <S.Wrapper backgroundColor={statusColor.light}>
      <HeaderNavigation
        title={`${params.id} Refeição`}
        onClickArrowLeft={handleGoBack}
      />
      <S.Content>
        <S.CardText>
          <S.Title size="SM">X-Tudo</S.Title>
          <S.Description>Xis completo da lancheria do bairro</S.Description>
        </S.CardText>
        <S.CardText>
          <S.Title size="XL">Data e hora</S.Title>
          <S.Description>Xis completo da lancheria do bairro</S.Description>
        </S.CardText>
        <S.MealStatus>
          <S.StatusText>
            {dieat ? "fora da dieta" : "dentro da dieta"}{" "}
          </S.StatusText>
          <S.StatusDots status="NEGATIVE" />
        </S.MealStatus>
      </S.Content>

      <ModalDeleteMeal
        onRequestClose={handleCloseModal}
        isVisible={modalVisible}
        onDeleteMeal={() => {
          console.log("deletee");
        }}
      />

      <S.Footer>
        <S.FooterItem>
          <Button
            title="Editar refeição"
            fill
            icon="edit"
            onPress={() => handleGoEditMeal()}
          />
        </S.FooterItem>
        <S.FooterItem>
          <Button
            title="Excluir refeição"
            icon="trash"
            onPress={() => setModalVisible(true)}
          />
        </S.FooterItem>
      </S.Footer>
    </S.Wrapper>
  );
}

export default Meal;
