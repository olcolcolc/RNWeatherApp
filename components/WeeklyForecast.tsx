import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import WeeklyForecastElement from "../components/WeeklyForecastElement";
import { weatherStore } from "../stores/WeatherStore";
import { observer } from "mobx-react";
import { screenOrientationStore } from "../stores/ScreenOrientationStore";
import { View } from "react-native";
import { getShortWeekday } from "../utils/formatDate";

const WeeklyForecast = observer(() => {
  const { orientation } = screenOrientationStore;
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        alignItems: "flex-end",
      }}
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row" }}>
        {weatherStore.weatherData?.forecast?.forecastday?.map((day, index) => (
          <WeeklyForecastElement
            key={index}
            weatherCondition={day.day?.condition?.text || ""}
            tempCelsius={Math.round(day.day?.avgtemp_c)}
            weekday={getShortWeekday(day.date)}
            date={day.date}
          />
        ))}
      </View>
    </ScrollView>
  );
});

export default WeeklyForecast;
