import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { text } from "../styles/texts";
import { locationStore } from "../stores/LocationStore";
import { container } from "../styles/containers";
import { observer } from "mobx-react-lite";
import { weatherStore } from "../stores/WeatherStore";

const Header = observer(() => {
  const today = new Date();

  return (
    <View style={container.header}>
      {/* CITY */}
      {weatherStore.loading ? (
        // LOADING ICON
        <Text style={text.light}>
          <ActivityIndicator size="small" color="white" />
        </Text>
      ) : weatherStore.error ? (
        <Text style={text.light}>Error: {weatherStore.error}</Text>
      ) : (
        <>
          <Text style={text.light}>
            {weatherStore.weatherData?.location?.name},{" "}
            {weatherStore.weatherData?.location?.country}
          </Text>
        </>
      )}
      {/* DATE */}
      <Text style={text.dark}>Today</Text>
      <Text style={text.dark}>
        {today.toLocaleDateString(undefined, {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </Text>
    </View>
  );
});

export default Header;
