import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    borderColor: "red",
    borderWidth: 1,
  },
  header: {
    padding: 24,
    backgroundColor: "inherit",
    borderColor: "red",
    borderWidth: 1,
  },
  input: {
    backgroundColor: "lightgrey",
    opacity: 0.3,
    borderRadius: 50,
    padding: 10,
  },
  lightText: {
    color: "white",
    fontSize: 18,
  },
  darkText: {
    color: "grey",
    fontSize: 18,
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});
