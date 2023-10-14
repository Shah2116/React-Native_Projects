

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
 
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  Pressable,
} from 'react-native';

import dice1 from '../assests/dice1.png'
import dice2 from '../assests/dice2.png'
import dice3 from '../assests/dice3.png'
import dice4 from '../assests/dice4.png'
import dice5 from '../assests/dice5.png'
import dice6 from '../assests/dice6.png'

type DiceProps = PropsWithChildren<{
  ImageUrl:ImageSourcePropType
}>

// const MyImageComponent = () => {
//   const myImage = require('./path/to/your/image.jpg'); 
  
const Dice =({ImageUrl}:DiceProps): JSX.Element => {
  // image parsing and destructuring
return(
  <View>
  <Image  style={styles.diceImage} source={ImageUrl} />
  </View>
)
}

function App(): JSX.Element {
  
const [diceImage, setDiceImage] = useState<ImageSourcePropType>(dice1)
  
const diceRollOnTap =() =>{
  let diceNumber =  Math.floor(Math.random()* 6) +1;

  switch (diceNumber) {
    case 1:
      setDiceImage(dice1)
      break;
      case 2:
      setDiceImage(dice2)
      break;
      case 3:
      setDiceImage(dice3)
      break;
      case 4:
      setDiceImage(dice4)
      break;
      case 5:
      setDiceImage(dice5)
      break;
      case 6:
      setDiceImage(dice6)
      break;
  
    default:
      setDiceImage(dice1)
      break;
  }

}
  return (
    <View style={styles.container}>
      <Dice ImageUrl={diceImage} />
      <Pressable onPress={diceRollOnTap}>
        <Text style = {styles.rollDiceBtnTxt}>Roll The Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#485460'
  },

diceImage:{
  height:180,
  width:180,
},
rollDiceBtnTxt:{
  marginHorizontal:10,
  marginVertical:40,
  fontSize:22,
  borderWidth:2,
  borderRadius:8,
  borderColor:'#d2dae2',
  paddingHorizontal:20,
  paddingVertical:12,


}
 
});

export default App;
