import { StyleSheet, TextStyle } from "react-native";

export const text = StyleSheet.create({
  light: {
    color: "white",
    fontSize: 18,
  },
  dark: {
    color: "grey",
    fontSize: 18,
  },
  iconDetails: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  weeklyForecast: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  error: {
    color: "red",
    fontSize: 18,
  },
  neon: {
    textShadowColor: "#D0F0C0",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    fontWeight: "bold",
  },
});
