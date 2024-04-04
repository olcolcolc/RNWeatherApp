import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { modalStore } from "../stores/ModalStore";
import { observer } from "mobx-react";
import { weatherStore } from "../stores/WeatherStore";
import Modal from "react-native-modal";
import weeklyForecastModal from "../styles/components/weeklyForecastModal";

const ErrorModal: React.FC = observer(() => {
  return (
    <View>
      <Modal
        isVisible={true}
        onBackdropPress={() => modalStore.toggleErrorModalVisible()}
      >
        <View style={weeklyForecastModal.container}>
          <View style={weeklyForecastModal.container}>
            <Text style={weeklyForecastModal.dateHeader}>Error</Text>
            <Text style={weeklyForecastModal.detail}>{weatherStore.error}</Text>
            <Button
              title={"Close"}
              onPress={() => modalStore.toggleErrorModalVisible()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
});

export default ErrorModal;
