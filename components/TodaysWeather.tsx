import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import { container } from "../styles/common/containers";
import { observer } from "mobx-react-lite";
import { weatherStore } from "../stores/WeatherStore";
import MainPanel from "./MainPanel";

const TodaysWeather = observer(() => {
  return (
    <View style={container.container}>
      <MainPanel
        weatherCondition={weatherStore.weatherCondition}
        tempCelsius={weatherStore.tempCelsius}
      />
    </View>
  );
});

export default TodaysWeather;
