import { Text, View, StyleSheet} from 'react-native'
import React from 'react'


import { RootStackParamList } from '../Navigation/BottomTabNavigation'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
  
type propsType = BottomTabBarProps

const Home =(props:propsType) => {
 const {navigation} = props;

 const goToScreen =() =>{
    navigation.navigate('');
 }

    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})