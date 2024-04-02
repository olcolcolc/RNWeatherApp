import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import WeeklyForecastElement from "../components/WeeklyForecastElement";
import { weatherStore } from "../stores/WeatherStore";
import { observer } from "mobx-react";
import { screenOrientationStore } from "../stores/ScreenOrientationStore";
import { View } from "react-native";

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
      <View
        style={{ flexDirection: "row" }}
        //   orientation === "LANDSCAPE"
        //     ? { flexDirection: "column" }
        //     : { flexDirection: "row" }
        // }
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
      </View>
    </ScrollView>
  );
});

export default WeeklyForecast;
