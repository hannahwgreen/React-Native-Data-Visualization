import { StyleSheet } from "react-native";

export const ICON_SIZE = 30
export const ICON_COLOR = "#063958";
export const ICON_PADDING = 3
export const INNER_BAR_COLOR = "#9FE2DC";
export const OUTER_BAR_COLOR = "#4674A5"

export default StyleSheet.create({
  barContainer: {
    flexDirection: "row"
  },
  chartContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    overflow: "hidden"
  },
  icon: {
    padding: ICON_PADDING
  },
});
