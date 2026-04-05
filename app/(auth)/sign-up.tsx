import React from 'react';
import { Text, View } from 'react-native';
import {Link} from "expo-router";

const SignUp = () => {
    return (
        <View>

            <Link href="/(auth)/sign-up">Create Account</Link>
        </View>
    );
};

export default SignUp;
