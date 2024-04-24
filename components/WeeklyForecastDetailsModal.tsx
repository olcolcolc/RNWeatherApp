import { Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react";
import { modalStore } from "../stores/ModalStore";
import { weatherStore } from "../stores/WeatherStore";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import WeatherDetails from "./WeatherDetails";
import { formatWeeklyForcastDate } from "../utils/formatDate";
import modals from "../styles/components/modals";
import MainPanel from "./MainPanel";

interface DetailProps {
  label: string;
  value: number | string | null;
  unit?: string;
}

const Detail = ({ label, value, unit }: DetailProps) =>
  value !== null && (
    <Text style={modals.detail}>
      {label}: {value}
      {unit}
    </Text>
  );

const WeeklyForecastDetailsModal: React.FC = observer(() => {
  const forecast = weatherStore.getForecastByDate(modalStore.date);

  return (
    <View>
      <Modal
        isVisible={modalStore.weeklyForecastModalVisible}
        onBackdropPress={() => modalStore.toggleWeeklyForecastModalVisible()}
        animationIn="slideInUp"
        animationOut="slideOutDown"
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
              <Text style={modals.dateHeader}>
                {formatWeeklyForcastDate(modalStore.date)}
              </Text>
              <MainPanel
                weatherCondition={forecast.day.condition.text}
                tempCelsius={Math.round(forecast.day.avgtemp_c)}
                isDay={1}
              />

              <WeatherDetails
                humidity={forecast.day.avghumidity}
                windKph={forecast.day.maxwind_kph}
                sunrise={forecast.astro.sunrise}
              />
              <View style={modals.detailsView}>
                <Detail
                  label="Min Temp"
                  value={forecast.day.mintemp_c}
                  unit=" °C"
                />
                <Detail
                  label="Max Temp"
                  value={forecast.day.maxtemp_c}
                  unit=" °C"
                />
                {forecast.day.daily_will_it_snow === 1 && (
                  <Detail
                    label="Chance of snow"
                    value={forecast.day.daily_chance_of_snow}
                    unit=" %"
                  />
                )}
                {forecast.day.daily_will_it_rain === 1 && (
                  <Detail
                    label="Chance of rain"
                    value={forecast.day.daily_chance_of_rain}
                    unit=" %"
                  />
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
