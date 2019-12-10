export function deriveBarHeight({ chartHeight, minBarHeight, limitingYValue, yValue }) {
  const maxBarHeight = Math.max(minBarHeight, limitingYValue);

  const barHeight = (yValue * chartHeight) / maxBarHeight;

  return barHeight < minBarHeight ? minBarHeight : barHeight;
}
