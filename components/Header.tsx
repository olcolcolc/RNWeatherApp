import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { text } from "../styles/texts";
import { cityStore } from "../stores/CityStore";
import { container } from "../styles/containers";
import * as Location from "expo-location";

const Header = () => {
  const today = new Date();

  useEffect(() => {
    (async () => {
      cityStore.setLoading(true);

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        cityStore.setError("Permission to access location was denied");
        cityStore.setLoading(false);
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        let reverseCode = await Location.reverseGeocodeAsync(location.coords);
        cityStore.setCity(reverseCode[0].city ?? "");
      } catch (error: unknown) {
        cityStore.setError((error as Error).message);
      }
      cityStore.setLoading(false);
    })();
  }, []);

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
