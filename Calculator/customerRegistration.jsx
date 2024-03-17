import React from "react";

// Customizable Area Start
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Platform,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from "react-native";

import { imgPlus, imgUpload } from "./assets";
import Scale from "../../../components/src/Scale";
// Customizable Area End

import EmailAccountRegistrationController, {
  Props
} from "./EmailAccountRegistrationController";

export default class EmailAccountRegistration extends EmailAccountRegistrationController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={this.isPlatformiOS() ? "padding" : undefined}
        style={styles.keyboardPadding}
      >
        <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
          <TouchableWithoutFeedback
            testID={"Background"}
            onPress={() => {
              this.hideKeyboard();
            }}
          >
            {/* Customizable Area Start */}
            <View style={styles.honestLogoContainer}>
              <Image
                    testID={"imgEnablePasswordField"}
                    style={styles.imgHonestLogo}
                    {...this.imgHonestLogoProps}
                  />
                  <Text style={styles.inputText}>
                {this.labelCustomerRegistration}
              </Text>
              <TouchableOpacity 
              testID="cameraBtn"
              style={styles.touchableProfile} 
              {...this.propsOpenCamera}
              >
                {this.state.profilePicPath? 
                  <Image style={styles.imageUpload} source={{uri:this.state.profilePicPath}} /> :
                <Image style={styles.imageUpload} source={imgUpload} /> 
                }
              </TouchableOpacity>
              <Text style={styles.inputText}>{this.labelName}</Text>
              <TextInput
                testID={"txtInputFirstName"}
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={this.labelFirstName}
                {...this.txtInputFirstNamePrpos} //Merge Engine::From BDS - {...this.testIDProps}
              />

              <Text style={styles.inputText}>{this.labelCompanyName}</Text>
              <TextInput
                testID={"txtInputCompanyName"}
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={this.companyName}
                {...this.txtInputCompanyNamePrpos} //Merge Engine::From BDS - {...this.testIDProps}
              />

              <Text style={styles.inputText}>{this.labelEmail}</Text>
              <TextInput
                testID={"txtInputEmail"}
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={this.labelEmail}
                {...this.txtInputEmailPrpos} //Merge Engine::From BDS - {...this.testIDProps}
              />
              
              <Text style={styles.inputText}>{this.labelPassword}</Text>
              <View style={styles.bgPasswordContainer}>
                <TextInput
                  testID={"txtInputPassword"}
                  style={styles.bgPasswordInput}
                  placeholder={this.labelPassword}
                  {...this.txtInputPasswordProps}
                />

                <TouchableOpacity
                  testID={"btnPasswordShowHide"}
                  style={styles.passwordShowHide}
                  {...this.btnPasswordShowHideProps}
                >
                  <Image
                    testID={"imgEnablePasswordField"}
                    style={styles.imgPasswordShowhide}
                    {...this.imgEnablePasswordFieldProps}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.inputText}>{this.labelRePassword}</Text>
              <View style={styles.bgPasswordContainer}>
                <TextInput
                  testID={"txtInputConfirmPassword"}
                  style={styles.bgPasswordInput}
                  placeholder={this.labelRePassword}
                  {...this.txtInputConfirmPasswordProps}
                />

                <TouchableOpacity
                  testID={"btnConfirmPasswordShowHide"}
                  style={styles.passwordShowHide}
                  {...this.btnConfirmPasswordShowHideProps}
                >
                  <Image
                    testID={"imgEnableRePasswordField"}
                    style={styles.imgPasswordShowhide}
                    {...this.imgEnableRePasswordFieldProps}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.inputText}>{this.labelPhoneNumber}</Text>
              <TextInput
                testID={"txtPhoneNumber"}
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={this.phone}
                {...this.txtPhoneNumberProps}
              />

              <Text style={styles.inputText}>{this.labelBillingAddress1}</Text>
              <TextInput
                testID={"txtPhoneNumber"}
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={this.address1}
              />

              <Text style={styles.inputText}>{this.labelBillingAddress2}</Text>
              <TextInput
                testID={"txtPhoneNumber"}
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={"Phone"}
                {...this.txtPhoneNumberProps}
              />

              <Text style={styles.inputText}>{this.labelZipCode}</Text>
              <TextInput
                testID={"txtPhoneNumber"}
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={"Phone"}
                {...this.txtPhoneNumberProps}
              />

              <Text style={styles.inputText}>Are you the direct point of contact?
              </Text>

              <Text style={styles.inputText}>{this.labelBillingAddress1}</Text>
              <TextInput
                testID={"txtPhoneNumber"}
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={"Phone"}
                {...this.txtPhoneNumberProps}
              />

              <Text style={styles.inputText}>{this.labelBillingAddress2}</Text>
              <TextInput
                testID={"txtPhoneNumber"}
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={"Phone"}
                {...this.txtPhoneNumberProps}
              />

              <Text style={styles.inputText}>{this.labelZipCode}</Text>
              <TextInput
                testID={"txtPhoneNumber"}
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={"Phone"}
                {...this.txtPhoneNumberProps}
              />

              <TouchableOpacity style={styles.viewPlusAndText}>
              <Image style={styles.imagePlus} source={imgPlus} />
              <Text style={styles.leagalText}>{this.labelAnotherBuilding}</Text>
              </TouchableOpacity>

              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  marginBottom: 30
                }}
              >
                <Text
                  testID={"btnLegalTermsAndCondition"}
                  style={styles.btnLegalTermsAndCondition}
                  {...this.btnLegalTermsAndConditionProps}
                >
                  {this.labelLegalTermCondition}
                </Text>
                <Text
                  testID={"btnLegalPrivacyPolicy"}
                  style={styles.btnLegalPrivacyPolicy}
                  {...this.btnLegalPrivacyPolicyProps}
                >
                  {this.labelLegalPrivacyPolicy}
                </Text>
              </View>

              <Button
                testID={"btnSignUp"}
                title={this.btnTextSignUp}
                color="#6200EE"
                {...this.btnSignUpProps}
              />
            </View>
            {/* Customizable Area End */}
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  async componentDidMount() {
    // Customizable Area Start
    this.getValidations();
    // Customizable Area End
  }
}

const styles = StyleSheet.create({
  // Customizable Area Start
  container: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    width: Platform.OS === "web" ? "75%" : "100%",
    maxWidth: 650,
    backgroundColor: "#fff",
  },
  bgInput: {
    flexDirection: "row",
    fontSize: 16,
    textAlign: "left",
    backgroundColor: "#00000000",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#2F599A",
    borderRadius: 8,
    includeFontPadding: true,
    padding: 10,
  },
  touchableProfile: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:15,
    width:'35%',
    alignSelf:'center',
  },
  inputWeb: {
    flex: 1,
    flexDirection: "row",
    marginTop: 24,
    fontSize: 18,
    padding: 10,
    borderBottomColor: "#767676",
    includeFontPadding: true,
    borderBottomWidth: 1
  },
  bgPasswordInput: {
    flex: 1,
    fontSize: 16,
    textAlign: "left",
    backgroundColor: "#00000000",
    minHeight: 40,
    includeFontPadding: true,
    paddingLeft: 0
  },
  passwordShowHide: {
    alignSelf: "center"
  },
  bgPasswordContainer: {
    flexDirection: "row",
    backgroundColor: "#00000000",
    marginTop: 10,
    borderWidth: Platform.OS === "web" ? 0 : 1,
    borderBottomWidth: 1,
    borderColor: "#2F599A",
    borderRadius: 8,
    paddingLeft: 5,
    paddingRight: 5,
    zIndex: -1
  },
  imgPasswordShowhide: Platform.OS === "web" ? { height: 30, width: 30 } : {height: Scale(24), width:Scale(24)},
  keyboardPadding: { flex: 1 },
  btnLegalTermsAndCondition: { color: "#6200EE" },
  btnLegalPrivacyPolicy: { color: "#6200EE", marginLeft: "auto" },
  leagalText: { 
    marginLeft:3,
    fontSize:16,
    fontWeight:'700',
    color:'#18478F',
  },
  imgHonestLogo: {
     height: Scale(95), 
     width: Scale(180),
     alignSelf:'center',
    marginTop:56,
    },
    imageUpload: {
      width: Scale(132),
      height: Scale(132),
      borderRadius:80,
      borderWidth:5,
      borderColor:'#18478F',
    },
  inputText:{
    marginTop:15,
    fontSize:14,
    fontWeight:'700',
  },
  imagePlus:{
    width:Scale(24),
    height:Scale(24),
    marginRight:3,
  },
  viewPlusAndText:{
    marginVertical:20,
    flexDirection:'row',
    justifyContent:'center',
  },
  honestLogoContainer: {
    marginHorizontal:20,
  },
  radio: {
    width:20,
    height:20,
    borderRadius:10,
    borderWidth: 2,
    color:"#18478f"
  }
  // Customizable Area End
});
