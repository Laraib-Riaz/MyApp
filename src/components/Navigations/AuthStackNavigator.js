import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen1 from '../../screens/Authentication/SplashScreen1'
import SplashScreen2 from '../../screens/Authentication/SplashScreen2'
import SplashScreen3 from '../../screens/Authentication/SplashScreen3'
import ChangePass from '../../screens/Authentication/ChangePass'
import ResetPassword from '../../screens/Authentication/ResetPassword'
import AccountType from '../../screens/Authentication/AccountType'
import Verification from '../../screens/Authentication/Verification'
import Login from '../../screens/Authentication/Login'
import Signup from '../../screens/Authentication/Signup'
import {NavigationContainer} from '@react-navigation/native'
import CompanySignup from '../../screens/Company/CompanySignup'

const AuthStackNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashscreen1">
        <Stack.Screen
          name="splashscreen1"
          component={SplashScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="splashscreen2"
          component={SplashScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="splashscreen3"
          component={SplashScreen3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="changepass"
          component={ChangePass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="resetpassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="accounttype"
          component={AccountType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="companysignup"
          component={CompanySignup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default AuthStackNavigator
