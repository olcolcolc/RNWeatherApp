import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { weatherDetails } from "../styles/components/weatherDetails";

interface DetailProps {
  iconName: string | null | any;
  value: number | null;
  unit?: string;
}

const Detail = ({ iconName, value, unit }: DetailProps) => (
  <View style={weatherDetails.container}>
    <View style={weatherDetails.iconContainer}>
      <Ionicons name={iconName} style={weatherDetails.icon} />
    </View>
    {value !== null && (
      <Text style={weatherDetails.weatherDetail}>
        {value}
        {unit}
      </Text>
    )}
  </View>
);

export default Detail;
