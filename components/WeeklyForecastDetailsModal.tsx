import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react";
import { modalStore } from "../stores/ModalStore";
import { weatherStore } from "../stores/WeatherStore";
import Modal from "react-native-modal";
import WeatherIcon from "./WeatherIcon";
import { Ionicons } from "@expo/vector-icons";
import WeatherDetails from "./WeatherDetails";
import { theme } from "../styles/theme/theme";
import { formatWeeklyForcastDate } from "../utils/formatDate";
import modals from "../styles/components/modals";

const WeeklyForecastDetailsModal: React.FC = observer(() => {
  const forecast = weatherStore.getForecastByDate(modalStore.date);

  return (
    <View>
      <Modal
        isVisible={modalStore.weeklyForecastModalVisible}
        onBackdropPress={() => modalStore.toggleWeeklyForecastModalVisible()}
      >
        <View style={modals.container}>
          <TouchableOpacity
            onPress={() => modalStore.toggleWeeklyForecastModalVisible()}
            style={modals.closeButton}
          >
            <Ionicons
              style={modals.closeButton}
              name="close-outline"
            ></Ionicons>
          </TouchableOpacity>

          {forecast && (
            <>
              <WeatherIcon
                name={forecast.day.condition.text}
                size="today"
              ></WeatherIcon>
              <Text style={modals.dateHeader}>
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
              <View style={modals.detailsView}>
                <Text style={modals.detail}>
                  Min Temp: {forecast.day.mintemp_c} °C
                </Text>
                <Text style={modals.detail}>
                  Max Temp: {forecast.day.maxtemp_c} °C
                </Text>

                {forecast.day.daily_will_it_snow === 1 && (
                  <Text style={modals.detail}>
                    Chance of snow: {forecast.day.daily_chance_of_snow} %
                  </Text>
                )}
                {forecast.day.daily_will_it_rain === 1 && (
                  <Text style={modals.detail}>
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
