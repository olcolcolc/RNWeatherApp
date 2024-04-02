import React from "react";
import { View, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { observer } from "mobx-react-lite";
import { StatusBar } from "expo-status-bar";
import { container } from "../styles/common/containers";
import Header from "../components/Header";
import TodaysWeather from "../components/TodaysWeather";
import WeatherDetails from "../components/WeatherDetails";
import WeeklyForecast from "../components/WeeklyForecast";
import { weatherStore } from "../stores/WeatherStore";
import { screenOrientationStore } from "../stores/ScreenOrientationStore";
import { Text } from "react-native";
import { text } from "../styles/common/texts";
import { theme } from "../styles/theme/theme";

const HomeScreen = observer(() => {
  const { orientation } = screenOrientationStore;

  return (
    <View style={container.mainContainer}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        {weatherStore.loading ? (
          <View style={container.container}>
            <Text style={text.loading}>RNWeatherApp</Text>
            <ActivityIndicator size={80} color={theme.colors.white} />
          </View>
        ) : (
          <>
            <Header />

            <ScrollView>
              <View
                style={
                  orientation === "LANDSCAPE"
                    ? { flexDirection: "row", flex: 1 }
                    : container.centerContainer
                }
              >
                <View>
                  <TodaysWeather />
                  <WeatherDetails />
                </View>
                <WeeklyForecast />
              </View>
            </ScrollView>
          </>
        )}
      </SafeAreaView>
    </View>
  );
});

export default HomeScreen;
