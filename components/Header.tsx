import React from "react";
import { Text, View } from "react-native";
import { text } from "../styles/common/texts";
import { container } from "../styles/common/containers";
import { observer } from "mobx-react-lite";
import { weatherStore } from "../stores/WeatherStore";

const Header = observer(() => {
  const today = new Date();

  return (
    <View style={container.header}>
      <>
        <Text style={text.light}>
          {weatherStore.weatherData?.location?.name},{" "}
          {weatherStore.weatherData?.location?.country}
        </Text>
      </>
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
