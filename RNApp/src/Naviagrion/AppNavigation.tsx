import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../scressns/Home';
import Profile from '../scressns/Profile';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default AppNavigation