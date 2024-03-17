import { Text, View , StyleSheet} from 'react-native'
import React, { Component } from 'react'


import { RootStackParamList } from '../Navigation/BottomTabNavigation'


const Profile =()=> {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    )
  }


export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})