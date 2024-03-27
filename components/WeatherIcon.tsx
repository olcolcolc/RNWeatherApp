import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { styles } from "../styles/texts";

interface WeatherIconProps {
  name: "sunny" | "cloudy" | "rainy" | string;
  size: "today" | "weekday";
}

type IconName =
  | "sunny-outline"
  | "cloud-outline"
  | "rainy-outline"
  | "help-circle-outline";

const WeatherIcon: React.FC<WeatherIconProps> = ({ name, size }) => {
  let iconName: IconName;
  let iconColor: string;
  let iconSize: number;

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

  switch (size) {
    case "today":
      iconSize = 160;
      break;
    case "weekday":
      iconSize = 40;
      break;
    default:
      iconSize = 24; // Default size if size prop is not provided
  }

  return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
};

export default WeatherIcon;
