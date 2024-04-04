import { StyleSheet } from "react-native";
import { centered } from "../common/commonStyles";
import { theme } from "../theme/theme";

export const weatherDetails = StyleSheet.create({
  mainContainer: {
    justifyContent: "space-around",
    padding: 24,
    flexDirection: "row",
  },
  container: {
    alignItems: "center",
    width: 100,
  },
  iconContainer: {
    ...centered,
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 8,
    backgroundColor: theme.colors.greyWithOpacity,
  },
  icon: {
    color: theme.colors.white,
    fontSize: theme.fontSize.xlarge,
    ...centered,
  },
  weatherDetail: {
    color: theme.colors.white,
    fontSize: theme.fontSize.medium,
    ...centered,
  },
});
