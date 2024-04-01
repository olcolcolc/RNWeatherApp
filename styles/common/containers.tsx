import { StyleSheet } from "react-native";
import { centered } from "../common/commonStyles";

export const container = StyleSheet.create({
  mainContainer: {
    ...centered,
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    ...centered,
    marginVertical: 20,
  },
  header: {
    padding: 24,
    height: 100,
    backgroundColor: "inherit",
    marginBottom: 20,
  },
});
