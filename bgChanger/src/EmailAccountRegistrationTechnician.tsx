       import {
        StyleSheet,
        Text,
        View,
        TextInput,
        ScrollView,
        Platform,
        Image,
        TouchableOpacity,
        TouchableWithoutFeedback,
        KeyboardAvoidingView,
        FlatList,
        Modal,
        SafeAreaView,
      } from "react-native"; 
import React from 'react'

const EmailAccountRegistrationTechnician = () => {
  return (
    <View style={styles.viewContainer}>
    <Image
      testID={"imgEnablePasswordField"}
      style={styles.imgHonestLogo}
    //   {...this.imgHonestLogoProps}
    />
    <Text style={styles.inputText}>
      {/* {this.labelTechnicianRegistration} */}
    </Text>
    <TouchableOpacity 
    testID="cameraBtn"
    style={styles.touchableProfile} 
    // {...this.propsOpenCamera}
    >
      {this.state.profilePicPath? 
        <Image style={styles.imageUpload} source={{uri:this.state.profilePicPath}} /> :
      <Image style={styles.imageUpload} source={imgUpload} /> 
      }
    </TouchableOpacity>

    <CustomInput 
    testID={"txtInputFirstName"}
    label={this.labelName}
    error={this.state.errorName}
    placeholder={this.labelFirstName}
    {...this.txtInputFirstNamePrpos} //Merge Engine::From BDS - {...this.testIDProps}
    />
    <CustomInput 
    testID={"txtInputBlankTextFIeld"}
    label={this.labelLocalTheyServe}
    error={this.state.errorService}
    placeholder={this.placeHolderBlankTextField}
    {...this.txtInputServeAreaNamePrpos} //Merge Engine::From BDS - {...this.testIDProps}
    />
    <CustomInput 
    testID={"txtInputEmail"}
    label={this.labelEmail}
    error={this.state.errorEmail}
    placeholder={this.labelEmail}
    {...this.txtInputEmailPrpos} //Merge Engine::From BDS - {...this.testIDProps}
    />

    <Text style={styles.inputText}>{this.labelUpdatePassword}</Text>
    <View style={[styles.bgPasswordContainer
    ,{
      borderColor: this.state.errorUpdatePassword ? "red" : "#2F599A",
    }
    ]}>
      <TextInput
        // testID={"txtInputPassword"}
        style={styles.bgPasswordInput}
        // placeholder={this.labelPassword}
        // {...this.txtInputPasswordProps} //Merge Engine::From BDS - {...this.testIDProps}
      />

      <TouchableOpacity
        // testID={"btnPasswordShowHide"}
        style={styles.passwordShowHide}
        // {...this.btnPasswordShowHideProps} //Merge Engine::From BDS - {...this.testIDProps}
      >
        <Image
        //   testID={"imgEnablePasswordField"}
          style={styles.imgPasswordShowhide}
        //   {...this.imgEnablePasswordFieldProps} //Merge Engine::From BDS - {...this.testIDProps}
        />
      </TouchableOpacity>
    </View>
{/* {this.state.errorUpdatePassword ?(
    <Text
    style={styles.errorStyling}
>
{this.state.errorUpdatePassword}
</Text>):null
} */}

    {/* <Text>{this.state.passwordHelperText}</Text> */}
    <Text style={styles.inputText}>{this.labelRePassword}</Text>
    <View style={[styles.bgPasswordContainer
    ,{
      borderColor: this.state.errorReTypePassword ? "red" : "#2F599A",
    }
    ]}>
      <TextInput
        testID={"txtInputConfirmPassword"}
        style={styles.bgPasswordInput}
        // placeholder={this.labelRePassword}
        // {...this.txtInputConfirmPasswordProps} //Merge Engine::From BDS - {...this.testIDProps}
      />

      <TouchableOpacity
        testID={"btnConfirmPasswordShowHide"}
        style={styles.passwordShowHide}
        // {...this.btnConfirmPasswordShowHideProps} //Merge Engine::From BDS - {...this.testIDProps}
      >
        <Image
          testID={"imgEnableRePasswordField"}
          style={styles.imgPasswordShowhide}
        //   {...this.imgEnableRePasswordFieldProps} //Merge Engine::From BDS - {...this.testIDProps}
        />
      </TouchableOpacity>
    </View>
{/* {this.state.errorReTypePassword ?(
    <Text
    style={styles.errorStyling}
>
{this.state.errorReTypePassword}
</Text>):null */}
}
    <CustomInput 
    testID={"txtPhoneNumber"}
    label={this.labelPhoneNumber}
    error={this.state.errorPhoneNumber}
    placeholder={this.phone}
    maxLength={12}
    {...this.txtPhoneNumberProps} //Merge Engine::From BDS - {...this.testIDProps}
    />
    <CustomInput 
    testID={"txtYearTrade"}
    label={this.labelYearTrade}
    error={this.state.errorYearTrade}
    placeholder={this.year}
    {...this.txtYearTradeProps} //Merge Engine::From BDS - {...this.testIDProps}
    />

    <Text style={styles.inputText}>
      {this.labelTechnicianEquipments} 
    </Text>

    <Text style={styles.inputTextViewCheckBox}>
      {this.labelTechnicianComercial}
    </Text>
    <View>
    {this.renderCommercialData()}
    {this.state.errorCommercial ? <Text
          style={styles.errorStyling}
>
{this.state.errorCommercial}
</Text>: null}
    </View>

    <Text style={styles.inputTextViewCheckBox}>
      {this.labelTechnicianResidential}
    </Text>
    <View>
    {this.renderResidentialData()}
    </View>
    <Text
          style={styles.errorStyling}
>
{this.state.errorResidential}
</Text>

    <Text style={styles.inputTextViewCheckBox}>
      {this.labelTechnicianDumbwaiter}
    </Text>
    <View>
    {this.renderDumbwaiterData()}
    </View>
    <Text
          style={styles.errorStyling}
>
{this.state.errorDumbwaiter}
</Text>

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
      testID="btnLegalTermsAndCondition"
      {...this.propsSelectTermAndCondition}
      >
        <Text style={styles.btnLegalPrivacyPolicy}>{this.labelLegalTermCondition}</Text>
      </TouchableOpacity>
    </View>
    {this.state.errorTermAndCondition ?(
        <Text
style={styles.errorStyling}
>
{this.state.errorTermAndCondition}
</Text>):null
}
<Modal visible={this.state.isVisibleModal} 
transparent={true}
animationType="slide"
{...this.propsSelectRequest}
style={styles.modal}>
<SafeAreaView style={styles.modalBackground}>
  <View style={styles.viewTermAndConditionAndImage}>
    <Text style={styles.textTermAndCondition}>{this.labelTermAndCondition}</Text>
    <TouchableOpacity
    {...this.propsSelectSetState}
    >
    <Image
          source={imgCross}
          style={styles.imageCross}
        />
    </TouchableOpacity>
  </View>
  <View style={styles.viewContentTermAndCondition}>
<Text style={styles.inputTextTermAndCondiiton}>{this.labelTermAndCondition}</Text>
    <Text style={styles.inputTextTerm}>{this.textTermAndCondition}</Text>
    <Text style={styles.inputTextTerm}>{this.textReferred}</Text>
    <Text style={styles.inputTextTerm}>{this.textOrder}</Text>

    <TouchableOpacity
      {...this.propsCheckBoxNewSelect}
      style={styles.touchableCheckBox}
    >
      <Image
        source={ this.state?.isSelected ? imgCheckBox : imgCheckBoxBlank }
        style={styles.checkbox}
      />
      <Text style={styles.inputTextCheckBoxTerm}>
        {this.textReadAndAgree}
      </Text>
    </TouchableOpacity>
    <View style={styles.viewCancelAndAgree}>
    <TouchableOpacity style={styles.cancel}
    {...this.propsSetStateModal}
    >
      <Text style={styles.inputTextCancel}>{this.btnTextCancel}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.validate}
    {...this.propsSetStateModalValidate}
    disabled={!this.state.isSelected}
    >
      <Text style={styles.inputTextValidate}>{this.btnTextAgree}</Text>
    </TouchableOpacity>
    </View>
    </View>
</SafeAreaView>
</Modal>

    <TouchableOpacity
    testID="btnSignUp"
    style={styles.Signup}
    {...this.propsSignUp}
    >
      <Text style={styles.inputTextSignup}>{this.btnTextSignUp}</Text>
    </TouchableOpacity>
    <Text style={styles.inputTextOr}>{this.labelOr}</Text>
    <View style={styles.viewLogin}>
      <Text style={styles.inputTextAccount}>{this.textHaveAccount}</Text>
      <TouchableOpacity 
      {...this.propsNavigateToScreen}
      >
        <Text style={styles.inputTextLogin}>{this.textLogin}</Text>
      </TouchableOpacity>
    </View>
  </View>
  {/* Customizable Area End */}
</TouchableWithoutFeedback>
</ScrollView>
</KeyboardAvoidingView>
// Customizable Area End
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
bgPasswordInput: {
flex: 1,
fontSize: 16,
textAlign: "left",
backgroundColor: "#00000000",
minHeight: 40,
includeFontPadding: true,
paddingLeft: 0,
},
passwordShowHide: {
alignSelf: "center",
},
bgPasswordContainer: {
flexDirection: "row",
backgroundColor: "#00000000",
marginTop: 5,
borderWidth: Platform.OS === "web" ? 0 : 1,
borderBottomWidth: 1,
borderRadius: 8,
paddingLeft: 5,
paddingRight: 5,
zIndex: -1,
},
imgPasswordShowhide: Platform.OS === "web" ? { height: 30, width: 30 } : { height: 24, width:24 },
keyboardPadding: { flex: 1 },
btnLegalTermsAndCondition: { 
color: "#07152A", 
borderBottomWidth:1,
fontSize: 12,
fontWeight: "700",
marginLeft: 5,
},
btnLegalPrivacyPolicy: { color: "#07152A", fontSize:12, fontWeight:'700', borderBottomWidth:1, marginLeft:5 },
imgHonestLogo: {
height: Scale(95),
width: Scale(180),
alignSelf: "center",
marginTop:15,
},
inputText: {
marginTop: 15,
fontSize: Scale(14),
fontWeight: "700",
},
inputTextViewCheckBox: {
fontSize: Scale(14),
fontWeight: "700",
},
Signup: {
width: "100%",
height: Scale(56),
alignSelf: "center",
borderRadius: 8,
backgroundColor: "#18478F",
justifyContent: "center",
alignItems: "center",
},
inputTextCheckBox: {
fontSize: 12,
fontWeight: "500",
color: "#0F172A",
marginLeft: 10,
},
touchableCheckBox: { flexDirection: "row", marginTop: 15, justifyContent:'center' },
touchableProfile: {
justifyContent: "center",
alignItems: "center",
marginTop:15,
width:'35%',
alignSelf:'center',
},
imageUpload: {
width: Scale(132),
height: Scale(132),
borderRadius:80,
borderWidth:5,
borderColor:'#18478F',
},
viewCheckBox: {
flexDirection: "row",
marginTop: 30,
marginBottom:10
},
viewContainer: { marginHorizontal: 20 },
image: {
width: Scale(132),
height: Scale(132),
borderRadius:20,
},
checkbox:{
width:Scale(22),
height:Scale(22),
},
inputTextSignup:{
fontSize:16,
fontWeight:'600',
color:"#ffffff",
},
inputTextLogin:{
fontSize: 12,
fontWeight: "700",
color: "#0F172A",
marginLeft: 5,
borderBottomWidth:1,
marginBottom:20
},
inputTextAccount:{
fontSize: 12,
fontWeight: "500",
color: "#0F172A",
},
inputTextOr:{
fontSize:12,
fontWeight:'700',
alignSelf:'center',
marginVertical:10,
},
viewLogin:{
flexDirection:'row',
alignSelf:'center',
},
modal: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
modalBackground: {
flex: 1,
backgroundColor: '#FFFFFF', 
},
inputTextTermAndCondiiton:{
marginTop:20,
fontSize:24,
fontWeight:'700',
color:"#0F172A",
},
cancel: {
width: "100%",
height: Scale(56),
justifyContent: "center",
alignItems: "center",
},
inputTextCancel:{
fontSize:16,
fontWeight:'700',
color:"#0F172A",
},
validate: {
width: "100%",
height: Scale(56),
borderRadius: 8,
backgroundColor: "#18478F",
justifyContent: "center",
alignItems: "center",
marginTop:10
},
inputTextValidate:{
fontSize:16,
fontWeight:'600',
color:"#ffffff",
},
inputTextTerm: {
marginTop: 20,
fontSize: 16,
fontWeight: "400",
},
inputTextCheckBoxTerm: {
fontSize: 16,
fontWeight: "500",
color: "#0F172A",
marginHorizontal:15,
},
imageCross:{
height:Scale(24),
width:Scale(24), 
},
viewTermAndConditionAndImage:{
flexDirection:"row",
borderBottomWidth:1,
borderBottomColor:'#E2E8F0',
paddingHorizontal:15,
paddingVertical:20,
},
viewContentTermAndCondition:{
paddingHorizontal:25,
flex:1,
},
textTermAndCondition:{
flex:1,
fontSize:14,
fontWeight:"700",
textAlign:'center',
},
viewCancelAndAgree:{flex:1,justifyContent:'flex-end',paddingBottom:10,},
errorStyling:{
color: COLORS.red,
fontSize: Scale(12),
fontWeight: "400",
},
// Customizable Area End
});

export default EmailAccountRegistrationTechnician
