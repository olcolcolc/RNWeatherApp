import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import WeeklyForecastElement from "../components/WeeklyForecastElement";
import { weatherStore } from "../stores/WeatherStore";

const WeeklyForecast = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15 }}
      showsHorizontalScrollIndicator={false}
    >
      {/* {weeklyForecast?.map((day, index) => (
        <WeeklyForecastElement
          key={index}
          weatherCondition={day.day?.condition?.text || ""}
          tempCelsius={8}
          weekday={new Date(day.date).toLocaleDateString("en-US", {
            weekday: "long",
          })}
        />
      ))} */}
    </ScrollView>
  );
};

export default WeeklyForecast;
