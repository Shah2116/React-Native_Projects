import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

import { Formik } from 'formik'

import BouncyCheckbox from 'react-native-bouncy-checkbox'
BouncyCheckbox

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 charecter')
    .max(16, 'Should be max of 16 Charecter')
    .required('Length is required')
})


export default function App() {

  const [password, setPassword] = useState('')
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)

  const [upperCase, setUpperCase] = useState(true)
  const [lowerCase, setLowerCase] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbols, setSymbols] = useState(false)


  const generatePasswordString = (passwordLength: number) => {

    let charecterList = ''

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+'

    if (upperCase) {
      charecterList += upperCaseChars;
    }
    if (lowerCase) {
      charecterList += lowerCaseChars;
    }
    if (number) {
      charecterList += digitChars;
    }
    if (symbols) {
      charecterList += specialChars;
    }

    const passwordResult = createPassword(charecterList, passwordLength)
    setPassword(passwordResult)
    setIsPasswordGenerated(true)
  }
  const createPassword = (charecters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const charecterIndex = Math.round(Math.random() * charecters.length)
      result += charecters.charAt(charecterIndex)
    }
    return result
  }

  const resetPasswordState = () => {
    setPassword('')
    setLowerCase(false)
    setUpperCase(true)
    setNumber(false)
    setSymbols(false)
    setIsPasswordGenerated(false)
  }


  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer} >
        <View style={styles.formContainer} >
          <Text style={styles.title}>Password Generator</Text>

          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generatePasswordString(Number(values.passwordLength))
              //  we can write +values.passwordLength for converting string value into Number
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              isValid,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}> {errors.passwordLength}</Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder='Ex-8'
                    keyboardType='numeric'
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowerCase}
                    // onPress={() => setLowerCase(!lowerCase)}
                    fillColor='#b2bec3'

                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include UpperCase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor='#f1c40f'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Number</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={number}
                    onPress={() => setNumber(!number)}
                    fillColor='#c0392b'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include SpecialCharecter</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor='#2c3e50'
                  />
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                  >
                    <Text style={styles.secondaryBtnTxt}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        <View>
          {isPasswordGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
               <Text style={styles.subTitle}>Result:</Text>
               <Text style={styles.description}>Test</Text>
               <Text style={styles.generatedPassword}>{password}</Text>
            </View>
          ) : null}
         
        </View>
       
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000'
  },
});
