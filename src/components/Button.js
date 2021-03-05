import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Text from './Text';
import { defaultStyles } from '../config';

const Button = ({ title, onPress, color = 'primary' }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, { backgroundColor: defaultStyles.colors[color] }]}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyles.colors.primary,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: defaultStyles.colors.white,
  },
});

export default Button;