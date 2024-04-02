import { StyleSheet } from "react-native";
import { centered } from "../common/commonStyles";
import { theme } from "../theme/theme";

export const weatherDetails = (orientation: string) =>
  StyleSheet.create({
    container: {
      justifyContent: "space-around",
      padding: 24,
      flexDirection: orientation === "LANDSCAPE" ? "column" : "row",
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
