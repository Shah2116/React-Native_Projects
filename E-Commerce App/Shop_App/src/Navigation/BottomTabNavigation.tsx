import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';

export type RootStackParamList = {
    Home: undefined,
    Profile: undefined,
    Search: undefined,
}

const BottomTab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigation = () => {
   
    const screenOptions ={
    
    }

  return (
   <BottomTab.Navigator screenOptions={screenOptions}>
    <BottomTab.Screen name='Home' component={Home} />
    <BottomTab.Screen name='Profile' component={Profile} />
    <BottomTab.Screen name='Search' component={Search}/>
   </BottomTab.Navigator>
  )
}

export default BottomTabNavigation