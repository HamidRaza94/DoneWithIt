import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Text, ListItem } from '../components';
import { defaultStyles } from '../config';

const ListingDetailsScreen = ({ route: { params: { image, title, price } } }) => {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  price: {
    color: defaultStyles.colors.secondary,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  userContainer: {
    marginTop: 40,
  },
});

export default ListingDetailsScreen;