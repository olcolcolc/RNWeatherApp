import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { styles } from "../styles/styles";
import { observer } from "mobx-react-lite";
import { cityStore } from "../stores/CityStore";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import WeatherIcons from "../components/WeatherIcon";
import WeatherIcon from "../components/WeatherIcon";
import WeekWeather from "../components/WeekWeatherElement";
import { ScrollView } from "react-native-gesture-handler";

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
    <View style={styles.mainContainer}>
      <SafeAreaView style={{ justifyContent: "space-between" }}>
        {/* StatusBar */}
        <StatusBar style="light" />

        {/* HEADER */}
        <View style={styles.header}>
          {/* CITY */}
          {cityStore.loading ? (
            <Text style={styles.lightText}>Loading...</Text>
          ) : cityStore.error ? (
            <Text style={styles.lightText}>Error: {cityStore.error}</Text>
          ) : (
            <>
              <Text style={styles.lightText}>{cityStore.city}</Text>

              {/* DATE */}
              <Text style={styles.darkText}>
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
        <View style={styles.container}>
          <WeatherIcon name="rainy" size="today" />
          <Text style={styles.lightText}>24°C</Text>
          <Text style={styles.darkText}>Sunny</Text>
        </View>

        {/* WEATHER DETAILS */}
        <View style={styles.detailsContainer}>
          {/* WIND */}
          <View>
            <Ionicons
              name="leaf-outline"
              size={24}
              style={styles.iconDetails}
            />
            <Text style={styles.lightText}>22 km</Text>
          </View>
          {/* HUMIDITY */}
          <View>
            <Ionicons
              name="water-outline"
              size={24}
              style={styles.iconDetails}
            />
            <Text style={styles.lightText}>23 %</Text>
          </View>
          {/* SUNRISE */}
          <View>
            <Ionicons
              name="sunny-outline"
              size={24}
              style={styles.iconDetails}
            />
            <Text style={styles.lightText}>6 AM</Text>
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
