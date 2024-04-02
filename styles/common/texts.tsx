import { Dimensions, Platform, StyleSheet, TextStyle } from "react-native";
import { theme } from "../theme/theme";
import { rem } from "./rem";

const neonStyle: TextStyle = {
  textShadowColor: "#D0F0C0",
  textShadowRadius: 15,
  fontWeight: "bold",
};

export const text = StyleSheet.create({
  light: {
    color: theme.colors.white,
    fontSize: theme.fontSize.medium,
  },
  dark: {
    color: theme.colors.grey,
    fontSize: theme.fontSize.medium,
  },
  todayTemp: {
    color: theme.colors.white,
    fontSize: theme.fontSize.xlarge,
    padding: 10,
    textAlign: "center",
  },
  loading: {
    width: "100%",
    color: theme.colors.white,
    fontSize: theme.fontSize.xxlarge,
    padding: 18,
    ...neonStyle,
  },
  error: {
    color: theme.colors.red,
    fontSize: theme.fontSize.medium,
  },
  neon: {
    ...neonStyle,
    fontSize: Platform.OS === "android" ? rem(220) : rem(160),
  },
});
