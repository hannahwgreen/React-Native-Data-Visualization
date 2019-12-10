import { StyleSheet } from "react-native";

export const CHART_LABEL_HEIGHT = 30
const TEXT_COLOR = "#063958";
const PADDING = 3;

export default StyleSheet.create({
  chartContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    overflow: "hidden"
  },
  label: {
    color: TEXT_COLOR,
    height: CHART_LABEL_HEIGHT,
    textAlign: "center"
  },
  labelContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    paddingTop: PADDING
  }
});
