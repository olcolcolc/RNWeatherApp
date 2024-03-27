import React from "react";
import { Text, View } from "react-native";
import { text } from "../styles/texts";
import { container } from "../styles/containers";
import WeatherIcon from "../components/WeatherIcon";

const TodaysWeather = () => {
  return (
    <View style={container.container}>
      <WeatherIcon name="rainy" size="today" />
      <Text style={text.light}>24°C</Text>
      <Text style={text.dark}>Sunny</Text>
    </View>
  );
};

export default TodaysWeather;
