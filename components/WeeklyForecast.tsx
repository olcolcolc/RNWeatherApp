import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import WeeklyForecastElement from "../components/WeeklyForecastElement";

const WeeklyForecast = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15 }}
      showsHorizontalScrollIndicator={false}
    >
      <WeeklyForecastElement />
      <WeeklyForecastElement />
      <WeeklyForecastElement />
      <WeeklyForecastElement />
      <WeeklyForecastElement />
      <WeeklyForecastElement />
    </ScrollView>
  );
};

export default WeeklyForecast;
