import React from "react";
import { Button, StatusBar, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../styles/styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
};

export default HomeScreen;
