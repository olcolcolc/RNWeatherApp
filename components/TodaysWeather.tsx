import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import { text } from "../styles/texts";
import { container } from "../styles/containers";
import WeatherIcon from "./WeatherIcon";
import { observer } from "mobx-react-lite";
import { weatherStore } from "../stores/WeatherStore";
import { cityStore } from "../stores/CityStore";

const TodaysWeather = observer(() => {
  const neonAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    weatherStore.forecastDays = 7;
    weatherStore.fetchWeatherData();
    console.log(
      weatherStore.tempCelsius,
      weatherStore.weatherCondition,
      weatherStore.humidity,
      weatherStore.weatherData,
      weatherStore.forecastDays,
      "teeest"
    );

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

  //   if (weatherStore.loading) {
  //     return <Text>Loading...</Text>;
  //   }

  //   if (weatherStore.error) {
  //     return <Text>Error: {weatherStore.error}</Text>;
  //   }

  return (
    <View style={container.container}>
      <Animated.Text style={{ opacity: neonAnim }}>
        <WeatherIcon name="sunny" size="today" />
      </Animated.Text>
      <Text style={text.light}>{weatherStore.tempCelsius}°C</Text>
      <Text style={text.dark}>{weatherStore.weatherCondition}</Text>
    </View>
  );
});

export default TodaysWeather;
