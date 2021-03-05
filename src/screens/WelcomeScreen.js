import React from 'react';
import { ImageBackground, View, StyleSheet, Image } from 'react-native';

import { Text, Button } from '../components';

const WelcomeScreen = ({ navigation }) => (
  <ImageBackground
    source={require('../assets/background.jpg')}
    style={styles.background}
    blurRadius={1.3}
  >
    <View style={styles.logoContainer}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <Text style={styles.tagline}>Sell What You Don't Need</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} color="secondary" />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: 70,
  },
  tagline: {
    fontWeight: '600',
    fontSize: 25,
    paddingVertical: 20,
  },
});

export default WelcomeScreen;