import { Platform, StyleSheet, TextStyle } from "react-native";
import { theme } from "../theme/theme";
import { rem } from "./rem";
import { screenOrientationStore } from "../../stores/ScreenOrientationStore";

const neonStyle: TextStyle = {
  textShadowColor: "#D0F0C0",
  textShadowRadius: 15,
  fontWeight: "bold",
};

export const text = StyleSheet.create({
  light: {
    color: theme.colors.white,
    fontSize: theme.fontSize.small,
  },
  dark: {
    color: theme.colors.grey,
    fontSize: theme.fontSize.medium,
  },
  todayTemp: {
    color: theme.colors.white,
    fontSize: theme.fontSize.xxxlarge,
    padding: 5,
    textAlign: "center",
  },
  loading: {
    width: "100%",
    color: theme.colors.white,
    fontSize: theme.fontSize.xxxlarge,
    padding: 18,
    ...neonStyle,
  },
  error: {
    color: theme.colors.red,
    fontSize: theme.fontSize.medium,
  },
  neon: {
    ...neonStyle,
    fontSize:
      screenOrientationStore.orientation === "LANDSCAPE"
        ? Platform.OS === "android"
          ? rem(170)
          : rem(120)
        : Platform.OS === "android"
        ? rem(210)
        : rem(160),
  },
});
