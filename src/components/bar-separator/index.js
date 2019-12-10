import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

function BarSeparator({ width }) {

  const style = StyleSheet.flatten([{ width }]);

  return <View style={style} />;
}

BarSeparator.propTypes = {
  width: PropTypes.number.isRequired,
};

export default BarSeparator;