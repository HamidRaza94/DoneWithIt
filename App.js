import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { navigationTheme, AuthNavigator, AppNavigator } from './src/navigation';

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
