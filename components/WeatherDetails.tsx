import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { text } from "../styles/texts";
import { container } from "../styles/containers";

const WeatherDetails = () => {
  return (
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
  );
};

export default WeatherDetails;
