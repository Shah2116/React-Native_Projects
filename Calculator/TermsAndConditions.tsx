// import React from 'react';
// import {View, Text, StyleSheet, ScrollView, Dimensions, Button} from 'react-native';

// const TermsAndConditions = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View>
//         <Text style={styles.headingText}>Terms And Conditions</Text>
//       </View>

//       <View style={styles.textView}>
//         <Text style={styles.text}>
//           {`Terms and conditions outline what users 
// can and cannot do with your website,
// products, and services. They lay out the 
// rules to protect you in case of misuse and 
// enable you to take action if it becomes 
// necessary.\n\n`}
//           {`It’s also referred to by other names such as 
// terms of service (ToS) and terms of use 
// (ToU). Even though they have different 
// names, in fact – there is no difference.\n\n `}
//           {` In order to use your website, products, or 
// services, your customers usually must 
// agree to abide by your terms and 
// conditions first.`}
//         </Text>
//       </View>

//       <View>
//         <Text>{`I have read and agree to these Terms
//  and Conditions`}</Text>
//       </View>
//       <View> 
//         <Text style={{alignSelf:'center',marginVertical:25}}>Cancel</Text>
//       <Button title='Accept' />
//       </View>
      
//     </ScrollView>
//   );
// };

// const {height, width} = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column',
//      gap:20,
//      padding: 16,
//   },
//   headingText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     alignSelf: 'flex-start',
//   },
//   textView: {
//     width: width , // Adjust width to leave some margin on both sides
//     flex: 1,
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 24,
//   },
// });

// export default TermsAndConditions;


// container: {
//   flex: 1,
//   padding: 16,
//   marginLeft: "auto",
//   marginRight: "auto",
//   width: Platform.OS === "web" ? "75%" : "100%",
//   maxWidth: 650,
//   backgroundColor: "#ffffffff",
// },


// {this.isPlatformWeb() ? (
//   <Text
//     testID="labelTitle" //Merge Engine::From BDS
//     style={styles.title} //UI Engine::From Sketch
//   >
//     {configJSON.labelTitleText}
//   </Text> //UI Engine::From Sketch
// ) : null}



import React from "react";

// Customizable Area Start
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import  MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MergeEngineUtilities from "../../utilities/src/MergeEngineUtilities";
import Scale from "../../../components/src/Scale";
import { imgCheckBox, imgCheckBoxBlank } from "./assets";

//@ts-ignore

// Merge Engine - import assets - Start
// Merge Engine - import assets - End

// Merge Engine - Artboard Dimension  - Start
let artBoardHeightOrg = 667;
let artBoardWidthOrg = 375;
// Merge Engine - Artboard Dimension  - End
// Customizable Area End

import TermsandconditionsController, {
  Props,
  configJSON,
} from "./TermsandconditionsController";

export default class Termsandconditions extends TermsandconditionsController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    Dimensions.addEventListener("change", (e) => {
      MergeEngineUtilities.init(
        artBoardHeightOrg,
        artBoardWidthOrg,
        Dimensions.get("window").height,
        Dimensions.get("window").width
      );
      this.forceUpdate();
    });
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    return (
      <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
        <TouchableWithoutFeedback
        testID="btnHideKeyboard"
          onPress={() => {
            this.hideKeyboard();
          }}
        >
          <SafeAreaView>
            <View style={styles.headerView}>
              <View style={styles.textHeaderView}>
              <Text style={styles.headerText}>{configJSON.labelHeader}</Text>

              </View>
              
              <TouchableOpacity style={styles.crossView}
              {...this.goBackProps}
              >
              <MaterialCommunityIcons name="close" size={24} />
              </TouchableOpacity>
            </View>
            
          <View style={styles.viewContainer}>
            <Text
              testID="labelBody" //Merge Engine::From BDS
              style={styles.body} //UI Engine::From Sketch
            >
              {" "}
              {/* UI Engine::From Sketch */}
              {configJSON.labelBodyText} {/* UI Engine::From Sketch */}
            </Text>

            <Text testID="txtSaved">
            Terms and conditions outline what users can and cannot do with your website, products, and services. They lay out the rules to protect you in case of misuse and enable you to take action if it becomes necessary.{`\n\n`}
It’s also referred to by other names such as terms of service (ToS) and terms of use (ToU). Even though they have different names, in fact – there is no difference.{`\n\n`} 
In order to use your website, products, or services, your customers usually must agree to abide by your terms and conditions first.
              {this.state.txtSavedValue}{" "}
              {/* Merge Engine::From BDS - {...this.testIDValue} */}
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
                  {configJSON.labelReadAndAgree}
                </Text>
            </View>
             
             <View style={styles.gapView}></View>
             <View style={styles.btnContainer}>
              <TouchableOpacity 
              testID="btnCancel"
              >
                <Text style={styles.cancelBtn}>
                {configJSON.labelCancel}
                </Text>
              </TouchableOpacity>
             <TouchableOpacity 
              testID="btnAgree"
               style={styles.agreeBtn}
               {...this.btnAgreeProps}
               >
                <Text style={styles.textlableAgree}>{configJSON.btnAgreeTitle}</Text>
              </TouchableOpacity>
             </View>
          </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
    // Merge Engine - render - End
    // Customizable Area End
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    maxWidth: 650,
    backgroundColor: "#ffffffff",
  },
  textHeaderView: {
    alignItems:'center',
    justifyContent:'center',
    width:"94%",
  },
  crossView: {
    alignSelf:'flex-end',
    justifyContent:"flex-end"
  },
  headerView: {
  flexDirection: 'row',
  width: "100%",
  justifyContent:'space-between',
  },
  headerText: {
    fontSize: 14,
    fontWeight:'700',
    alignSelf:'center'
  },
  viewContainer:{
    height: "100%",
    marginVertical: Scale(20),
  },
  title: {
    marginBottom: 32,
    fontSize: 16,
    textAlign: "left",
    marginVertical: 8,
  },
  body: {
    marginBottom: 32,
    fontSize: 24,
    fontWeight:"700",
    textAlign: "left",
  },
  bgMobileInput: {
    flex: 1,
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
  gapView: {
  },
  btnContainer:{
    justifyContent:'center',
  },
  cancelBtn:{
    marginVertical: Scale(24),
    fontSize: 16,
    fontWeight: "700",
    alignSelf: "center"
  },
  agreeBtn: {
    justifyContent: 'center',
    backgroundColor: '#18478F',
    width: '100%',
    height: 56,
    borderRadius: 8,
  },
  textlableAgree: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: "700",
  },
});
// Customizable Area End


goBackProps ={
  onPress : () => this.props.navigation.goBack()
}

propsCheckBoxSelect = {
  onPress : () => {
    this.toggleCheckBoxNew();
  }
}

btnAgreeProps = {
  onPress: () => this.doButtonPressed(),
};