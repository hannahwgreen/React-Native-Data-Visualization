import { PropTypes } from 'prop-types';

export const SUNNY = Object.freeze({
  toString: () => "sunny",
  iconName: "md-sunny"
});

export const CLOUDY = Object.freeze({
  toString: () => "cloudy",
  iconName: "ios-cloudy"
});

export const PARTLY_CLOUDY = Object.freeze({
  toString: () => "partly cloudy",
  iconName: "ios-partly-sunny"
});

export const RAIN = Object.freeze({
  toString: () => "rainy",
  iconName: "ios-rainy"
});

export const THUNDERSTORM = Object.freeze({
  toString: () => "thunderstorms",
  iconName: "ios-thunderstorm"
});

export const SNOW = Object.freeze({
  toString: () => "snowy",
  iconName: "md-snow"
});

export const PropShape = PropTypes.shape({
  toString: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired
});
