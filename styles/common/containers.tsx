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
    flex: 2,
    paddingVertical: rem(5),
  },
  weeklyForecastElementContainer: {
    ...centered,
    ...defaultTextStyle,
    flex: 3,
    marginRight: 5,
    height: rem(180),
    width: rem(100),
    opacity: 0.8,
    backgroundColor: theme.colors.darkGrey,
    borderRadius: 50,
  },
});
