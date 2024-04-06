import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";
import { centered } from "../common/commonStyles";

const weeklyForecastModal = StyleSheet.create({
  container: {
    paddingVertical: 30,
    borderRadius: 30,
    backgroundColor: theme.colors.darkGrey,
    ...centered,
  },
  dateHeader: {
    color: theme.colors.white,
    fontSize: theme.fontSize.xlarge,
    marginVertical: 10,
  },
  errorHeader: {
    color: theme.colors.red,
    fontSize: theme.fontSize.xlarge,
    marginVertical: 10,
  },
  detailsView: {
    padding: 10,
  },
  detail: {
    color: theme.colors.white,
    fontSize: theme.fontSize.medium,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginRight: 10,
    fontSize: theme.fontSize.xlarge,
  },
});

export default weeklyForecastModal;
