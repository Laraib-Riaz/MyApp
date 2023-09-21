import * as React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import CompanySetting from '../../screens/Company/CompanySetting'
import Notifications from '../../screens/Common/Notifications'
import CompanyBottomBar from '../Navigations/CompanyBottomBar'

const CompanyDrawer = () => {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home1">
        <Drawer.Screen name="Home1" component={CompanyBottomBar} />
        <Drawer.Screen name="Setting" component={CompanySetting} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default CompanyDrawer
