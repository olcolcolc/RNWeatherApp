import React from "react";
import { Button, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
};

export default HomeScreen;
