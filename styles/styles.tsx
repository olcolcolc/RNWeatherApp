import { StyleSheet, TextStyle } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    borderColor: "red",
    borderWidth: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    borderColor: "red",
    borderWidth: 1,
  },
  detailsContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 24,
    borderColor: "red",
    borderWidth: 1,
  },
  footer: {
    padding: 24,
    backgroundColor: "inherit",
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
  iconDetails: { color: "white", fontSize: 24, marginHorizontal: 10 },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});
