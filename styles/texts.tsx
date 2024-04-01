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
    padding: 3,
    textAlign: "center",
  },
  weeklyForecast: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  loading: {
    color: "white",
    fontSize: 40,
    padding: 10,
    textShadowColor: "#D0F0C0",
    textShadowRadius: 50,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 18,
  },
  neon: {
    textShadowColor: "#D0F0C0",
    textShadowRadius: 50,
    fontWeight: "bold",
  },
});
