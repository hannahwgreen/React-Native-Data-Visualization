import { PropTypes } from 'prop-types';

export const COLLAPSE_BAR = Object.freeze({
  toString: () => 'COLLAPSE_BAR',
  toValue: 0,
  unit: 'collapse',
});

export const EXPAND_BAR = Object.freeze({
  toString: () => 'EXPAND_BAR',
  toValue: 1,
  unit: 'expand',
});

export const PropShape = PropTypes.shape({
  toString: PropTypes.func.isRequired,
  toValue: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
});
