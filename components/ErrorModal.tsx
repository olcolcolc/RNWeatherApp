import { View, Text, Button } from "react-native";
import { modalStore } from "../stores/ModalStore";
import { observer } from "mobx-react";
import { weatherStore } from "../stores/WeatherStore";
import Modal from "react-native-modal";
import modals from "../styles/components/modals";

const ErrorModal: React.FC = observer(() => {
  return (
    <View>
      <Modal
        isVisible={modalStore.errorModalVisible}
        onBackdropPress={() => modalStore.toggleErrorModalVisible()}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View style={modals.container}>
          <Text style={modals.errorHeader}>Error</Text>
          <Text style={modals.detail}>{weatherStore.error}</Text>
          <Button
            title={"Close"}
            onPress={() => modalStore.toggleErrorModalVisible()}
          />
        </View>
      </Modal>
    </View>
  );
});

export default ErrorModal;
