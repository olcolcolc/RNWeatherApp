import React from "react";
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
      modalStore.toggleModal();
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={container.weeklyForecastElementContainer}>
          <WeatherIcon name={weatherCondition} size="weekday" />
          <Text style={weeklyForecast.temp}>{tempCelsius} °C</Text>
          <Text style={weeklyForecast.weekday}>{weekday}</Text>
          <Text style={weeklyForecast.conditionText}>{weatherCondition}</Text>
        </View>
      </TouchableOpacity>
    );
  }
);

export default WeeklyForecastElement;
