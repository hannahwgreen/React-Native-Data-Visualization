import React, { Component } from "react";
import { Animated, TouchableOpacity, View } from "react-native";

import data from './data';
import Style, {
  LAYERED_CHART_LABEL_SIZE, SIMPLE_CHART_LABEL_SIZE
} from "./style";
import { ChartLabels, LayeredBarChart, Message, SimpleBarChart } from "../../components";
import { formatSimpleChartData, formatLayeredChartData } from "./utilities";

const ANIMATION_DURATION = 750

class WeatherGraphic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null,
      isForecastChartExpanded: false,
      isSummaryMode: true,
      isWeekChartExpanded: false,
      forecastChartOpacity: new Animated.Value(0),
      weekChartOpacity: new Animated.Value(0)
    };

    this.animateChart = this.animateChart.bind(this);
    this.expandForecastChart = this.expandForecastChart.bind(this);
    this.expandWeekChart = this.expandWeekChart.bind(this);
    this.onBarPress = this.onBarPress.bind(this)
  }

  componentDidMount(){
    this.animateChart()
  }

  expandForecastChart(){
    setTimeout(() => {
      this.setState({ isSummaryMode: false });
        Animated.timing(this.state.forecastChartOpacity, {
          duration: ANIMATION_DURATION,
          toValue: 1,
          useNativeDriver: true
        }).start();
        this.setState({ isForecastChartExpanded: true });
      }, ANIMATION_DURATION);
  }

  expandWeekChart(){
    setTimeout(() => {
      this.setState({ isSummaryMode: true });
      Animated.timing(this.state.weekChartOpacity, {
        duration: ANIMATION_DURATION,
        toValue: 1,
        useNativeDriver: true
      }).start(),
        this.setState({ isWeekChartExpanded: true });
    }, ANIMATION_DURATION);
  }

  animateChart() {
    if(this.state.isWeekChartExpanded){
      Animated.timing(this.state.weekChartOpacity, {
        duration: ANIMATION_DURATION,
        toValue: 0,
        useNativeDriver: true
      }).start(),
      this.setState({ isWeekChartExpanded: false }, this.expandForecastChart);
    } else {
      Animated.timing(this.state.forecastChartOpacity, {
        duration: ANIMATION_DURATION,
        toValue: 0,
        useNativeDriver: true
      }).start(),
        this.setState({ isForecastChartExpanded: false }, this.expandWeekChart);
    }
  }

  onBarPress(day){
    const selectedDay = data.find(d => d.day === day)
    this.setState({selectedDay})
    this.animateChart()
  }

  render() {
    const {
      forecastChartOpacity,
      selectedDay,
      isForecastChartExpanded,
      isWeekChartExpanded,
      isSummaryMode,
      weekChartOpacity
    } = this.state;
    const layeredChartData = formatLayeredChartData(data);
    const simpleChartData = formatSimpleChartData(selectedDay);

    return (
      <View style={Style.container}>
        <View style={Style.massageSection}>
          <Message
            isSummaryMode={isSummaryMode}
            data={selectedDay}
            detailOpacity={forecastChartOpacity}
            summaryOpacity={weekChartOpacity}
          />
        </View>
        {isSummaryMode && (
          <View style={Style.chartSection}>
            <LayeredBarChart
              data={layeredChartData}
              isExpanded={isWeekChartExpanded}
              onPressBar={this.onBarPress}
              chartOpacity={weekChartOpacity}
            />
            <ChartLabels
              chartOpacity={weekChartOpacity}
              data={layeredChartData}
              size={LAYERED_CHART_LABEL_SIZE}
            />
          </View>
        )}
        {!isSummaryMode && (
          <TouchableOpacity
            activeOpacity={1}
            style={Style.chartSection}
            onPress={() => this.animateChart(isWeekChartExpanded, false)}
          >
            <SimpleBarChart
              isExpanded={isForecastChartExpanded}
              data={simpleChartData}
              shouldAnimate
            />
            <ChartLabels
              chartOpacity={forecastChartOpacity}
              data={simpleChartData}
              size={SIMPLE_CHART_LABEL_SIZE}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default WeatherGraphic

