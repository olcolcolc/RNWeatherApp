import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { text } from "../styles/texts";
import { container } from "../styles/containers";
import { weatherStore } from "../stores/WeatherStore";
import { observer } from "mobx-react";

const WeatherDetails = observer(() => {
  return (
    <View style={container.detailsContainer}>
      {/* WIND */}
      <View>
        <Ionicons name="leaf-outline" size={24} style={text.iconDetails} />
        <Text style={text.light}>{weatherStore.windKph} km/h</Text>
      </View>
      {/* HUMIDITY */}
      <View>
        <Ionicons name="water-outline" size={24} style={text.iconDetails} />
        <Text style={text.light}>{weatherStore.humidity} %</Text>
      </View>
      {/* SUNRISE */}
      <View>
        <Ionicons name="sunny-outline" size={24} style={text.iconDetails} />
        <Text style={text.light}>6AM</Text>
      </View>
    </View>
  );
});

export default WeatherDetails;
