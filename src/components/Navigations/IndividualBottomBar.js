import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {scale} from 'react-native-size-matters'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import IndividualRequest from '../../screens/Individual/IndividualRequest'
import IndividualSecurityRep from '../../screens/Individual/IndividualSecurityRep'
import IndividualSaved from '../../screens/Individual/IndividualSaved'
import IndividualWallet from '../../screens/Individual/IndividualWallet'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Notifications from '../../screens/Common/Notifications'
import IndividualSRepDetails from '../../screens/Individual/IndividualSRepDetails'
import IndividualReqDetails from '../../screens/Individual/IndividualReqDetails'
import IndividualMap from '../../screens/Individual/IndividualMap'
import VacationalPetrol from '../../screens/Individual/VacationalPetrol'
import IndividualAddInfo from '../../screens/Individual/IndividualAddInfo'
import IndividualEditInfo from '../../screens/Individual/IndividualEditInfo'
import IndividualTransactionAll from '../../screens/Individual/IndividualAllTransaction'
import IndividualEditProfile from '../../screens/Individual/IndividualEditProfile'
import IndividualRTabbar from '../../screens/Individual/IndividualRTabBar'
import IndividualPromo from '../../screens/Individual/IndividualPromo'
import IndividualChat from '../../screens/Individual/IndividualChat'
import IndividualChangePass from '../../screens/Individual/IndividualChangePass'
import IndividualSetting from '../../screens/Individual/IndividualSetting'
import IndividualNewHome from '../../screens/Individual/IndividualNewHome'

const IndividualBottomBar = (props) => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: scale(60),
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 0.3,
          },
          shadowRadius: 5,
          shadowOpacity: 0.1,
          paddingBottom: 5,
          borderColor: '#A3A3A3',
          borderWidth: 1,
        },
      }}
      initialRouteName="AllHome">
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{height: scale(25), width: scale(25)}}
              source={require('../../assets/Images/home.png')}
            />
          ),
        }}
        name={'Home'}
        component={AllHome}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{height: scale(25), width: scale(25)}}
              source={require('../../assets/Images/report.png')}
            />
          ),
        }}
        name={'Report'}
        component={AllReport}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{height: scale(25), width: scale(25)}}
              source={require('../../assets/Images/request.png')}
            />
          ),
        }}
        name={'Request'}
        component={AllRequest}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{height: scale(25), width: scale(25)}}
              source={require('../../assets/Images/saved.png')}
            />
          ),
        }}
        name={'Saved'}
        component={AllSaved}
      />
      <Tab.Screen
        options={{
          tabBarStyle: {
            display: 'none',
          },
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{height: scale(25), width: scale(25)}}
              source={require('../../assets/Images/wallet.png')}
            />
          ),
        }}
        name={'Wallet'}
        component={AllWallet}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  Bottomnavigator: {
    height: scale(70),
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
  BottomIcons1: {
    flex: 1,
    borderTopLeftRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomIcons2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomIcons5: {
    flex: 1,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: '#435CA8',
    fontWeight: '500',
  },
})
export default IndividualBottomBar

const Stack = createNativeStackNavigator()

function AllHome() {
  return (
    <Stack.Navigator initialRouteName="individualnewhome">
      <Stack.Screen
        name="individualnewhome"
        component={IndividualNewHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualchat2"
        component={IndividualChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualmap"
        component={IndividualMap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualsetting"
        component={IndividualSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualnotificaion"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualeditprofile"
        component={IndividualEditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualvacationalPatrol"
        component={VacationalPetrol}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualchangepass"
        component={IndividualChangePass}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualpromo"
        component={IndividualPromo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualwallet"
        component={IndividualWallet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualtransactionall"
        component={IndividualTransactionAll}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
function AllReport() {
  return (
    <Stack.Navigator initialRouteName="individualSecurityRep">
      <Stack.Screen
        name="individualSecurityRep"
        component={IndividualSecurityRep}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualsrepdetails"
        component={IndividualSRepDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
function AllRequest() {
  return (
    <Stack.Navigator initialRouteName="individualrrtabbar">
      <Stack.Screen
        name="individualRepDetails"
        component={IndividualRequest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualreqdetails"
        component={IndividualReqDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualrrtabbar"
        component={IndividualRTabbar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualchat"
        component={IndividualChat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
function AllSaved() {
  return (
    <Stack.Navigator initialRouteName="individualsaved">
      <Stack.Screen
        name="individualsaved"
        component={IndividualSaved}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualeditinfo"
        component={IndividualEditInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualaddinfo"
        component={IndividualAddInfo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
function AllWallet() {
  return (
    <Stack.Navigator initialRouteName="individualwallet">
      <Stack.Screen
        name="individualwallet"
        component={IndividualWallet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="individualtransactionall"
        component={IndividualTransactionAll}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
