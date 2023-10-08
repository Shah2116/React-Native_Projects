import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength:Yup.number().min(4, 'Should be min of 4 charecter')
  .max(16, 'Should be min of 16 Charecter')
  .required('Length is required')
})



export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
