import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const EmailAccountLoginTechnician = () => {
  return (
    <SafeAreaView style={styles.viewContainer}>
      <Image source={require('./assests/pic.png')} style={styles.imgHonestLogo} />


        <Text style={styles.textlabel_Clientlogin}>Customer Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.textLable}>Email</Text>
          <TextInput style={styles.inputText} placeholder="Enter email" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textLable}>Password</Text>
          <TextInput style={styles.inputText}
          secureTextEntry
           placeholder="Enter password" />
        </View>
        <TouchableOpacity>
        <Text style={styles.textbutton_ForgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.textlable_Login}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.or_test}>or</Text>
        <View style={styles.signUpWrapper}>
          <Text style={styles.newMember_text}>New Member</Text>
          <TouchableOpacity>
            <Text style={styles.signUp_btn}> ? sign up</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default EmailAccountLoginTechnician;

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
  textbutton_ForgotPassword: {
    alignSelf: 'flex-end',
    color: '#000000',
    marginRight: 20,
    marginTop: 8,
  },
  loginBtn: {
    marginTop: 152,
    justifyContent: 'center',
    backgroundColor: '#18478F',
    width: 327,
    height: 56,
    borderRadius: 8,
  },
  textlable_Login: {
    color: '#ffffffff',
    alignSelf: 'center',
  },
  or_test: {
    color: '#000000',
    fontSize: 12,
    marginVertical: 12,
    marginRight: 45,
    alignSelf: 'center',
  },
  signUpWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginRight: 45,
  },
  newMember_text: {
    color: '#000000',
  },
  signUp_btn: {
    color: '#000000',
    fontWeight: '600',
  },
});
<Button
testID={"btnEmailLogIn"} //Merge Engine::From BDS
title={this.state.btnTxtLogin} //UI Engine::From Sketch
color={'#6200EE'}
onPress={() => {
  this.doEmailLogIn();
}}
/>