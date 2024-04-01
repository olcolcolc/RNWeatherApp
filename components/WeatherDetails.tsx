import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { weatherDetails } from "../styles/components/weatherDetails";
import { weatherStore } from "../stores/WeatherStore";
import { observer } from "mobx-react";

const WeatherDetails = observer(() => {
  return (
    <View style={weatherDetails.container}>
      <View style={{ alignItems: "center" }}>
        <View style={weatherDetails.iconContainer}>
          <Ionicons name="leaf-outline" style={weatherDetails.icon} />
        </View>
        <Text style={weatherDetails.weatherDetail}>
          {weatherStore.windKph} km/h
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={weatherDetails.iconContainer}>
          <Ionicons name="water-outline" style={weatherDetails.icon} />
        </View>
        <Text style={weatherDetails.weatherDetail}>
          {weatherStore.humidity} %
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={weatherDetails.iconContainer}>
          <Ionicons name="sunny-outline" style={weatherDetails.icon} />
        </View>
        <Text style={weatherDetails.weatherDetail}>{weatherStore.sunrise}</Text>
      </View>
    </View>
  );
});

export default WeatherDetails;
