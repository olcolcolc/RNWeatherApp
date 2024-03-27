import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { styles } from "../styles/styles";

interface WeatherIconsProps {
  name: "sunny" | "cloudy" | "rainy" | string;
}

type IconName =
  | "sunny-outline"
  | "cloud-outline"
  | "rainy-outline"
  | "help-circle-outline";

const WeatherIcons: React.FC<WeatherIconsProps> = ({ name }) => {
  let iconName: IconName;
  let iconColor: string;

  switch (name) {
    case "sunny":
      iconName = "sunny-outline";
      iconColor = "yellow";
      break;
    case "cloudy":
      iconName = "cloud-outline";
      iconColor = "grey";
      break;
    case "rainy":
      iconName = "rainy-outline";
      iconColor = "lightblue";
      break;
    default:
      iconName = "help-circle-outline";
      iconColor = "black";
  }

  return <Ionicons name={iconName} size={160} color={iconColor} />;
};

export default WeatherIcons;
