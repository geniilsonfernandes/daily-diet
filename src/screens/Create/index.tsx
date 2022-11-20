import DateTimePicker, {
  DateTimePickerEvent
} from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Vibration,
  Alert
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonOption } from "../../components/ButtonOption";
import moment from "moment";

import { DietTypes, FormData, MealTypes } from "../../types";
import { saveNewMeal, updateMeal } from "../../store";

import * as S from "./styles";

function Create() {
  const route = useRoute();
  const navigation = useNavigation();
  const theme = useTheme();

  const params = route.params as {
    mode: "edit" | "create";
    meal: MealTypes;
  };

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues:
      params.mode === "edit"
        ? {
            name: params.meal.name,
            date: params.meal.date,
            description: params.meal.description,
            diet: params.meal.diet,
            time: params.meal.time
          }
        : undefined
  });

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  const onChangeDateTimePicker = (_: DateTimePickerEvent, date?: Date) => {
    setShow(false);

    if (mode === "date") {
      setDate(date);
      setValue("date", moment(date).format("DD.MM.YYYY"), {
        shouldValidate: true
      });
    } else {
      setDate(date);
      setValue("time", moment(date).format("HH:mm"), { shouldValidate: true });
    }
  };

  const onChangeDiet = (diet: DietTypes) => {
    setValue("diet", diet, { shouldValidate: true });
  };

  const showMode = (currentMode: "date" | "time") => {
    if (Platform.OS === "android") {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDateTimePicker = (mode: "date" | "time") => {
    if (mode === "date") {
      showMode("date");
    } else {
      showMode("time");
    }
  };

  const saveMeal = async (meal: MealTypes) => {
    try {
      if (params.mode === "edit") {
        await updateMeal(params.meal.id, meal);
        navigation.navigate("Feedback", { diet: meal.diet });
      } else {
        await saveNewMeal(meal);
        navigation.navigate("Feedback", { diet: meal.diet });
      }
    } catch (error) {
      Alert.alert(`Refeiçao`, "Não foi possivel salvar refeição");
      console.log(error);
    }
  };

  const onSubmit = (data: FormData) => {
    saveMeal({
      ...data,
      id: String(Math.floor(Date.now() / 1000))
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Vibration.vibrate();
    }
  }, [errors]);

  return (
    <KeyboardAvoidingView style={{ backgroundColor: theme.COLORS.BASE.WHITE }}>
      <S.Wrapper backgroundColor={theme.COLORS.BASE.GRAY_500}>
        <HeaderNavigation
          title={params.mode === "create" ? "Nova Refeição" : "Editar refeição"}
          onClickArrowLeft={handleNavigateToHome}
        />
        <S.Content>
          <ScrollView style={{ marginBottom: theme.SPACING.XL }}>
            <Controller
              control={control}
              name="name"
              rules={{ required: "Nome obrigatório" }}
              render={({ field: { value, onChange } }) => (
                <Input
                  label="Nome"
                  value={value}
                  onChangeText={onChange}
                  error={errors.name?.message}
                  wrapperStyles={{ marginBottom: theme.SPACING.XL }}
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              render={({ field: { value, onChange } }) => (
                <Input
                  multiline={true}
                  numberOfLines={4}
                  label={"Descrição"}
                  value={value}
                  onChangeText={onChange}
                  wrapperStyles={{ marginBottom: theme.SPACING.XL }}
                  textInputStyles={{
                    textAlignVertical: "top",
                    paddingTop: theme.SPACING.MD
                  }}
                />
              )}
            />

            <View
              style={{
                flexDirection: "row"
              }}
            >
              <Controller
                control={control}
                name="date"
                rules={{ required: "Data obrigatória" }}
                render={({ field: { value } }) => (
                  <Input
                    label="Data"
                    value={value}
                    editable={false}
                    onPress={() => showDateTimePicker("date")}
                    error={errors.date?.message}
                    wrapperStyles={{
                      marginRight: theme.SPACING.SS,
                      width: "50%"
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="time"
                rules={{ required: "Hora obrigatória" }}
                render={({ field: { value } }) => (
                  <Input
                    label="Hora"
                    value={value}
                    editable={false}
                    onPress={() => showDateTimePicker("time")}
                    error={errors.time?.message}
                    wrapperStyles={{
                      marginLeft: theme.SPACING.SS,
                      minWidth: "30%"
                    }}
                  />
                )}
              />
            </View>

            <S.DietOptions>
              <S.Label>Está dentro da dieta?</S.Label>
              <Controller
                control={control}
                name="diet"
                rules={{ required: "Essa etapa é obrigatória" }}
                render={({ field: { value } }) => (
                  <View style={{ flexDirection: "row" }}>
                    <ButtonOption
                      color="GREEN"
                      title="Sim"
                      active={value === "yes"}
                      onPress={() => onChangeDiet("yes")}
                      style={{ marginRight: 8 }}
                    />
                    <ButtonOption
                      color="RED"
                      title="Não"
                      active={value === "no"}
                      style={{ marginLeft: 8 }}
                      onPress={() => onChangeDiet("no")}
                    />
                  </View>
                )}
              />
              {errors.diet?.message && (
                <S.Error>{errors.diet?.message}</S.Error>
              )}
            </S.DietOptions>
          </ScrollView>
        </S.Content>
        <S.ContentFooter>
          <Button
            title={
              params.mode === "create"
                ? Object.keys(errors).length > 0
                  ? "Preencha todos os campos "
                  : "Cadastrar refeição"
                : "Salvar alterações"
            }
            fill
            isDisabled={Object.keys(errors).length > 0 ? true : false}
            icon="paperclip"
            onPress={handleSubmit(onSubmit)}
          />
        </S.ContentFooter>

        {show && (
          <DateTimePicker
            placeholderText="select date"
            value={date as Date}
            mode={mode}
            is24Hour={true}
            themeVariant="dark"
            onChange={onChangeDateTimePicker}
          />
        )}
      </S.Wrapper>
    </KeyboardAvoidingView>
  );
}

export default Create;
