import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react";
import { modalStore } from "../stores/ModalStore";
import { weatherStore } from "../stores/WeatherStore";
import weeklyForecastModal from "../styles/components/weeklyForecastModal";
import Modal from "react-native-modal";
import WeatherIcon from "./WeatherIcon";
import { Ionicons } from "@expo/vector-icons";
import WeatherDetails from "./WeatherDetails";
import { theme } from "../styles/theme/theme";
import { formatWeeklyForcastDate } from "../utils/formatDate";

const WeeklyForecastDetailsModal = observer(() => {
  const forecast = weatherStore.getForecastByDate(modalStore.date);

  return (
    <View>
      <Modal
        isVisible={modalStore.modalVisible}
        onBackdropPress={() => modalStore.toggleModal()}
      >
        <View style={weeklyForecastModal.container}>
          <TouchableOpacity
            onPress={() => modalStore.toggleModal()}
            style={weeklyForecastModal.closeButton}
          >
            <Ionicons
              style={weeklyForecastModal.closeButton}
              name="close-outline"
            ></Ionicons>
          </TouchableOpacity>

          {forecast && (
            <>
              <WeatherIcon
                name={forecast.day.condition.text}
                size="today"
              ></WeatherIcon>
              <Text style={weeklyForecastModal.dateHeader}>
                {formatWeeklyForcastDate(modalStore.date)}
              </Text>
              <Text
                style={{
                  fontSize: theme.fontSize.medium,
                  color: theme.colors.white,
                }}
              >
                {forecast.day.condition.text}
              </Text>
              <WeatherDetails
                humidity={forecast.day.avghumidity}
                windKph={forecast.day.maxwind_kph}
                sunrise={forecast.astro.sunrise}
              />
              <View style={weeklyForecastModal.detailsView}>
                <Text style={weeklyForecastModal.detail}>
                  Min Temp: {forecast.day.mintemp_c} °C
                </Text>
                <Text style={weeklyForecastModal.detail}>
                  Max Temp: {forecast.day.maxtemp_c} °C
                </Text>

                {forecast.day.daily_will_it_snow === 1 && (
                  <Text style={weeklyForecastModal.detail}>
                    Chance of snow: {forecast.day.daily_chance_of_snow} %
                  </Text>
                )}
                {forecast.day.daily_will_it_rain === 1 && (
                  <Text style={weeklyForecastModal.detail}>
                    Chance of rain: {forecast.day.daily_chance_of_rain} %
                  </Text>
                )}
              </View>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
});

export default WeeklyForecastDetailsModal;
