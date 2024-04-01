import React from "react";
import { View, Text } from "react-native";
import WeatherIcon from "./WeatherIcon";
import { observer } from "mobx-react";
import { weeklyForecast } from "../styles/components/weeklyForecast";

type WeeklyForecastElementProps = {
  weatherCondition: string;
  weekday: string;
  tempCelsius: number;
};

const WeeklyForecastElement: React.FC<WeeklyForecastElementProps> = observer(
  ({ weatherCondition, tempCelsius, weekday }) => {
    return (
      <View style={weeklyForecast.container}>
        <WeatherIcon name={weatherCondition} size="weekday" />
        <Text style={weeklyForecast.temp}>{tempCelsius} °C</Text>
        <Text style={weeklyForecast.weekday}>{weekday}</Text>
        <Text style={weeklyForecast.conditionText}>{weatherCondition}</Text>
      </View>
    );
  }
);

export default WeeklyForecastElement;
