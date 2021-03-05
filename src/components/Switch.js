import React, { useState } from 'react';
import ReactNative from 'react-native';

const Switch = () => {
  const [value, setValue] = useState(false);

  return (
    <ReactNative.Switch value={value} onValueChange={setValue} />
  );
}

export default Switch;