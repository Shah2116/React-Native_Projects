
import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Switch,
} from 'react-native';
import CalculatorKey from './components/CalculatorKey';
import { ThemeContext } from './context/ThemeContext';
import { myColors } from './styles/colors';

function App(): JSX.Element {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch 
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          ios_backgroundColor="black"
        />
      <CalculatorKey />
      </SafeAreaView>
    </ThemeContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});

export default App;
