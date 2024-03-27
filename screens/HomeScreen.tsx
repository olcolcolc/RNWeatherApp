import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { text } from "../styles/texts";
import { observer } from "mobx-react-lite";
import { cityStore } from "../stores/CityStore";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { container } from "../styles/containers";
import WeeklyForecastElement from "../components/WeeklyForecastElement";
import Header from "../components/Header";
import TodaysWeather from "../components/TodaysWeather";
import WeatherDetails from "../components/WeatherDetails";

const HomeScreen = observer(() => {
  return (
    <View style={container.mainContainer}>
      <SafeAreaView style={{ justifyContent: "space-between" }}>
        {/* StatusBar */}
        <StatusBar style="light" />

        {/* HEADER */}
        <Header />

        {/* TODAY'S WEATHER */}
        <TodaysWeather />

        {/* WEATHER DETAILS */}
        <WeatherDetails />

        {/* WEEK WEATHER */}
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
        >
          <WeeklyForecastElement />
          <WeeklyForecastElement />
          <WeeklyForecastElement />
          <WeeklyForecastElement />
          <WeeklyForecastElement />
          <WeeklyForecastElement />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
});

export default HomeScreen;
