import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { text } from "../styles/texts";

interface WeatherIconProps {
  name: string | null;
  size: "today" | "weekday";
}

const weatherConditions = {
  "sunny-outline": { color: "yellow", keywords: ["sun", "overcast", "clear"] },
  "rainy-outline": {
    color: "lightblue",
    keywords: ["rain", "sleet", "drizzle"],
  },
  "snow-outline": {
    color: "white",
    keywords: ["snow", "freez", "blizzard", "ice"],
  },
  "cloud-outline": { color: "grey", keywords: ["cloud", "fog", "mist"] },
  "reorder-four-outline": { color: "grey", keywords: ["fog"] },
  "partly-sunny-outline": { color: "yellow", keywords: ["partly cloudy"] },
  "flash-outline": { color: "yellow", keywords: ["thunder"] },
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ name, size }) => {
  const lowerName = name?.toLowerCase();
  // Default icon
  let iconName: keyof typeof weatherConditions = "cloud-outline";
  let iconColor = "grey";

  for (const [icon, { color, keywords }] of Object.entries(weatherConditions)) {
    if (keywords.some((keyword) => lowerName && lowerName.includes(keyword))) {
      iconName = icon as keyof typeof weatherConditions;
      iconColor = color;
      break;
    }
  }

  const iconSize = size === "today" ? 160 : 40;

  return (
    <Ionicons
      name={iconName}
      size={iconSize}
      color={iconColor}
      style={size === "weekday" ? undefined : text.neon}
    />
  );
};

export default WeatherIcon;
