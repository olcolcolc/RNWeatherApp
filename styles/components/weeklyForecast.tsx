import { StyleSheet, TextStyle } from "react-native";
import { centered } from "../common/commonStyles";
import { theme } from "../theme/theme";

const defaultTextStyle: TextStyle = {
  color: "white",
  textAlign: "center",
};

export const weeklyForecast = StyleSheet.create({
  container: {
    ...centered,
    ...defaultTextStyle,
    padding: 24,
    marginRight: 16,
    marginBottom: 5,
    height: 200,
    width: 180,
    backgroundColor: theme.colors.grey,
    borderRadius: 20,
  },
  temp: {
    ...defaultTextStyle,
    fontSize: theme.fontSize.large,
  },
  weekday: {
    ...defaultTextStyle,
    fontSize: theme.fontSize.medium,
  },
  conditionText: {
    ...defaultTextStyle,
    fontSize: theme.fontSize.small,
  },
});
