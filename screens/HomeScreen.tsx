import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { text } from "../styles/texts";
import { observer } from "mobx-react-lite";
import { cityStore } from "../stores/CityStore";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import WeatherIcons from "../components/WeatherIcon";
import WeatherIcon from "../components/WeatherIcon";
import WeekWeather from "../components/WeekWeatherElement";
import { ScrollView } from "react-native-gesture-handler";
import { container } from "../styles/containers";

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
        <View style={container.header}>
          {/* CITY */}
          {cityStore.loading ? (
            <Text style={text.light}>Loading...</Text>
          ) : cityStore.error ? (
            <Text style={text.light}>Error: {cityStore.error}</Text>
          ) : (
            <>
              <Text style={text.light}>{cityStore.city}</Text>

              {/* DATE */}
              <Text style={text.dark}>
                Today,{" "}
                {today.toLocaleDateString(undefined, {
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </>
          )}
        </View>

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
          <WeekWeather />
          <WeekWeather />
          <WeekWeather />
          <WeekWeather />
          <WeekWeather />
          <WeekWeather />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
});

export default HomeScreen;
