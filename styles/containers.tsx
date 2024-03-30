import { StyleSheet } from "react-native";

export const container = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    marginVertical: 50,
  },
  detailsContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 24,
    marginBottom: 20,
  },
  weekWeatherElement: {
    alignItems: "center",
    padding: 24,
    marginRight: 16,
    marginBottom: 4,
    color: "white",
    height: 180,
    width: 150,
    justifyContent: "space-between",
    backgroundColor: "grey",
    borderRadius: 20,
  },
  header: {
    padding: 24,
    height: 100,
    backgroundColor: "inherit",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "lightgrey",
    opacity: 0.3,
    borderRadius: 50,
    padding: 10,
  },
});
