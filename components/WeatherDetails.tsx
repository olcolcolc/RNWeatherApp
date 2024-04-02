import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { weatherStore } from "../stores/WeatherStore";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";
import { weatherDetails } from "../styles/components/weatherDetails";
import { screenOrientationStore } from "../stores/ScreenOrientationStore";

const WeatherDetails = observer(() => {
  const { orientation } = screenOrientationStore;
  const styles = weatherDetails(orientation);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.iconContainer}>
            <Ionicons name="leaf-outline" style={styles.icon} />
          </View>
          <Text style={styles.weatherDetail}>{weatherStore.windKph} km/h</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.iconContainer}>
            <Ionicons name="water-outline" style={styles.icon} />
          </View>
          <Text style={styles.weatherDetail}>{weatherStore.humidity} %</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.iconContainer}>
            <Ionicons name="sunny-outline" style={styles.icon} />
          </View>
          <Text style={styles.weatherDetail}>{weatherStore.sunrise}</Text>
        </View>
      </View>
    </ScrollView>
  );
});

export default WeatherDetails;
