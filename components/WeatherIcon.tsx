import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { text } from "../styles/common/texts";

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
  "cloudy-outline": { color: "silver", keywords: ["cloud"] },
  "reorder-four-outline": { color: "silver", keywords: ["fog", "mist"] },
  "partly-sunny-outline": { color: "yellow", keywords: ["partly cloudy"] },
  "flash-outline": { color: "yellow", keywords: ["thunder"] },
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ name, size }) => {
  const lowerName = name?.toLowerCase();

  // Default icon
  let iconName: keyof typeof weatherConditions = "partly-sunny-outline";
  let iconColor: string = weatherConditions["partly-sunny-outline"].color;

  for (const [icon, { color, keywords }] of Object.entries(weatherConditions)) {
    if (
      lowerName &&
      keywords.some((keyword) => lowerName.includes(keyword.toLowerCase()))
    ) {
      iconName = icon as keyof typeof weatherConditions;
      iconColor = color;
    }
  }

  const iconSize = size === "today" ? 160 : 50;
  return (
    <Ionicons
      name={iconName}
      size={iconSize}
      color={iconColor}
      style={size === "today" ? text.neon : undefined}
    />
  );
};

export default WeatherIcon;
