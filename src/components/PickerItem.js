import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Text from './Text';

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default PickerItem;