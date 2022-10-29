import DateTimePicker, {
  DateTimePickerEvent
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useTheme } from "styled-components/native";
import moment from "moment";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonOption } from "../../components/ButtonOption";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

type DateTimePickerModes = "date" | "time";
type Diet = "yes" | "no";
type FormData = {
  name: string;
  description: string;
  date: Date | undefined;
  time: Date | undefined;
  diet: Diet;
};

function Create() {
  const navigation = useNavigation();

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  const theme = useTheme();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormData>();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [mode, setMode] = useState<DateTimePickerModes>("date");
  const [show, setShow] = useState(false);

  const onChangeDateTimePicker = (event: DateTimePickerEvent, date?: Date) => {
    setShow(false);
    if (mode === "date") {
      setDate(date);
      setValue("date", date, { shouldValidate: true });
    } else {
      setDate(date);
      setValue("time", date, { shouldValidate: true });
    }
  };

  const onChangeDiet = (diet: Diet) => {
    setValue("diet", diet);
  };

  const showMode = (currentMode: DateTimePickerModes) => {
    if (Platform.OS === "android") {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDateTimePicker = (mode: DateTimePickerModes) => {
    if (mode === "date") {
      showMode("date");
    } else {
      showMode("time");
    }
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView style={{ backgroundColor: theme.COLORS.BASE.WHITE }}>
      <S.Wrapper backgroundColor={theme.COLORS.BASE.GRAY_500}>
        <HeaderNavigation
          title="Nova Refeição"
          onClickArrowLeft={handleNavigateToHome}
        />
        <S.Content>
          <ScrollView style={{ marginBottom: theme.SPACING.SM }}>
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
                  wrapperStyles={{ marginBottom: theme.SPACING.SM }}
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
                  wrapperStyles={{ marginBottom: theme.SPACING.SM }}
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
                    value={
                      value === undefined
                        ? ""
                        : moment(value).format("DD.MM.YYYY")
                    }
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
                    value={
                      value === undefined ? "" : moment(value).format("HH:mm")
                    }
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
                rules={{ required: "Hora obrigatória" }}
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
            </S.DietOptions>
          </ScrollView>
        </S.Content>
        <S.ContentFooter>
          <Button
            title="Cadastrar refeição"
            fill
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
