

import React, { useState } from 'react';
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
  const [isCross, setIsCross] = useState<boolean>(false)
  const [gameWinner, setGameWinner] = useState<string>('')
  const [gameState, setGameState] = useState(new Array(9).fill("empty", 0, 9))

  const gameReload =() =>{
    setIsCross(false)
    setGameWinner('')
    setGameState(new Array(9).fill("empty", 0, 9))
  }

  const checkIsWinner =()=>{
    // checking winner of the game 
    if(
      gameState[0] === gameState[1] &&
      gameState[1] === gameState[2] &&
      gameState[2] !== "empty"
    ){
    setGameWinner(`${gameState[0]} won the game !`)
    }else if(
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5] &&
      gameState[5] !== "empty"
    ){
    setGameWinner(`${gameState[3]} won the game !`)
    }else if(
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8] &&
      gameState[8] !== "empty"      
    ){
       setGameWinner(`${gameState[6]} won the game !`)
    }else if(
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6] &&
      gameState[6] !== "empty"
    ){
     setGameWinner(`${gameState[0]} won the game`)
    }else if(
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7] &&
      gameState[7] !== "empty"
    ){
   setGameWinner(`${gameState[1]} won the game !`)
    }else if(
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8] &&
      gameState[8] !== "empty"
    ){
      setGameWinner(`${gameState[2]} won the game !`)
    }else if (
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8] &&
      gameState[8] !== "empty"
    ){
      setGameWinner(`${gameState[0]} won the game !`)
    }else if(
      gameState[2] === gameState[4] && 
      gameState[4] === gameState[6] &&
      gameState[6] !== "empty"
    ){
      setGameWinner(`${gameState[2]} won the game !`)
    }
       
  }

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
