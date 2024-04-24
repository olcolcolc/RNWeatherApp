import { View, Text, TouchableOpacity } from "react-native";
import WeatherIcon from "./WeatherIcon";
import { observer } from "mobx-react";
import { weeklyForecast } from "../styles/components/weeklyForecast";
import { container } from "../styles/common/containers";
import { modalStore } from "../stores/ModalStore";

type WeeklyForecastElementProps = {
  weatherCondition: string;
  weekday: string;
  tempCelsius: number;
  date: string;
};

const WeeklyForecastElement: React.FC<WeeklyForecastElementProps> = observer(
  ({ weatherCondition, tempCelsius, weekday, date }) => {
    const handlePress = () => {
      modalStore.setDate(date);
      modalStore.toggleWeeklyForecastModalVisible();
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={container.weeklyForecastElementContainer}>
          <Text style={weeklyForecast.weekday}>{weekday}</Text>
          <WeatherIcon name={weatherCondition} size="weekday" />
          <Text style={weeklyForecast.temp}>{tempCelsius} °C</Text>
        </View>
      </TouchableOpacity>
    );
  }
);

export default WeeklyForecastElement;
