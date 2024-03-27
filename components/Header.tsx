import React from "react";
import { Text, View } from "react-native";
import { text } from "../styles/texts";
import { cityStore } from "../stores/CityStore";
import { container } from "../styles/containers";

const Header = () => {
  const today = new Date();

  return (
    <View style={container.header}>
      {/* CITY */}
      {cityStore.loading ? (
        <Text style={text.light}>Loading...</Text>
      ) : cityStore.error ? (
        <Text style={text.light}>Error: {cityStore.error}</Text>
      ) : (
        <>
          <Text style={text.light}>{cityStore.city}</Text>

          {/* DATE */}
          <Text style={text.dark}>
            Today,{" "}
            {today.toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
            })}
          </Text>
        </>
      )}
    </View>
  );
};

export default Header;
