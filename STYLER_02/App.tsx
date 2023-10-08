import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View,  } from 'react-native'
import FlatCards from './components/FlatCards'
import Elevator from './components/Elevator'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'



const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

        <FlatCards />
        <Elevator />
        <FancyCard />
        <ActionCard />

      </ScrollView>
    </SafeAreaView>
  )
}



export default App
