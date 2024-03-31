import React from "react";
import { View, Text } from "react-native";
import { text } from "../styles/texts";
import { container } from "../styles/containers";
import WeatherIcon from "./WeatherIcon";
import { observer } from "mobx-react";

type WeeklyForecastElementProps = {
  weatherCondition: string;
  weekday: string;
  tempCelsius: number;
};

const WeeklyForecastElement: React.FC<WeeklyForecastElementProps> = observer(
  ({ weatherCondition, tempCelsius, weekday }) => {
    return (
      <View style={container.weekWeatherElement}>
        <WeatherIcon name="sunny" size="weekday" />
        <Text style={text.light}>{tempCelsius} °C</Text>
        <Text style={text.light}>{weekday}</Text>
      </View>
    );
  }
);

export default WeeklyForecastElement;
