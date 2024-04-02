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
    const { orientation } = screenOrientationStore;
    const styles = weatherDetails(orientation);

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Ionicons name="leaf-outline" style={styles.icon} />
            </View>
            <Text style={styles.weatherDetail}>{windKph} km/h</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Ionicons name="water-outline" style={styles.icon} />
            </View>
            <Text style={styles.weatherDetail}>{humidity} %</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Ionicons name="sunny-outline" style={styles.icon} />
            </View>
            <Text style={styles.weatherDetail}>{sunrise}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
);

export default WeatherDetails;
