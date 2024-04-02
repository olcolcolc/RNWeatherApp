import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import { text } from "../styles/common/texts";
import { container } from "../styles/common/containers";
import WeatherIcon from "./WeatherIcon";
import { observer } from "mobx-react-lite";
import { weatherStore } from "../stores/WeatherStore";

const TodaysWeather = observer(() => {
  const neonAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.sequence([
      Animated.timing(neonAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(neonAnim, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(neonAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(animation, { iterations: 3 }).start();
  }, [neonAnim]);

  return (
    <View style={container.container}>
      <Animated.Text style={{ opacity: neonAnim }}>
        <WeatherIcon name={weatherStore.weatherCondition} size="today" />
      </Animated.Text>
      <Text style={text.todayTemp}>{weatherStore.tempCelsius}°C</Text>
      <Text style={text.dark}>{weatherStore.weatherCondition}</Text>
    </View>
  );
});

export default TodaysWeather;
