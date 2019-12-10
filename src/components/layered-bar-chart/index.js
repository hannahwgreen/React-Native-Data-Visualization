import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import React from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

import { measure } from "../../services";

import Bar from "../bar";
import BarSeparator from "../bar-separator";

import Style, { ICON_SIZE, ICON_COLOR, INNER_BAR_COLOR, OUTER_BAR_COLOR } from "./style";
import { deriveChartDimensions, deriveLargestValue } from "./utilities";

function LayeredBarChart({
  chartOpacity,
  data,
  isExpanded,
  parentHeight,
  parentWidth,
  onPressBar
}) {
  const { barWidth, chartHeight, separatorWidth } = deriveChartDimensions({
    data,
    parentHeight,
    parentWidth
  });

  const largestValue = deriveLargestValue({ data });
  const bars = data.map((datum, index) => {
    const Separator = index + 1 === data.length ? View : BarSeparator;

    return (
      <TouchableOpacity
        activeOpacity={1}
        key={datum.y1}
        style={Style.barContainer}
        onPress={() => onPressBar(datum.x)}
      >
        <Animated.View style={{ alignItems: "center", opacity: chartOpacity }}>
          <Ionicons
            color={ICON_COLOR}
            name={datum.description.iconName}
            size={ICON_SIZE}
            style={Style.icon}
          />
          <Bar
            barWidth={barWidth}
            chartHeight={chartHeight}
            colors={[OUTER_BAR_COLOR]}
            isExpanded={isExpanded}
            limitingYValue={largestValue}
            shouldAnimate
            yValue={datum.y1}
          >
            <Text>{`${datum.y1}°F`}</Text>
            <Bar
              barWidth={barWidth}
              chartHeight={chartHeight}
              colors={[INNER_BAR_COLOR]}
              isExpanded={isExpanded}
              limitingYValue={largestValue}
              shouldAnimate
              yValue={datum.y2}
            >
              <Text>{`${datum.y2}°F`}</Text>
            </Bar>
          </Bar>
        </Animated.View>
        <Separator width={separatorWidth} />
      </TouchableOpacity>
    );
  });

  return <View style={Style.chartContainer}>{bars}</View>;
}

LayeredBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.string,
      y1: PropTypes.number,
      y2: PropTypes.number
    })
  ),
  parentHeight: PropTypes.number.isRequired,
  parentWidth: PropTypes.number.isRequired
};

export default measure(LayeredBarChart);
