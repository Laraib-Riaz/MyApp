import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {scale} from 'react-native-size-matters'
import CompanyHome from '../../screens/Company/CompanyHome'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CompanySecurityRep from '../../screens/Company/CompanySecurityRep'
import CompanyWallet from '../../screens/Company/CompanyWallet'
import CompanyRequest from '../../screens/Company/CompanyRequests'
import CompanySaved from '../../screens/Company/CompanySaved'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import StandingSeq from '../../screens/Company/StandingSec'
import PatrolServices from '../../screens/Company/PatrolServices'
import Setting from '../../screens/Common/Settings'
import Notifications from '../../screens/Common/Notifications'
import CompanyReqDetails from '../../screens/Company/CompanyReqDetails'
import CompanySRepDetails from '../../screens/Company/CompanySRepDetails'
import TransactionAll from '../../screens/Common/TransactionAll'
import CompanyMap from '../../screens/Company/CompanyMap'
import CompanyEditInfo from '../../screens/Company/CompanyEditInfo'
import CompanyAddInfo from '../../screens/Company/CompanyAddInfo'
import ChangePass from '../../screens/Authentication/ChangePass'
import CompanyEditProfile from '../../screens/Company/CompanyEditProfile'
import {NavigationContainer} from '@react-navigation/native'
import CompanyRTabbar from '../../screens/Company/CompanyRTabbar'
import Chat from '../../screens/Common/Chat'
import CompanyPromo from '../../screens/Company/CompanyPromo'
import CompanySignup from '../../screens/Company/CompanySignup'
import CompanyChangePass from '../../screens/Company/CompanyChangePass'
import CompanySetting from '../../screens/Company/CompanySetting'

const Tab = createBottomTabNavigator()

const CompanyBottomBar = (props) => {
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
          tabBarIcon: ({color}) => (
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
          tabBarIcon: ({color}) => (
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
          tabBarIcon: ({color}) => (
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
          tabBarIcon: ({color}) => (
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
          tabBarIcon: ({color}) => (
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

const styles = StyleSheet.create({})
export default CompanyBottomBar

const Stack = createNativeStackNavigator()

function AllHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="companyhome"
        component={CompanyHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companymap"
        component={CompanyMap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companypromo"
        component={CompanyPromo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companysetting"
        component={CompanySetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companynotificaion"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companyeditprofile"
        component={CompanyEditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companypatrolservice"
        component={PatrolServices}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="companychangepass"
        component={CompanyChangePass}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companystandseq"
        component={StandingSeq}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companysignup"
        component={CompanySignup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companyrequest"
        component={CompanyRequest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companyreqdetails"
        component={CompanyReqDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companyrtabbar"
        component={CompanyRTabbar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companychat"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
function AllReport() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="companysecurityrep"
        component={CompanySecurityRep}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companysrepsetails"
        component={CompanySRepDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
function AllRequest() {
  return (
    <Stack.Navigator initialRouteName="companyrtabbar">
      <Stack.Screen
        name="companyrequest"
        component={CompanyRequest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companyreqdetails"
        component={CompanyReqDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companyrtabbar"
        component={CompanyRTabbar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companychat"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
function AllSaved() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="companysaved"
        component={CompanySaved}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companyeditinfo"
        component={CompanyEditInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="companyaddinfo"
        component={CompanyAddInfo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
function AllWallet() {
  return (
    <Stack.Navigator initialRouteName="companywallet">
      <Stack.Screen
        name="companywallet"
        component={CompanyWallet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="transactionall"
        component={TransactionAll}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
