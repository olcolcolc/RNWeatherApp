import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { text } from "../styles/texts";
import { container } from "../styles/containers";
import WeatherIcons from "./WeatherIcon";
import WeatherIcon from "./WeatherIcon";

const WeekWeather: React.FC = () => {
  return (
    <View style={container.weekWeatherElement}>
      <WeatherIcon name="rainy" size="weekday" />
      <Text style={text.light}>22 °C</Text>
    </View>
  );
};

export default WeekWeather;
