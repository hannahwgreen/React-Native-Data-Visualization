import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Animated, StyleSheet, View, ViewPropTypes } from 'react-native';

import * as AnimationType from './animation-type';
import Style, { DEFAULT_BAR_WIDTH, DEFAULT_MIN_BAR_HEIGHT } from './style';
import { deriveBarHeight } from './utilities';
import { LinearGradient } from 'expo-linear-gradient';

const ANIMATION_DURATION = 500;

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateYValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.animateBars({ animationType: AnimationType.EXPAND_BAR });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isExpanded !== this.props.isExpanded) {
      if (this.props.isExpanded) {
        this.animateBars({ animationType: AnimationType.EXPAND_BAR });
      } else {
        this.animateBars({ animationType: AnimationType.COLLAPSE_BAR });
      }
    }
  }

  animateBars({ animationType }) {
    Animated.timing(this.state.translateYValue, {
      duration: ANIMATION_DURATION,
      toValue: animationType.toValue,
      useNativeDriver: true,
    }).start(() => this.props.onAnimationComplete({ animationType }));
  }

  render() {
    const {
      barWidth,
      chartHeight,
      children,
      colors,
      isHidden,
      minBarHeight,
      shouldAnimate,
      style: additionalStyles,
      limitingYValue,
      yValue,
    } = this.props;

    const barHidden = StyleSheet.flatten([Style.bar, additionalStyles, { width: barWidth }]);

    if (isHidden) return <View style={barHidden} />;
    
    const height = deriveBarHeight({
      chartHeight,
      minBarHeight,
      limitingYValue,
      yValue,
    });

    const translateY = this.state.translateYValue.interpolate({
      inputRange: [0, 1],
      outputRange: [height, 0],
    });

    const barStyle = StyleSheet.flatten([
      Style.bar,
      additionalStyles,
      colors.length === 1 && { backgroundColor: colors[0] },
      { height },
      { width: barWidth }
    ]);

    const animatedBarStyle = StyleSheet.flatten([
      barStyle,
      { transform: [{ translateY }] }
    ]);

    if (shouldAnimate && colors.length > 1) {
      return <Animated.View style={animatedBarStyle}><LinearGradient colors={colors} style={barStyle}>{children}</LinearGradient></Animated.View>;
    }
    if (shouldAnimate && colors.length === 1 ) {
      return (
        <Animated.View style={animatedBarStyle}>
            {children}
        </Animated.View>
      );
    }
    if(color.length > 1 ){
      return (
        <View style={barStyle}>
          <LinearGradient colors={colors} style={barStyle}>
            {children}
          </LinearGradient>
        </View>
      );
    }

    return <View style={barStyle}>{children}</View>;
  }
}

Bar.defaultProps = {
  barWidth: DEFAULT_BAR_WIDTH,
  children: null,
  colors: ['transparent'],
  isExpanded: false,
  isHidden: false,
  minBarHeight: DEFAULT_MIN_BAR_HEIGHT,
  onAnimationComplete: () => { },
  shouldAnimate: false,
  style: {},
  yValue: 0,
};

Bar.propTypes = {
  barWidth: PropTypes.number,
  chartHeight: PropTypes.number.isRequired,
  children: PropTypes.node,
  colors: PropTypes.arrayOf(PropTypes.string),
  isExpanded: PropTypes.bool,
  isHidden: PropTypes.bool,
  minBarHeight: PropTypes.number,
  onAnimationComplete: PropTypes.func,
  shouldAnimate: PropTypes.bool,
  style: ViewPropTypes.style,
  limitingYValue: PropTypes.number.isRequired,
  yValue: PropTypes.number,
};

export default Bar;
