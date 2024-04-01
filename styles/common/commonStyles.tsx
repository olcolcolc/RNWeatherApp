import { TextStyle } from "react-native";
import { theme } from "../theme/theme";

export const centered: TextStyle = {
  justifyContent: "center",
  alignItems: "center",
};

export const defaultTextStyle: TextStyle = {
  color: theme.colors.white,
  textAlign: "center",
};
