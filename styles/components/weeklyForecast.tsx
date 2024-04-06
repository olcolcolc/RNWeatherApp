import { StyleSheet } from "react-native";
import { defaultTextStyle } from "../common/commonStyles";
import { theme } from "../theme/theme";

export const weeklyForecast = StyleSheet.create({
  temp: {
    ...defaultTextStyle,
    fontSize: theme.fontSize.large,
  },
  weekday: {
    ...defaultTextStyle,
    fontSize: theme.fontSize.medium,
    padding: 5,
  },
  conditionText: {
    ...defaultTextStyle,
    fontSize: theme.fontSize.small,
  },
});
