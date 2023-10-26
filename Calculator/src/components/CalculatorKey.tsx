import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CalculatorKey = () => {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState<Number | null>(null)


  const handleNUmberPress = (pressedValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + pressedValue)
    }
  }

  const handleOperation = (pressedValue: string) => {
    setOperation(pressedValue)
    setSecondNumber(firstNumber)
    setFirstNumber('')
  }

  const getResult = () => {
    switch (operation) {
      case "+":
        clear()
        setResult(parseInt(secondNumber) + parseInt(firstNumber))
        break;

      case "-":
        setResult(parseInt(secondNumber) - parseInt(firstNumber))
        break;

      case "*":
        setResult(parseInt(secondNumber) * parseInt(firstNumber))
        break;

      case "/":
        setResult(parseInt(firstNumber) / parseInt(secondNumber))
        break;

      default:
        setResult(0)
        break;
    }
  }

  const clear = () => {
    setFirstNumber('')
    setSecondNumber('')
    setOperation('')
    setResult(null)
  }


  return (
  <View style ={styles.viewButton}>
  <View style= {styles.row}>
    <Button title='C' onPress={clear}  />
    <Button title='+/-' onPress={() => handleOperation("+/-")} />
    <Button title='%' onPress={() => handleOperation("%")} />
    <Button title='÷' onPress={() => handleOperation("/")} />
  </View>

  <View style={styles.row}>
    <Button title='7' onPress={() => handleNUmberPress("7")} />
    <Button title='8' onPress={() => handleNUmberPress("8")} />
    <Button title='9' onPress={() => handleNUmberPress("9")} />
    <Button title='x' onPress={() => handleOperation("*")} />
  </View>
  <View style={styles.row}>
    <Button title='4' onPress={() => handleNUmberPress("4")} />
    <Button title='5' onPress={() => handleNUmberPress("5")} />
    <Button title='6' onPress={() => handleNUmberPress("6")} />
    <Button title='-' onPress={() => handleOperation("-")} />
  </View>
  <View style={styles.row}>
    <Button title='1' onPress={() => handleNUmberPress("1")} />
    <Button title='2' onPress={() => handleNUmberPress("2")} />
    <Button title='3' onPress={() => handleNUmberPress("3")} />
    <Button title='+' onPress={() => handleOperation("+")} />
  </View>
  <View style={styles.row}>
    <Button title='.' onPress={() => handleNUmberPress(".")} />
    <Button title='0' onPress={() => handleNUmberPress("0")} />
    <Button title='⌫' onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
    <Button title='=' onPress={() => handleOperation("=")} />
  </View>

  </View>
  )
}

const styles = StyleSheet.create({

  viewButton:{},
  row:{},

})

export default CalculatorKey