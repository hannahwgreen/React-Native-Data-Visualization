import React from "react";
import { Animated, Text } from "react-native";

import Style from "./style";

function Message({ data, detailOpacity, isSummaryMode, summaryOpacity }) {
  if (isSummaryMode)
    return (
      <Animated.View opacity={summaryOpacity}>
        <Text style={Style.messageText}>This Week's Weather</Text>
        <Text style={Style.subtitleText}>Tap a bar to see more details about that day's weather</Text>
      </Animated.View>
    );

  return (
    <Animated.View opacity={detailOpacity}>
      <Text style={Style.messageText}>
        {`${data.day}'s Weather is ${data.description} with a high of ${data.highTemp}°F, a low of ${data.lowTemp}°F, ${data.humidity}% humidity and a ${data.chanceOfRain}% chance of rain.`}
      </Text>
    </Animated.View>
  );
}

export default Message;
