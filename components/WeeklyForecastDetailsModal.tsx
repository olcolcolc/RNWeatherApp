import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react";
import { modalStore } from "../stores/ModalStore";

const WeeklyForecastDetailsModal = observer(() => {
  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalStore.modalVisible}
        onRequestClose={() => {
          modalStore.toggleModal();
        }}
      >
        <View style={{ marginTop: 50, padding: 20, backgroundColor: "white" }}>
          <Text>Weather Details</Text>

          <TouchableOpacity
            onPress={() => modalStore.toggleModal()}
            style={{ marginTop: 30 }}
          >
            <Text>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
});

export default WeeklyForecastDetailsModal;
