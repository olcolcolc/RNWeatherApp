import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { text } from "../styles/common/texts";
import { theme } from "../styles/theme/theme";

interface WeatherIconProps {
  name: string | null;
  size: "main" | "weekday";
}

const weatherConditions = {
  "sunny-outline": {
    color: theme.colors.yellow,
    keywords: ["sun", "overcast", "clear"],
  },
  "rainy-outline": {
    color: theme.colors.lightblue,
    keywords: ["rain", "sleet", "drizzle"],
  },
  "snow-outline": {
    color: theme.colors.white,
    keywords: ["snow", "freez", "blizzard", "ice"],
  },
  "cloudy-outline": { color: theme.colors.silver, keywords: ["cloud"] },
  "reorder-four-outline": {
    color: theme.colors.silver,
    keywords: ["fog", "mist"],
  },
  "partly-sunny-outline": {
    color: theme.colors.yellow,
    keywords: ["partly cloudy"],
  },
  "flash-outline": { color: theme.colors.yellow, keywords: ["thunder"] },
  "moon-outline": { color: theme.colors.white, keywords: ["night"] },
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ name, size }) => {
  const lowerName = name?.toLowerCase();

  // Default icon
  let iconName: keyof typeof weatherConditions = "moon-outline";
  let iconColor: string = weatherConditions["moon-outline"].color;

  for (const [icon, { color, keywords }] of Object.entries(weatherConditions)) {
    if (
      lowerName &&
      keywords.some((keyword) => lowerName.includes(keyword.toLowerCase()))
    ) {
      iconName = icon as keyof typeof weatherConditions;
      iconColor = color;
    }
  }

  const iconSize = size === "main" ? 160 : 50;

  return (
    <Ionicons
      name={iconName}
      size={iconSize}
      color={iconColor}
      style={size === "main" ? text.neon : undefined}
    />
  );
};

export default WeatherIcon;
