const BAR_RATIO = 1 / 6;

export function deriveChartDimensions({ data, parentWidth }) {
  const numberOfBars = data.length;
  const numberOfSeparators = numberOfBars - 1;
  const separatorWidth =
    parentWidth / (numberOfSeparators + numberOfBars / BAR_RATIO);
  const barWidth =
    (parentWidth - numberOfSeparators * separatorWidth) / numberOfBars;

  return {
    barWidth,
    separatorWidth
  };
}
