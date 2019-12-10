import { StyleSheet } from 'react-native';

export const ICON_COLOR = "#FFF";
export const ICON_SIZE = 30;
const BAR_INNER_PADDING = 4
const TEXT_COLOR = "#063958";
const TEXT_SIZE = 20
export const MIN_BAR_HEIGHT = ICON_SIZE + TEXT_SIZE + 4 * BAR_INNER_PADDING;


export default StyleSheet.create({
  barContainer: {
    flexDirection: "row",
    overflow: "hidden"
  },
  barWrapper: {
    alignItems: "center"
  },
  chartContainer: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  icon: {
    paddingTop: BAR_INNER_PADDING
  },
  text: {
    color: TEXT_COLOR,
    fontSize: TEXT_SIZE,
    paddingBottom: BAR_INNER_PADDING
  }
});
