import * as React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import Notifications from '../../screens/Common/Notifications'
import Setting from '../../screens/Common/Settings'
import IndividualBottomBar from '../Navigations/IndividualBottomBar'

const IndividualDrawer = () => {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={IndividualBottomBar} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default IndividualDrawer
