import React from 'react';
import ReactNative from 'react-native';

import { defaultStyles } from '../config';

const Text = ({ children, style, ...restProps }) => (
  <ReactNative.Text
    style={[defaultStyles.text, style]}
    {...restProps}
  >
    {children}
  </ReactNative.Text>
);

export default Text;