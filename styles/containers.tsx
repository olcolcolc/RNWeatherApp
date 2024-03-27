import { StyleSheet, TextStyle } from "react-native";

export const container = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    padding: 44,
    borderWidth: 1,
    marginBottom: 20,
    marginVertical: 50,
  },
  detailsContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 24,
    borderColor: "red",
    borderWidth: 1,
    marginBottom: 20,
  },
  weekWeatherElement: {
    alignItems: "center",
    padding: 24,
    marginRight: 16,
    marginBottom: 4,
    color: "white",
    height: 120,
    justifyContent: "space-between",
    backgroundColor: "grey",
    borderRadius: 20,
  },
  header: {
    padding: 24,
    backgroundColor: "inherit",
    borderColor: "red",
    borderWidth: 1,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "lightgrey",
    opacity: 0.3,
    borderRadius: 50,
    padding: 10,
  },
});
