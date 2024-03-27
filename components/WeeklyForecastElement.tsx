import React from "react";
import { View, Text } from "react-native";
import { text } from "../styles/texts";
import { container } from "../styles/containers";
import WeatherIcon from "./WeatherIcon";

const WeeklyForecastElement: React.FC = () => {
  return (
    <View style={container.weekWeatherElement}>
      <WeatherIcon name="rainy" size="weekday" />
      <Text style={text.light}>22 °C</Text>
    </View>
  );
};

export default WeeklyForecastElement;
