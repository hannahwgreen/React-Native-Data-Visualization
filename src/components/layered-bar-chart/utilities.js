import { ICON_PADDING, ICON_SIZE } from "./style";

const BAR_RATIO = 1 / 6;

export function deriveLargestValue({ data }) {
  return data.reduce(
    (largestValue, d) => Math.max(largestValue, d.y1),
    0
  );
}

export function deriveChartDimensions({ data, parentHeight, parentWidth }) {
  const numberOfBars = data.length;
  const numberOfSeparators = numberOfBars - 1;
  const separatorWidth = parentWidth / (numberOfSeparators + numberOfBars / BAR_RATIO);
  const barWidth = (parentWidth - numberOfSeparators * separatorWidth) / numberOfBars;
  const chartHeight = parentHeight - ICON_SIZE - ICON_PADDING * 2;

  return {
    barWidth,
    chartHeight,
    separatorWidth,
  };
}
