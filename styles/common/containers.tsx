import { Platform, StyleSheet } from "react-native";
import { centered, defaultTextStyle } from "../common/commonStyles";
import { rem } from "../common/rem";
import { theme } from "../theme/theme";

export const container = StyleSheet.create({
  mainContainer: {
    ...centered,
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  container: {
    ...centered,
  },
  header: {
    padding: rem(20),
    height: rem(120),
    backgroundColor: "inherit",
    alignItems: "flex-start",
  },
  centerContainer: {
    height: "50%",
    top: "5%",
  },

  weeklyForecastElementContainer: {
    ...centered,
    ...defaultTextStyle,
    marginRight: rem(16),
    marginBottom: rem(5),
    height: rem(180),
    width: rem(160),
    opacity: 0.8,
    backgroundColor: theme.colors.grey,
    borderRadius: rem(20),
  },
});
