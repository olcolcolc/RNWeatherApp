import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { text } from "../styles/texts";
import { observer } from "mobx-react-lite";
import { cityStore } from "../stores/CityStore";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import WeatherIcon from "../components/WeatherIcon";
import { ScrollView } from "react-native-gesture-handler";
import { container } from "../styles/containers";
import WeeklyForecastElement from "../components/WeeklyForecastElement";
import Header from "../components/Header";

const HomeScreen = observer(() => {
  const today = new Date();

  useEffect(() => {
    (async () => {
      cityStore.setLoading(true);

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        cityStore.setError("Permission to access location was denied");
        cityStore.setLoading(false);
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        let reverseCode = await Location.reverseGeocodeAsync(location.coords);
        cityStore.setCity(reverseCode[0].city ?? "");
      } catch (error: unknown) {
        cityStore.setError((error as Error).message);
      }
      cityStore.setLoading(false);
    })();
  }, []);

  return (
    <View style={container.mainContainer}>
      <SafeAreaView style={{ justifyContent: "space-between" }}>
        {/* StatusBar */}
        <StatusBar style="light" />

        {/* HEADER */}
        <Header />

        {/* TODAY'S WEATHER */}
        <View style={container.container}>
          <WeatherIcon name="rainy" size="today" />
          <Text style={text.light}>24°C</Text>
          <Text style={text.dark}>Sunny</Text>
        </View>

        {/* WEATHER DETAILS */}
        <View style={container.detailsContainer}>
          {/* WIND */}
          <View>
            <Ionicons name="leaf-outline" size={24} style={text.iconDetails} />
            <Text style={text.light}>22 km</Text>
          </View>
          {/* HUMIDITY */}
          <View>
            <Ionicons name="water-outline" size={24} style={text.iconDetails} />
            <Text style={text.light}>23 %</Text>
          </View>
          {/* SUNRISE */}
          <View>
            <Ionicons name="sunny-outline" size={24} style={text.iconDetails} />
            <Text style={text.light}>6 AM</Text>
          </View>
        </View>

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
