import React from "react";

// Customizable Area Start
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from "react-native";

import { imgCheckBox, imgCheckBoxBlank, imgPlus, imgUpload } from "./assets";
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
            <SafeAreaView style={styles.honestLogoContainer}>
              <Image
                testID={"imgEnablePasswordField"}
                style={styles.imgHonestLogo}
                {...this.imgHonestLogoProps}
              />
              <Text style={styles.customerRegistrationText}>
                {this.labelCustomerRegistration}
              </Text>
              <TouchableOpacity
                testID="cameraBtn"
                style={styles.touchableProfile}
                {...this.propsOpenCamera}
              >
                {this.state.profilePicPath ?
                  <Image style={styles.imageUpload} source={{ uri: this.state.profilePicPath }} /> :
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

              <Text style={styles.inputText}>{this.labelBillingAddressLine1}</Text>
              <TextInput
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={this.address1}
                {...this.txtBillingAddress1Props}
              />

              <Text style={styles.inputText}>{this.labelBillingAddress2}</Text>
              <TextInput
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={this.address2}
                {...this.txtBillingAddress2Props}
              />

              <Text style={styles.inputText}>{this.labelZipcode}</Text>
              <TextInput
                style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                placeholder={this.zipcode}
                {...this.txtZipcode}
              />

              <View>
                <Text style={styles.inputText}>{this.labelContact}
                </Text>

                <View style={styles.optionalContainer}>
                  <View style={styles.yesNoBtnWrapper}>
                    <TouchableOpacity
                      style={[
                        styles.button,
                        this.state.contactSelectedOption === 'yes' && styles.selectedButton,
                      ]}
                      onPress={() =>
                        this.setState({ contactSelectedOption: 'yes' })
                      }></TouchableOpacity>
                    <Text style={styles.buttonText}>{this.labelYes}</Text>
                  </View>

                  <View style={styles.yesNoBtnWrapper}>
                    <TouchableOpacity
                      style={[
                        styles.button,
                        this.state.contactSelectedOption === 'no' && styles.selectedButton,
                      ]}
                      onPress={() =>
                        this.setState({ contactSelectedOption: 'no' })
                      }></TouchableOpacity>
                    <Text style={styles.buttonText}>{this.labelNo}</Text>
                  </View>
                </View>

                {this.state.contactSelectedOption ? <View>
                  <Text style={styles.inputText}>{this.labelBillingAddressLine1}</Text>
                  <TextInput
                    style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                    placeholder={this.address1}

                  />

                  <Text style={styles.inputText}>{this.labelBillingAddress2}</Text>
                  <TextInput
                    style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                    placeholder={this.address2}

                  />

                  <Text style={styles.inputText}>{this.labelZipcode}</Text>
                  <TextInput
                    style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                    placeholder={this.zipcode}

                  />

                  {/* <TouchableOpacity 
                   style={styles.imageUploadButton} 
                   {...this.propsOpenGallery}
                   >
                    {selectedImage ? (
                      <Image source={{ uri: selectedImage.uri }} style={styles.selectedImage} />
                    ) : (
                      <Text style={styles.uploadText}>Upload Image</Text>
                    )}
                  </TouchableOpacity> */}
                </View>
                  
              </View>

              <Text style={styles.inputText}>{this.labelTax}
              </Text>
              <View style={styles.optionalContainer}>
                <View style={styles.yesNoBtnWrapper}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      this.state.taxExemptSelected === 'yes' && styles.selectedButton,
                    ]}
                    onPress={() =>
                      this.setState({ taxExemptSelected: 'yes' })
                    }></TouchableOpacity>
                  <Text style={styles.buttonText}>{this.labelYes}</Text>
                </View>

                <View style={styles.yesNoBtnWrapper}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      this.state.taxExemptSelected === 'no' && styles.selectedButton,
                    ]}
                    onPress={() =>
                      this.setState({ taxExemptSelected: 'no' })
                    }></TouchableOpacity>
                  <Text style={styles.buttonText}>{this.labelNo}</Text>
                </View>
              </View>
              <View>
              <Text style={styles.inputText}>{this.labelBillingAddress2}</Text>
              <Text style={styles.inputText}>{this.labelServiceAddressLine1}</Text>
                  <TextInput
                    style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                    placeholder={this.address1}

                  />

                  <Text style={styles.inputText}>{this.labelServiceAddressLine2}</Text>
                  <TextInput
                    style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                    placeholder={this.address2}

                  />

                  <Text style={styles.inputText}>{this.labelZipcode}</Text>
                  <TextInput
                    style={Platform.OS === "web" ? styles.inputWeb : styles.bgInput}
                    placeholder={this.zipcode}

                  />
              </View>

              <TouchableOpacity style={styles.viewPlusAndText}>
                <Image style={styles.imagePlus} source={imgPlus} />
                <Text style={styles.leagalText}>{this.labelAnotherBuilding}</Text>
              </TouchableOpacity>

              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={styles.viewCheckBox}
              >
                <TouchableOpacity
                  testID="checkBoxSelect"
                  {...this.propsCheckBoxSelect} //Merge Engine::From BDS - {...this.testIDProps}
                >
                  <Image
                    source={
                      this.state.isSelected ? imgCheckBox : imgCheckBoxBlank
                    }
                    style={styles.checkbox}
                  />
                </TouchableOpacity>
                <Text style={styles.inputTextCheckBox}>
                  {this.labelReadAndAgree}
                </Text>
                <TouchableOpacity
                  {...this.propsSelectTermAndCondition}
                >
                  <Text style={styles.btnLegalPrivacyPolicy}>{this.labelLegalTermCondition}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => { }} style={styles.signUpBtn}>
                <Text style={styles.textlable_SignUp}>{this.labelHeader}</Text>
              </TouchableOpacity>

              <Text style={styles.or_test}>{this.labelOr}</Text>
              <View style={styles.signUpWrapper}>
                <Text style={styles.newMember_text}>{this.textHaveAccount}</Text>
                <TouchableOpacity onPress={() => { }}>
                  <Text style={styles.login_btn}>{this.textLogin}</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
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
  imageUploadButton: {
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
  uploadText: {
     alignSelf: "center",
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
  imgPasswordShowhide: Platform.OS === "web" ? { height: 30, width: 30 } : { height: Scale(24), width: Scale(24) },
  keyboardPadding: { flex: 1 },
  btnLegalTermsAndCondition: { color: "#6200EE" },
  btnLegalPrivacyPolicy: { color: "#6200EE", marginLeft: "auto" },
  leagalText: {
    marginLeft: 3,
    fontSize: 16,
    fontWeight: '700',
    color: '#18478F',
  },
  imgHonestLogo: {
    height: Scale(95),
    width: Scale(180),
    alignSelf: 'center',
    marginTop: Scale(56),
  },
  customerRegistrationText: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '700',
  },
  touchableProfile: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: '35%',
    alignSelf: 'center',
  },
  imageUpload: {
    width: Scale(132),
    height: Scale(132),
    borderRadius: 80,
    borderWidth: 5,
    borderColor: '#18478F',
  },
  inputText: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: '700',
  },
  imagePlus: {
    width: Scale(24),
    height: Scale(24),
    marginRight: 3,
  },
  viewPlusAndText: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  honestLogoContainer: {
    margin: 20,
  },
  optionalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  yesNoBtnWrapper: {
    flexDirection: 'row',
  },
  button: {
    height: 20,
    width: 20,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Scale(5),
    marginRight: Scale(10),
  },
  selectedButton: {
    borderColor: '#18478F',
    borderWidth: 6,
  },
  buttonText: {
    fontSize: 16,
    alignSelf: 'center',
  },
  formContainer: {
    marginTop: 20,
  },
  viewCheckBox: {
    flexDirection: "row",
    marginTop: Scale(30),
    marginBottom: Scale(10)
  },
  inputTextViewCheckBox: {
    fontSize: Scale(14),
    fontWeight: "700",
  },
  checkbox: {
    width: Scale(22),
    height: Scale(22),
  },
  inputTextCheckBox: {
    fontSize: 12,
    fontWeight: "500",
    color: "#0F172A",
    marginLeft: 10,
  },
  signUpBtn: {
    justifyContent: 'center',
    backgroundColor: '#18478F',
    width: '100%',
    height: 56,
    borderRadius: 8,
  },
  textlable_SignUp: {
    color: '#fff',
    alignSelf: 'center',
  },
  or_test: {
    color: '#000000',
    fontSize: 12,
    marginVertical: Scale(12),
    alignSelf: 'center',
  },
  signUpWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  newMember_text: {
    color: '#000000',
  },
  login_btn: {
    color: '#000000',
    fontWeight: '600',
  },
  // Customizable Area End
});
