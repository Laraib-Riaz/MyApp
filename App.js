import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CompanyBottomBar from './src/components/Navigations/CompanyBottomBar'
import CompanyDrawer from './src/components/Drawer/CompanyDrawer'
import IndividualDrawer from './src/components/Drawer/IndividualDrawer'
import AuthStackNavigator from './src/components/Navigations/AuthStackNavigator'
import { useSelector } from 'react-redux'
import { USER_DETAILS } from './src/redux/reducer/Holder'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [1000])
  const user_id = useSelector((state) => state.user_details)

  return (
    <>
      {user_id == '' && <AuthStackNavigator />}
      {user_id == 'individual@gmail.com' && <IndividualDrawer />}
      {user_id == 'company@gmail.com' && <CompanyDrawer />}
    </>
  )
}

export default App

const styles = StyleSheet.create({})
