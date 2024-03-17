import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ResetPassword = () => {
  return (
    <SafeAreaView style={styles.viewContainer}>
    <Image source={require('./assests/pic.png')} style={styles.imgHonestLogo} />
  

       <Text style={styles.textlabel_Clientlogin}>Reset Password</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.textLable}>Enter email</Text>
            <TextInput style={styles.inputText} placeholder="Enter email" />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.textlable_Login}>Next</Text>
          </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
     viewContainer: {
      marginHorizontal:24,
      flex: 1,
    },
    imgHonestLogo: {
      width: 180,
      height: 95,
      alignSelf: 'center',
      marginTop: 101,
    },
    textlabel_Clientlogin: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 32,
        marginBottom: 8,
        color: '#000000',
      },
      inputContainer: {
        marginTop: 16,
      },
      textLable: {
        height: 22,
        fontSize: 14,
        fontWeight: '700',
        color: '#000000',
      },
      inputText: {
        width: 327,
        height: 56,
        borderRadius: 8,
        borderColor: '#2F599A',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
      },
      loginBtn: {
        marginTop: 330,
        justifyContent: 'center',
        backgroundColor: '#18478F',
        width: 327,
        height: 56,
        borderRadius: 8,
      },
      textlable_Login: {
        color: '#fff',
        alignSelf: 'center',
      },
})