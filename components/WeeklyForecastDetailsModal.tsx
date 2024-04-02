import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react";
import { modalStore } from "../stores/ModalStore";
import { weatherStore } from "../stores/WeatherStore";

const WeeklyForecastDetailsModal = observer(() => {
  const forecast = weatherStore.getForecastByDate(modalStore.date);

  const convertedDate = new Date(modalStore.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          <Text>{convertedDate.toString()}</Text>
          {forecast && (
            <>
              <Text>Min Temp: {forecast.day.mintemp_c} °C</Text>
              <Text>Max Temp: {forecast.day.maxtemp_c} °C</Text>
              <Text>Wind: {forecast.day.maxwind_kph} km/h</Text>
              <Text>Humidity: {forecast.day.avghumidity} %</Text>
              <Text>Sunrise: {forecast.astro.sunrise}</Text>
              {forecast.day.daily_will_it_snow === 1 && (
                <Text>
                  Chance of snow: {forecast.day.daily_chance_of_snow} %
                </Text>
              )}
              {forecast.day.daily_will_it_rain === 1 && (
                <Text>
                  Chance of rain: {forecast.day.daily_chance_of_rain} %
                </Text>
              )}
            </>
          )}
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
