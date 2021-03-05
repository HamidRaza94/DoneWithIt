import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import Text from './Text';
import { defaultStyles } from '../config';

const Card = ({ image, title, subTitle, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    padding: 20,
  },
  subTitle: {
    color: defaultStyles.colors.secondary,
    paddingTop: 10,
  },
})

export default Card;
