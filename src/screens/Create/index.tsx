import DateTimePicker, {
  DateTimePickerEvent
} from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { Platform, KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useTheme } from "styled-components/native";
import moment from "moment";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import * as S from "./styles";

type DateTimePickerModes = "date" | "time";
type FormData = {
  name: string;
  description: string;
  date: Date | undefined;
  time: Date | undefined;
};

function Create() {
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
    if (mode === "date") {
      setValue("date", date, { shouldValidate: true });
      setDate(date);
    } else {
      setValue("time", date, { shouldValidate: true });
      setDate(date);
    }
    setShow(false);
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
        <HeaderNavigation title="Nova Refeição" />
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
