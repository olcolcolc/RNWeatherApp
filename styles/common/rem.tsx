import { Dimensions } from "react-native";

export const baseSize = Dimensions.get("window").width / 375;

// Define rem function
export const rem = (size: number) => baseSize * size;
