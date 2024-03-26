import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { styles } from "../styles/styles";
import { observer } from "mobx-react-lite";
import { cityStore } from "../stores/CityStore";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const HomeScreen = observer(() => {
  const today = new Date();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        cityStore.setError("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        let reverseCode = await Location.reverseGeocodeAsync(location.coords);
        cityStore.setCity(reverseCode[0].city ?? "");
      } catch (error: any) {
        cityStore.setError(error.message);
      }
    })();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        {/* StatusBar */}
        <StatusBar style="light" />
        {/* HEADER */}
        <View style={styles.header}>
          {cityStore.error ? (
            <Text style={styles.lightText}>Error: {cityStore.error}</Text>
          ) : (
            <>
              <Text style={styles.lightText}>{cityStore.city}</Text>
              <Text style={styles.darkText}>
                Today,{" "}
                {today.toLocaleDateString(undefined, {
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </>
          )}
        </View>
        {/* SEARCH CITY INPUT */}
        <TextInput style={styles.input} placeholder="City Search"></TextInput>
      </SafeAreaView>
    </View>
  );
});

export default HomeScreen;
