import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListingDetailsScreen, ListingsScreen } from '../screens';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.FEEDS} component={ListingsScreen} />
    <Stack.Screen name={routes.FEED_DETAILS} component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
