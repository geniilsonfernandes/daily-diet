import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { MealTypes } from "../../types";
import { getUnicMeals, removeMeal } from "../../store";

import { Button } from "../../components/Button";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import ModalDeleteMeal from "../../components/ModalDeleteMeal";

import * as S from "./styles";

function Meal() {
  const [data, setData] = useState<MealTypes>();
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const params = route.params as { id: string };

  const theme = useTheme();

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  const handleGoEditMeal = () => {
    navigation.navigate("Create", { mode: "edit", meal: data });
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleClickToDeleteMeal = async () => {
    try {
      await removeMeal(params.id);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert(`Refeiçao`, "Não foi possivel excluir refeição");
      console.log(error);
    }
  };

  useEffect(() => {
    const getMeal = async () => {
      try {
        const meal = await getUnicMeals(params.id);
        setData(meal);
      } catch (error) {
        console.log(error);
      }
    };
    getMeal();
  }, []);

  return (
    <S.Wrapper
      backgroundColor={
        data?.diet === "no"
          ? theme.COLORS.BRAND.RED.LIGHT
          : theme.COLORS.BRAND.GREEN.LIGHT
      }
    >
      <HeaderNavigation title={`Refeição`} onClickArrowLeft={handleGoBack} />
      <S.Content>
        <S.CardText>
          <S.Title size="SM">{data?.name}</S.Title>
          <S.Description>{data?.description}</S.Description>
        </S.CardText>
        <S.CardText>
          <S.Title size="XL">Data e hora</S.Title>
          <S.Description>
            {data?.date} às {data?.time}
          </S.Description>
        </S.CardText>
        <S.MealStatus>
          <S.StatusText>
            {data?.diet === "no" ? "fora da dieta" : "dentro da dieta"}{" "}
          </S.StatusText>
          <S.StatusDots
            status={data?.diet === "no" ? "NEGATIVE" : "POSITIVE"}
          />
        </S.MealStatus>
      </S.Content>

      <ModalDeleteMeal
        onRequestClose={handleCloseModal}
        isVisible={modalVisible}
        onDeleteMeal={() => handleClickToDeleteMeal()}
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
