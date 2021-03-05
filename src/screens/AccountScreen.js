import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { Screen, ListItem, Icon } from '../components';
import { defaultStyles } from '../config';
import { routes } from '../navigation';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: defaultStyles.colors.primary,
    },
    route: routes.MY_LISTING,
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: defaultStyles.colors.secondary,
    },
    route: routes.MY_MESSAGES,
  },
];

const AccountScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <ListItem
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        image={require('../assets/mosh.jpg')}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item: menuItem }) => (
            <ListItem
              title={menuItem.title}
              IconComponent={<Icon {...menuItem.icon} />}
              onPress={() => navigation.navigate(menuItem.route)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
  container: {
    paddingVertical: 30,
  },
})

export default AccountScreen;