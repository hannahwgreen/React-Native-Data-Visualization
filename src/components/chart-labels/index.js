import PropTypes from "prop-types";
import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

import { measure } from "../../services";

import BarSeparator from "../bar-separator";

import Style from "./style";
import { deriveChartDimensions } from "./utilities";

function ChartLabels({ chartOpacity, data, parentWidth, size }) {
  const { barWidth, separatorWidth } = deriveChartDimensions({
    data,
    parentWidth
  });
  const barLabels = data.map((datum, index) => {
    const Separator = index + 1 === data.length ? View : BarSeparator;
    const textStyle = StyleSheet.flatten([Style.label, { fontSize: size }, { width: barWidth }]);
    const labelStyle = StyleSheet.flatten([
      Style.labelContainer,
      { opacity: chartOpacity }
    ]);

    return (
      <Animated.View key={`${datum.x}`} style={labelStyle}>
        <Text style={textStyle}>{`${datum.label}`}</Text>
        <Separator width={separatorWidth} />
      </Animated.View>
    );
  });

  return <View style={Style.labelContainer}>{barLabels}</View>;
}

ChartLabels.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.string,
      y1: PropTypes.number,
      y2: PropTypes.number
    })
  ),
  parentWidth: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
};

export default measure(ChartLabels);
