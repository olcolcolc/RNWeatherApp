import React from "react";
import { View, ActivityIndicator, ScrollView, Text } from "react-native";
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
import { text } from "../styles/common/texts";
import { theme } from "../styles/theme/theme";
import WeeklyForecastDetailsModal from "../components/WeeklyForecastDetailsModal";

const HomeScreen = observer(() => {
  const { orientation } = screenOrientationStore;
  const { loading } = weatherStore;

  return (
    <View style={container.mainContainer}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        {loading ? (
          <View style={container.mainContainer}>
            <Text style={text.loading}>RNWeatherApp</Text>
            <ActivityIndicator size={80} color={theme.colors.white} />
          </View>
        ) : (
          <View>
            <Header />
            <ScrollView
              style={container.centerContainer}
              // style={
              //   orientation === "LANDSCAPE"
              //         flexDirection: "row",
              //         justifyContent: "space-around",
              //         width: "100%",
              //       }
              //     : container.centerContainer
              // }
            >
              <TodaysWeather />
              <WeatherDetails />
              <ScrollView>
                <WeeklyForecast />
                <WeeklyForecastDetailsModal />
              </ScrollView>
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
});

export default HomeScreen;
