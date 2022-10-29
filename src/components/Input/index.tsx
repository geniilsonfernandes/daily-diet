import { ViewStyle, TextInputProps, TextStyle } from "react-native";
import * as S from "./styles";

type InputProps = {
  label?: string;
  error?: string;
  textInputStyles?: TextStyle;
  wrapperStyles?: ViewStyle;
  onPress?: () => void;
} & TextInputProps;

export const Input = ({
  wrapperStyles,
  textInputStyles,
  label,
  error,
  onPress,
  ...rest
}: InputProps) => {
  return (
    <S.WrapperInput style={wrapperStyles}>
      <S.Label>{label}</S.Label>
      <S.WrapperTextInput
        hasError={!!error}
        onPress={() => onPress && onPress()}
      >
        <S.TextInput style={textInputStyles} {...rest} />
      </S.WrapperTextInput>
      {error && <S.Error>{error}</S.Error>}
    </S.WrapperInput>
  );
};
