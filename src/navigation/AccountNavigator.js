import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MessagesScreen, AccountScreen } from '../screens';
import routes from './routes';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MY_MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
)

export default AccountNavigator;
