import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Location from "expo-location";
import { styles } from "../styles/styles";

const HomeScreen = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let reverseCode = await Location.reverseGeocodeAsync(location.coords);
      if (reverseCode[0].city !== null) {
        setCity(reverseCode[0].city);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{city}</Text>
    </View>
  );
};

export default HomeScreen;
