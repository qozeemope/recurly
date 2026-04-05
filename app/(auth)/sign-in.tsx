import React from 'react';
import { Text, View } from 'react-native';
import {Link} from "expo-router";

const SignIn = () => {
  return (
    <View>

        <Link href="/(auth)/sign-in">Log in your Account</Link>
        <Link href="/">Go back</Link>
    </View>
  );
};

export default SignIn;
