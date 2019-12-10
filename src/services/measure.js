import { View } from 'react-native';
import React, { Component } from 'react';

function measure(WrappedComponent) {
  class withParentDimensions extends Component {
    constructor(props) {
      super(props);

      this.state = {
        hasMeasurement: false,
        parentHeight: null,
        parentWidth: null,
      };

      this.onLayout = this.onLayout.bind(this);
    }

    onLayout(e) {
      const { width, height } = e.nativeEvent.layout;

      this.setState({
        hasMeasurement: true,
        parentHeight: height,
        parentWidth: width,
      });
    }

    render() {
      const { parentHeight, parentWidth } = this.state;

      if (this.state.hasMeasurement) {
        
        return <WrappedComponent {...this.props} parentHeight={parentHeight} parentWidth={parentWidth} />;
      }

      return <View style={{ height: '100%', width: '100%' }} onLayout={this.onLayout} />;
    }
  }

  return withParentDimensions;
}

export default measure;
