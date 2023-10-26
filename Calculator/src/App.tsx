
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CalculatorKey from './components/CalculatorKey';



function App(): JSX.Element {
  



  return (
    <SafeAreaView>
     <CalculatorKey />
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
