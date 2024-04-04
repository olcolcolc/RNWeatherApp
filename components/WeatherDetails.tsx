import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";
import { weatherDetails } from "../styles/components/weatherDetails";
import { screenOrientationStore } from "../stores/ScreenOrientationStore";

interface WeatherDetailsProps {
  windKph: number | null;
  humidity: number | null;
  sunrise: string | null;
}

const WeatherDetails = observer(
  ({ windKph, humidity, sunrise }: WeatherDetailsProps) => {
    return (
      <ScrollView>
        <View style={weatherDetails.mainContainer}>
          <View style={weatherDetails.container}>
            <View style={weatherDetails.iconContainer}>
              <Ionicons name="leaf-outline" style={weatherDetails.icon} />
            </View>
            <Text style={weatherDetails.weatherDetail}>{windKph} km/h</Text>
          </View>
          <View style={weatherDetails.container}>
            <View style={weatherDetails.iconContainer}>
              <Ionicons name="water-outline" style={weatherDetails.icon} />
            </View>
            <Text style={weatherDetails.weatherDetail}>{humidity} %</Text>
          </View>
          <View style={weatherDetails.container}>
            <View style={weatherDetails.iconContainer}>
              <Ionicons name="sunny-outline" style={weatherDetails.icon} />
            </View>
            <Text style={weatherDetails.weatherDetail}>{sunrise}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
);

export default WeatherDetails;
