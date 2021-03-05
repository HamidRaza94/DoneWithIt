import React from 'react';
import ReactNative, { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { defaultStyles } from '../config';

const TextInput = ({ icon, width = '100%', ...restProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      <MaterialCommunityIcons
        name={icon}
        size={25}
        color={defaultStyles.colors.black}
        style={styles.icon}
      />
      <ReactNative.TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...restProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    marginVertical: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

export default TextInput;