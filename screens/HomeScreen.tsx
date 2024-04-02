import React from "react";
import { View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { observer } from "mobx-react-lite";
import { StatusBar } from "expo-status-bar";
import { container } from "../styles/common/containers";
import Header from "../components/Header";
import TodaysWeather from "../components/TodaysWeather";
import WeatherDetails from "../components/WeatherDetails";
import WeeklyForecast from "../components/WeeklyForecast";
import { weatherStore } from "../stores/WeatherStore";
import { Text } from "react-native";
import { text } from "../styles/common/texts";
import { theme } from "../styles/theme/theme";

const HomeScreen = observer(() => {
  return (
    <View style={container.mainContainer}>
      <SafeAreaView style={{ justifyContent: "space-between" }}>
        <StatusBar style="light" />
        {weatherStore.loading ? (
          <View style={container.container}>
            <Text style={text.loading}>RNWeatherApp</Text>
            <ActivityIndicator size={80} color={theme.colors.white} />
          </View>
        ) : (
          <>
            <Header />
            <View style={container.centerContainer}>
              <TodaysWeather />

              <WeatherDetails />
            </View>

            <WeeklyForecast />
          </>
        )}
      </SafeAreaView>
    </View>
  );
});

export default HomeScreen;
