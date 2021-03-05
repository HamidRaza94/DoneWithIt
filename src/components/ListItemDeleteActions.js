import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { defaultStyles } from '../config';

const ListItemDeleteActions = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={defaultStyles.colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: defaultStyles.colors.danger,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ListItemDeleteActions;