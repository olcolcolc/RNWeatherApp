import React, { useEffect, useState } from "react";
import { ScrollView, Dimensions } from "react-native";
import WeeklyForecastElement from "../components/WeeklyForecastElement";
import { weatherStore } from "../stores/WeatherStore";
import { observer } from "mobx-react";

const WeeklyForecast = observer(() => {
  const [orientation, setOrientation] = useState("PORTRAIT");

  useEffect(() => {
    Dimensions.addEventListener("change", ({ window: { width, height } }) => {
      setOrientation(width > height ? "LANDSCAPE" : "PORTRAIT");
    });
  }, []);

  return (
    <ScrollView
      horizontal={orientation === "PORTRAIT"}
      contentContainerStyle={{
        paddingHorizontal: 15,
        flexDirection: orientation === "LANDSCAPE" ? "column" : "row",
        alignItems: "flex-end",
      }}
      showsHorizontalScrollIndicator={false}
    >
      {weatherStore.weatherData?.forecast?.forecastday?.map((day, index) => (
        <WeeklyForecastElement
          key={index}
          weatherCondition={day.day?.condition?.text || ""}
          tempCelsius={Math.round(day.day?.avgtemp_c)}
          weekday={new Date(day.date).toLocaleDateString("en-US", {
            weekday: "long",
          })}
        />
      ))}
    </ScrollView>
  );
});

export default WeeklyForecast;
