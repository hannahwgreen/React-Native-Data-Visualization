import { StyleSheet } from "react-native";

export const LAYERED_CHART_LABEL_SIZE = 28
export const SIMPLE_CHART_LABEL_SIZE = 20;
const BACKGROUND_COLOR = "#D8E3ED";
const PADDING_VERTICAL = 80
const PADDING_HORIZONTAL = 20;


export default StyleSheet.create({
  chartSection: {
    height: "50%",
    justifyContent: "flex-end",
    width: "100%"
  },
  container: {
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingLeft: PADDING_HORIZONTAL,
    paddingRight: PADDING_HORIZONTAL,
    paddingBottom: PADDING_VERTICAL,
    width: "100%"
  },
  massageSection: {
    justifyContent: 'flex-end',
    height: "40%",
    marginBottom: PADDING_VERTICAL,
    width: "100%"
  }
});