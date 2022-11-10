import { Button } from "../../components/Button";
import { Modal, TouchableOpacity } from "react-native";

import * as S from "./styles";

type ModalProps = {
  isVisible: boolean;
  onRequestClose: () => void;
  onDeleteMeal: () => void;
};

function ModalDeleteMeal({
  isVisible,
  onDeleteMeal,
  onRequestClose
}: ModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={isVisible}
      onRequestClose={() => {
        onRequestClose();
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          onRequestClose();
        }}
      >
        <S.ModalContainer>
          <S.ModalContent>
            <S.ModalText>
              Deseja realmente excluir o registro da refeição?
            </S.ModalText>

            <Button
              title="Cancelar"
              onPress={onRequestClose}
              style={{
                width: "47.5%"
              }}
            />

            <Button
              title="Sim, excluir"
              onPress={onDeleteMeal}
              fill
              style={{
                width: "47.5%"
              }}
            />
          </S.ModalContent>
        </S.ModalContainer>
      </TouchableOpacity>
    </Modal>
  );
}

export default ModalDeleteMeal;
