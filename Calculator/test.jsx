const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: Scale(20),
      marginLeft: "auto",
      marginRight: "auto",
      width: Platform.OS === "web" ? "75%" : "100%",
      maxWidth: 650,
      backgroundColor: "#ffffffff",
    },
    viewContainer:{
      height:Dimensions.get('window').height,
      flex:1,
    },
    imgHonestLogo: {
      height: Scale(95),
      width: Scale(180),
      alignSelf: "center",
      marginTop: Scale(56),
      marginBottom: Scale(32),
    },
    titleWhySignUp: {
      marginBottom: Scale(32),
      fontSize: 22,
      fontWeight:"bold",
      textAlign: "left",
    },
    titleOtpInfo: {
      marginBottom: Scale(32),
      fontSize: 16,
      textAlign: "left",
      marginVertical: Scale(8),
    },
    gapView:{
      flexGrow:0.67,
    },
    bottomContainer:{
      justifyContent:'flex-end',
    },
    loginBtn: {
      justifyContent: 'center',
      backgroundColor: '#18478F',
      width: "100%",
      height: Scale(56),
      borderRadius: Scale(8),
      alignItems: 'center',
    },
    textlable_Login: {
      color: '#ffffffff',
      alignSelf: 'center',
    },
    bgMobileInput: {
      flexDirection: "row",
      fontSize: 16,
      textAlign: "left",
      backgroundColor: "#00000000",
      marginTop: Scale(10),
      marginBottom: Scale(22),
      borderWidth: 1,
      borderColor: "#2F599A",
      borderRadius: Scale(8),
      includeFontPadding: true,
      padding: Scale(10),
    },
    inputText:{
      fontSize:14,
      fontWeight:'bold',
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
      alignSelf: "center",
    },
    bgPasswordContainer: {
      flexDirection: "row",
      backgroundColor: "#00000000",
      marginTop: Scale(10),
      borderWidth: Platform.OS === "web" ? 0 : 1,
      borderBottomWidth: 1,
      borderColor: "#2F599A",
      borderRadius: Scale(8),
      paddingHorizontal: Scale(7),
      zIndex: -1
    },
    labelTitle: {
      marginTop: 15,
      fontSize: Scale(14),
      fontWeight: "bold",
    },
    imgPasswordShowhide: Platform.OS === "web" ? { height: 30, width: 30 } : {},
  
    forgotPassword: {
      marginTop: Scale(5),
      color: "#07152a",
      fontWeight: "800",
      zIndex: -1,
      alignSelf:'flex-end',
    },
    orLabel: {
      color: "#000000",
      fontWeight: "bold",
      alignSelf: "center",
      fontSize: 12,
      marginVertical: Scale(12),
    },
    signUpWrapper: {
      flexDirection: 'row',
      alignSelf: 'center',
    },
    newMember_text: {
      color: '#000000',
    },
    signUp_btn: {
      color: '#000000',
      fontWeight: 'bold',
    },
  });




<SafeAreaView style={styles.viewContainer}>
            {this.isPlatformWeb() ? (
              <Text style={styles.labelTitle}>{this.labelTitle}</Text>
            ) : null}

            <Image
              {...this.imgHonestLogoProps}
              testID="imgEnablePasswordField"
              style={styles.imgHonestLogo}
            />
            <Text style={styles.titleWhySignUp}>{this.labelHeader}</Text>

            <Text style={styles.inputText}>{this.labelEmail}</Text>
            <TextInput
              testID="txtInputEmail" //Merge Engine::From BDS
              style={styles.bgMobileInput} //UI Engine::From Sketch
              placeholder="Email" //UI Engine::From Sketch
              {...this.txtInputEmailProps} //Merge Engine::From BDS - {...this.testIDProps}
            />
            <Text style={styles.inputText}>{this.labelPassword}</Text>
            <View style={styles.bgPasswordContainer}>
              <TextInput
                testID="txtInputPassword" //Merge Engine::From BDS
                style={styles.bgPasswordInput} //UI Engine::From Sketch
                placeholder={this.state.placeHolderPassword} //UI Engine::From Sketch
                {...this.txtInputPasswordProps} //Merge Engine::From BDS - {...this.testIDProps}
              />

              <TouchableOpacity
                testID={"btnPasswordShowHide"} //Merge Engine::From BDS
                style={styles.passwordShowHide} //UI Engine::From Sketch
                {...this.btnPasswordShowHideProps} //Merge Engine::From BDS - {...this.testIDProps}
              >
                <Image
                  testID={"btnPasswordShowHideImage"} //Merge Engine::From BDS - testIDImage
                  style={styles.imgPasswordShowhide} //UI Engine::From Sketch
                  {...this.btnPasswordShowHideImageProps} //Merge Engine::From BDS - {...this.testIDProps}
                />
              </TouchableOpacity>
            </View>
            <Text
              testID={"btnForgotPassword"} //Merge Engine::From BDS
              style={styles.forgotPassword} //UI Engine::From Sketch
              onPress={() => {
                this.goToForgotPassword();
              }}
            >
              Forgot password?
            </Text>
            <View style={styles.gapView} />
            <View style={styles.bottomContainer}>
              <TouchableOpacity 
              testID="btnEmailLogIn"
              onPress={() => {
                this.doEmailLogIn();}}
              style={styles.loginBtn}>
                <Text style={styles.textlable_Login}>{this.lableLogin}</Text>
              </TouchableOpacity>

              <Text style={styles.orLabel}>{this.labelOr}</Text>
              <View style={styles.signUpWrapper}>
                <Text style={styles.newMember_text}>{this.labelNewMember}</Text>
                <TouchableOpacity>
                  <Text style={styles.signUp_btn}>? sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
</SafeAreaView>




imgHonestLogoProps = {
    source: imgHonestLogo
  };


  onPress={() => {
    this.doEmailLogIn();}}

    onPress={() => {
      this.goToForgotPassword();
    }}


    238
    apiCall = async (data: {
      contentType?: string, method: string, endPoint: string, body?: any, type?: string
    }) => {
      const { contentType, method, endPoint, body ,type} = data;
      const header = {
        "Content-Type": contentType,
      };
  
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestHeaderMessage),
        JSON.stringify(header)
      );
      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        endPoint
      );
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestMethodMessage),
        method
      );
  
      body && type != 'formData' ?
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        JSON.stringify(body)
      )
      : requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        body
      );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
    };
    
    loginTechnicianApi = async () => {
  
      const userData = {
        "email": this.state.email,
        "password": this.state.password,
      }
  
  
      this.loginTechnicianApiCallId = await this.apiCall({
        contentType: configJSON.loginApiContentType,
        method: configJSON.loginAPiMethod,
        endPoint: configJSON.loginAPiEndPoint,
      })
    }

    147
    btnTechnicianLoginProps = {
      onPress : () => {this.doEmailLogIn()}
    }
  
    navigateToTechnicianSignUpScreen = {
      onPress : () => {this.navigateTo("EmailAccountRegistrationTechnician")}
    }
  
    navigateToResetPasswordScreen = {
      onPress: () => {this.goToForgotPassword()}
    }
    
    navigateTo = (title: string) => {
      const msg = new Message(getName(MessageEnum.NavigationMessage));
      msg.addData(getName(MessageEnum.NavigationTargetMessage), title);
      msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
  
       this.send(msg);
    };

  exports.accountsAPiEndPoint =
  "/account_block/users";

exports.apiMethodTypeAddDetail = "POST";
exports.technicianRollId = "1";

exports.errorEmailNotValid = "Email not valid.";
exports.urlGetValidations =
  "profile/validations";
exports.validationApiContentType = "application/json";

exports.validationApiMethodType = "GET";
exports.signUpApiContentType = 'multipart/form-data';
exports.signUpApiMethod = 'POST';
exports.signUpApiEndPoint = '/account_block/accounts';
exports.getEquipmentsApiMethod = 'GET';
exports.getEquipmentsApiEndPoint = '/account_block/equipments';
exports.checkBoxTermAndCondition = false;


98   createCustomerAPICallId: string = "";
380 if (apiRequestCallId === this.createCustomerAPICallId) {
  if (responseJson.data) {
    Alert.alert('Success', 'Customer account created successfully\n' + JSON.stringify(responseJson.data));
  } else {
    Alert.alert(responseJson.error?.account)
  }
  }
  1086
  createCustomerAPI = async () => {

    const customerDataObj: any = {
      "role_id":configJSON.customerRollId,
      "full_name":this.state.firstName,
      "company_name":this.state.companyName,
      "email":this.state.email,
      "password":this.state.password,
      "password_confirmation":this.state.reTypePassword,
      "phone_number":this.state.phone,
      // "is_tax_exempt":
      // "addresses_attributes[0][address]":
      // "addresses_attributes[0][address2]":
      // "addresses_attributes[0][zip_code]":
      // "addresses_attributes[0][address_type]":
      // "addresses_attributes[1][address]":
      // "addresses_attributes[1][address2]":
      // "addresses_attributes[1][zip_code]":
      // "addresses_attributes[1][address_type]":
      // "addresses_attributes[1][is_direct_contact]":
      // "addresses_attributes[1][building_image]":
      // "addresses_attributes[1][contact_user_attributes][name]":
      // "addresses_attributes[1][contact_user_attributes][phone_number]":
      // "addresses_attributes[1][contact_user_attributes][email]":
      // "addresses_attributes[1][contact_user_attributes][tax_id]":
    }
    if (this.state.profilePicPath) {
      customerDataObj["avtar"] = {
        uri: this.state.profilePicPath,
        type: 'image/jpg',
        name: 'image.jpg'
      }
    }

    this.createCustomerAPICallId = await this.apiCall({
      contentType: configJSON.customerApiContentType,
      method: configJSON.customerApiMethod,
      endPoint: configJSON.signUpApiEndPoint,
      body: this.convertJSONtoFormData(customerDataObj),
      type: 'formData'
    })
  

  }

  