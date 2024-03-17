import {View, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './Navigation/BottomTabNavigation';

export type RootStackParamList = {
  
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;
