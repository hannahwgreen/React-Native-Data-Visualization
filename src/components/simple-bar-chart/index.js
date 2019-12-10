import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import { measure } from '../../services';

import Bar from '../bar';
import BarSeparator from '../bar-separator';

import Style, { ICON_SIZE, ICON_COLOR, MIN_BAR_HEIGHT } from "./style";
import { deriveChartDimensions, deriveLargestValue } from './utilities';

function SimpleBarChart({ data, isExpanded, parentHeight, parentWidth, shouldAnimate }) {
  const { barWidth, chartHeight, separatorWidth } = deriveChartDimensions({
    data,
    parentHeight,
    parentWidth,
  });

  const largestValue = deriveLargestValue({ data });
  const bars = data.map((datum, index) => {
  const Separator = index + 1 === data.length ? View : BarSeparator;

    return (
      <View key={`${datum.x}`} style={Style.barContainer}>
        <View style={Style.barWrapper}>
          <Bar
            barWidth={barWidth}
            chartHeight={chartHeight}
            colors={datum.colors}
            isExpanded={isExpanded}
            limitingYValue={largestValue}
            minBarHeight={MIN_BAR_HEIGHT}
            shouldAnimate={shouldAnimate}
            yValue={datum.y}
          >
            <Ionicons
              color={ICON_COLOR}
              name={datum.x}
              size={ICON_SIZE}
              style={Style.icon}
            />
            <Text style={Style.text}>{`${datum.y}%`}</Text>
          </Bar>
        </View>
        <Separator width={separatorWidth} />
      </View>
    );
  });

  return <View style={Style.chartContainer}>{bars}</View>;
}

SimpleBarChart.propTypes = {
  parentHeight: PropTypes.number.isRequired,
  parentWidth: PropTypes.number.isRequired,
};

export default measure(SimpleBarChart);
