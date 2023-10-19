

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

import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
  <SafeAreaView>
    <StatusBar 
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
