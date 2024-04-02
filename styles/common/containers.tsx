import { StyleSheet } from "react-native";
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
    padding: 15,
    backgroundColor: "inherit",
    alignItems: "flex-start",
  },
  centerContainer: {
    paddingVertical: rem(5),
  },
  weeklyForecastElementContainer: {
    ...centered,
    ...defaultTextStyle,
    marginRight: 5,
    marginBottom: 6,
    height: rem(180),
    width: rem(160),
    opacity: 0.8,
    backgroundColor: theme.colors.grey,
    borderRadius: 20,
  },
});
