import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import WeatherIcons from "./WeatherIcon";
import WeatherIcon from "./WeatherIcon";

const WeekWeather: React.FC = () => {
  return (
    <View style={styles.weekWeatherElement}>
      <WeatherIcon name="rainy" size="weekday" />
      <Text style={styles.lightText}>22 °C</Text>
    </View>
  );
};

export default WeekWeather;
