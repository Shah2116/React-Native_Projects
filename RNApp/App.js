import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/Navigation/AppNavigation'
import { FavoriteContextProvider } from './src/store/favorites-context'


const App = () => {
  return (
    <FavoriteContextProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </FavoriteContextProvider>


  )
}

export default App

const styles = StyleSheet.create({})

