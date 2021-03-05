import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { Screen, FormField, SubmitButton, Form } from '../components';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().min(4).required().label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles.logo}
      />
      <Form
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={() => console.log('submit button clicked')}
      >
        <FormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="email"
          placeholder="Email"
          textContentType="emailAddress"
          name="email"
          keyboardType="email-address"
        />
        <FormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          name="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;