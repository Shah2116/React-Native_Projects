import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DottedContainer from '../DottedContainer'
import TermsAndConditions from '../TermsAndConditions'
import ImagePickers from '../ImagePickers'

const App = () => {
  return (
    <View  style={styles.container}>
      <Text>Hello</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    }
})