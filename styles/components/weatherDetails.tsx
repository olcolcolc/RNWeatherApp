import { StyleSheet, TextStyle } from "react-native";
import { centered } from "../common/commonStyles";
import { theme } from "../theme/theme";

export const weatherDetails = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 24,
    marginBottom: 20,
  },
  iconContainer: {
    ...centered,
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
    backgroundColor: "rgba(128, 128, 128, 0.4)", // grey color with 40% opacity
  },
  icon: {
    color: theme.colors.white,
    fontSize: theme.fontSize.xlarge,
    padding: 3,
    textAlign: "center",
    ...centered,
  },
  weatherDetail: {
    color: theme.colors.white,
    fontSize: theme.fontSize.medium,
    ...centered,
  },
});
