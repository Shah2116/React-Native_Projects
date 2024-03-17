import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { runEngine } from "../../../framework/src/RunEngine";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";

// Customizable Area Start
import { imgHideEye, imgShowEye, imgHonestLogo,} from "./assets";
import ImagePicker from "react-native-image-crop-picker";
import { Alert } from "react-native";
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
}

export interface S {
  // Customizable Area Start
  firstName: string;
  companyName: string;
  email: string;
  password: string;
  otpAuthToken: string;
  reTypePassword: string;
  data: any[];
  passwordHelperText: string;
  enablePasswordField: boolean;
  enableReTypePasswordField: boolean;
  countryCodeSelected: string;
  phone: string;
  year: string;
  experience: string;
  fullName: string;
  address1:string;
  placeHolderBlankTextField:string;
  isSelected:boolean;
  commercialData:any[];
  residentialData:any[];
  dumbwaiterData:any[];
  checkboxes: any;
  checkboxesResidential: any; 
  checkboxesDubwaiter: any;
  profileImgBase64:any;
  profilePicPath:any;
  serviceArea:string;
  shopCode:string;
  roleId:number;
  errorShopeCode:string;
  errorName:string;
  errorService:string;
  errorEmail:string;
  errorUpdatePassword:string;
  errorReTypePassword:string;
  errorPhoneNumber:string;
  errorYearTrade:string;
  errorCommercial:string;
  errorResidential:string;
  errorDumbwaiter:string;
  errorTermAndCondition:string;
  isVisibleModal: boolean;
  // Customizable Area End
}

export interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class EmailAccountRegistrationController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  arrayholder: any[];
  passwordReg: RegExp;
  emailReg: RegExp;
  phoneReg:RegExp;
  createAccountApiCallId: string = "";
  validationApiCallId: string = "";
  createTechnicianAPICallId: string = "";
  getEquipmentsApiCallId: string = "";

  btnTextValidate:string;
  labelShopCode:string;
  labelEnterShopCode:string;
  imgHideEye: any;
  imgShowEye: any;

  labelHeader: any;
  labelName:string;
  labelFirstName: string;
  labelCompanyName:string;
  companyName: string;
  labelEmail: string;
  labelPassword: string;
  labelRePassword: string;
  labelPhoneNumber: string;
  phone:string;
  year: string;
  labelBillingAddress1:string;
  address1:string;
  labelBillingAddress2:string;
  labelZipCode:string;
  labelAnotherBuilding: string;
  labelLegalTermCondition: string;
  labelLegalPrivacyPolicy: string;
  btnTextSignUp: string;

  currentCountryCode: any;
  labelTechnicianRegistration:string;
  labelCustomerRegistration:string;
  labelLocalTheyServe:string;
  labelUpdatePassword:string;
  labelYearTrade:string;
  labelTechnicianTrade:string;
  labelTechnicianEquipments:string;
  labelTechnicianComercial:string;
  labelTechnicianSchindler:string;
  labelTechnicianThyssen:string;
  labelTechnicianOits:string;
  labelTechnicianKone:string;
  labelTechnicianMce:string;
  labelTechnicianSmartise:string;
  labelTechnicianVa:string;
  labelTechnicianAlpha:string;
  labelTechnicianEsco:string;
  labelTechnicianCladder:string;
  labelTechnicianResidential:string;
  labelTechnicianSavaria:string;
  labelTechnicianGaraventa:string;
  labelTechnicianDumbwaiter:string;
  labelTechnicianMatot:string;
  labelTechnicianInclinator:string;
  placeHolderBlankTextField:string;
  serviceArea:string;
  placeHolderYearTrade:string;
  labelOr:string;
  textHaveAccount:string;
  textLogin:string;
  labelReadAndAgree:string;
  textTermAndCondition:string;
  labelTermAndCondition:string;
  textReadAndAgree:string;
  btnTextCancel:string;
  textReferred:string;
  textOrder:string;
  btnTextAgree:string;
  signUpButtonPressApiCallId:string = "";
  checkBoxTermAndCondition:boolean;
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.NavigationPayLoadMessage),
      getName(MessageEnum.CountryCodeMessage)
    ];
    this.receive = this.receive.bind(this);
    this.isStringNullOrBlank = this.isStringNullOrBlank.bind(this);

    runEngine.attachBuildingBlock(this, this.subScribedMessages);

    this.state = {
      // Customizable Area Start
      firstName: "",
      companyName: "",
      email: "",
      password: "",
      reTypePassword: "",
      otpAuthToken: "",
      data: [],
      passwordHelperText: "",
      enablePasswordField: true,
      enableReTypePasswordField: true,
      countryCodeSelected: "",
      phone: "",
      year: "",
      experience: "",
      fullName: "",
      address1: "",
      placeHolderBlankTextField:"",
      serviceArea: "",
      shopCode:"",
      isSelected:false,
      commercialData: [],
      residentialData:[],
      dumbwaiterData:[],
      checkboxes: {},
      checkboxesResidential: {},
      checkboxesDubwaiter: {},
      profileImgBase64: "",
      profilePicPath: "",
      roleId:1,
      errorShopeCode:"",
      errorName:"",
      errorService:"",
      errorEmail:"",
      errorUpdatePassword:'',
      errorReTypePassword:"",
      errorPhoneNumber:"",
      errorYearTrade:"",
      errorCommercial:"",
      errorResidential:"",
      errorDumbwaiter:"",
      errorTermAndCondition:"",
      isVisibleModal:false,
      // Customizable Area End
    };

    // Customizable Area Start
    this.arrayholder = [];
    this.passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    this.emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.phoneReg = /^\d{3}-\d{3}-\d{4}$/;

    this.imgHideEye = imgHideEye;
    this.imgShowEye = imgShowEye;
    this.labelTermAndCondition = configJSON.labelTermAndCondition;
    this.textReadAndAgree = configJSON.textReadAndAgree;
    this.btnTextCancel = configJSON.btnTextCancel;
    this.textReferred = configJSON.textReferred;
    this.textOrder = configJSON.textOrder;
    this.btnTextAgree = configJSON.btnTextAgree;
        
    this.labelReadAndAgree = configJSON.labelReadAndAgree;
    this.textHaveAccount = configJSON.textHaveAccount;
    this.textLogin = configJSON.textLogin;
    this.btnTextValidate = configJSON.btnTextValidate;
    this.labelHeader = configJSON.labelHeader;
    this.labelOr = configJSON.labelOr;
    this.labelName = configJSON.labelName;
    this.labelFirstName = configJSON.labelFirstName;
    this.labelCompanyName = configJSON.labelCompanyName;
    this.companyName = configJSON.companyName;
    this.labelEmail = configJSON.labelEmail;
    this.labelPassword = configJSON.labelPassword;
    this.labelRePassword = configJSON.labelRePassword;
    this.labelPhoneNumber = configJSON.labelPhoneNumber;
    this.phone = configJSON.phone;
    this.year = configJSON.year;
    this.labelBillingAddress1 = configJSON.labelBillingAddress1;
    this.address1 = configJSON.address1;
    this.labelBillingAddress2 = configJSON.labelBillingAddress2; 
    this.labelZipCode = configJSON.labelZipCode;
    this.labelAnotherBuilding = configJSON.labelAnotherBuilding;
    this.labelLegalTermCondition = configJSON.labelLegalTermCondition;
    this.checkBoxTermAndCondition = configJSON.checkBoxTermAndCondition;
    this.labelLegalPrivacyPolicy = configJSON.labelLegalPrivacyPolicy;
    this.btnTextSignUp = configJSON.btnTextSignUp;
    this.labelShopCode = configJSON.labelShopCode;
    this.labelEnterShopCode = configJSON.labelEnterShopCode;

    this.labelTechnicianRegistration = configJSON.labelTechnicianRegistration;
    this.labelCustomerRegistration = configJSON.labelCustomerRegistration;
    this.labelLocalTheyServe = configJSON.labelLocalTheyServe;
    this.labelTechnicianTrade = configJSON.labelTechnicianTrade;
    this.labelUpdatePassword = configJSON.labelUpdatePassword;
    this.labelYearTrade = configJSON.labelYearTrade;
    this.labelTechnicianEquipments = configJSON.labelTechnicianEquipments;
    this.labelTechnicianComercial = configJSON.labelTechnicianComercial;
    this.labelTechnicianSchindler = configJSON.labelTechnicianSchindler;
    this.labelTechnicianThyssen = configJSON.labelTechnicianThyssen;
    this.labelTechnicianOits = configJSON.labelTechnicianOits;
    this.labelTechnicianKone = configJSON.labelTechnicianKone;
    this.labelTechnicianMce = configJSON.labelTechnicianMce;
    this.labelTechnicianSmartise = configJSON.labelTechnicianSmartise;
    this.labelTechnicianVa = configJSON.labelTechnicianVa;
    this.labelTechnicianAlpha = configJSON.labelTechnicianAlpha;
    this.labelTechnicianEsco = configJSON.labelTechnicianEsco;
    this.labelTechnicianCladder = configJSON.labelTechnicianCladder;
    this.labelTechnicianResidential = configJSON.labelTechnicianResidential;
    this.labelTechnicianSavaria = configJSON.labelTechnicianSavaria;
    this.labelTechnicianGaraventa = configJSON.labelTechnicianGaraventa;
    this.labelTechnicianDumbwaiter = configJSON.labelTechnicianDumbwaiter;
    this.labelTechnicianMatot = configJSON.labelTechnicianMatot;
    this.labelTechnicianInclinator = configJSON.labelTechnicianInclinator;
    this.placeHolderBlankTextField = configJSON.placeHolderBlankTextField;
    this.serviceArea = configJSON.serviceArea;
    this.placeHolderYearTrade = configJSON.placeHolderYearTrade;
    this.textTermAndCondition = configJSON.textTermAndCondition;
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      await this.handleRestAPIResponse(message);
    }
  
    if (getName(MessageEnum.NavigationPayLoadMessage) === message.id) {
      this.handleNavigationPayloadMessage(message);
    }
  
    if (getName(MessageEnum.CountryCodeMessage) === message.id) {
      this.handleCountryCodeMessage(message);
    }
    // Customizable Area End
  }

  // Customizable Area Start
  async handleRestAPIResponse(message: Message) {
    const apiRequestCallId = message.getData(
      getName(MessageEnum.RestAPIResponceDataMessage)
    );
  
    const responseJson = message.getData(
      getName(MessageEnum.RestAPIResponceSuccessMessage)
    );
  
    const errorReponse = message.getData(
      getName(MessageEnum.RestAPIResponceErrorMessage)
    );
  
    if (apiRequestCallId && responseJson) {
      // await this.handleValidationApi(apiRequestCallId, responseJson);
      // await this.handleCreateAccountApi(apiRequestCallId, responseJson, errorReponse);
      // await this.handleSignUpButtonPressApi(apiRequestCallId);
      if (apiRequestCallId === this.createTechnicianAPICallId){
        Alert.alert('account creation', JSON.stringify(responseJson))
        console.log("@@@",JSON.stringify(responseJson))
      } else if (apiRequestCallId === this.getEquipmentsApiCallId) {
        const commercialEquipments = this.getEquipmentsByCategory(responseJson.data, "Commercial");
        const residentialEquipments = this.getEquipmentsByCategory(responseJson.data, "Residential");
        const dumbwaiterEquipments = this.getEquipmentsByCategory(responseJson.data, "Dumbwaiter");
        this.setState({
          commercialData: commercialEquipments,
          residentialData: residentialEquipments,
          dumbwaiterData: dumbwaiterEquipments,
        })
      }
    }
  }

  getEquipmentsByCategory = (data: any, category: string) => {
    return data.filter((item: any) => 
          item.attributes.equipment_category === category
        ).map((item: any) => (
          {
            id: item.id,
            name: item.attributes.name,
          }
        ))    
  }
  
  async handleValidationApi(apiRequestCallId: string, responseJson: any) {
    if (apiRequestCallId === this.validationApiCallId) {
      this.arrayholder = responseJson.data;
  
      if (this.arrayholder && this.arrayholder.length !== 0) {
        const regexData = this.arrayholder[0];
  
        this.updateValidationRegex(regexData);
      }
    }
  }
  
  updateValidationRegex(regexData: any) {
    if (regexData.password_validation_regexp) {
      this.passwordReg = new RegExp(regexData.password_validation_regexp);
    }
  
    if (regexData.password_validation_rules) {
      this.setState({
        passwordHelperText: regexData.password_validation_rules,
      });
    }
  
    if (regexData.email_validation_regexp) {
      this.emailReg = new RegExp(regexData.email_validation_regexp);
    }
  
    if (regexData.phone_validation_regexp) {
      this.phoneReg = new RegExp(regexData.phone_validation_regexp);
    }
  }
  
  async handleCreateAccountApi(apiRequestCallId: string, responseJson: any, errorReponse: any) {
    if (apiRequestCallId === this.createAccountApiCallId) {
      if (!responseJson.errors) {
        const msg: Message = new Message(
          getName(MessageEnum.AccoutResgistrationSuccess)
        );
  
        msg.addData(
          getName(MessageEnum.NavigationPropsMessage),
          this.props
        );
  
        this.send(msg);
      } else {
        this.parseApiErrorResponse(responseJson);
      }
  
      this.parseApiCatchErrorResponse(errorReponse);
      
    }
  }
  
  handleSignUpButtonPressApi(apiRequestCallId: string) {
    if (apiRequestCallId === this.signUpButtonPressApiCallId) {
      return true;
    }
  }
  
  handleNavigationPayloadMessage(message: Message) {
    const otpAuthTkn = message.getData(getName(MessageEnum.AuthTokenDataMessage));
  
    if (otpAuthTkn && otpAuthTkn.length > 0) {
      this.setState({ otpAuthToken: otpAuthTkn });
      runEngine.debugLog("otpAuthTkn", this.state.otpAuthToken);
      runEngine.unSubscribeFromMessages(this as IBlock, [message.id]);
    }
  }
  
  handleCountryCodeMessage(message: Message) {
    const selectedCode = message.getData(getName(MessageEnum.CountyCodeDataMessage));
  
    if (selectedCode !== undefined) {
      this.setState({
        countryCodeSelected:
          selectedCode.indexOf("+") > 0
            ? selectedCode.split("+")[1]
            : selectedCode,
      });
    }
  }
  
  propsKeyboard = {
    onPress : () => {
      this.hideKeyboard();
    }
  }

  propsOpenCamera = {
    onPress : ()=>this.imageSelect()
  }

  propsCheckBoxSelect = {
    onPress : () => {
      this.toggleCheckBoxNew();
    }
  }

  propsSelectTermAndCondition = {
    onPress : ()=>{this.showTermAndCondition()}
  }

  propsSelectRequest = {
    onRequestClose : () => {this.setState({ isVisibleModal: false })}
  }

  propsSelectSetState ={
    onPress : () => {this.setState({isVisibleModal:false})}
  }

  propsCheckBoxNewSelect ={
    onPress : () => {
      this.toggleCheckBoxNew();
    }
  }

  propsSetStateModal = {
    onPress : () => {this.setState({isVisibleModal:false})}
  }

  propsSetStateModalValidate = {
    onPress : () => {this.setState({isVisibleModal:false})}
  }

  propsSignUp = {
    onPress : ()=>{
      // this.signUpFunc()
      this.createTechnicianAPI()
    }
  }

  propsNavigateToScreen = {
    onPress : () =>{
      this.props.navigation.navigate("EmailAccountLoginBlock")
    }
  }

  propsNavigateToEmailLogin = {
    onPress : () =>
      this.props.navigation.navigate("EmailAccountLoginBlock")
  }

  propsShopCodeFunc = {
    onPress : () =>this.shopeCodeFunc()
  }

  CloseTermAndCondition = () => {
    this.setState({
      isVisibleModal:false,
    })
  };

  showTermAndCondition = () => {
    this.setState({
      isVisibleModal: !this.state.isVisibleModal,
    });
  };

  validateShopeCode = () =>{
    if(!this.state.shopCode){
      this.setState({errorShopeCode : "ShopeCode is required"})
    }
    else{
      return true;
    }
  }


  validateSignUpData = () => {
    if(!this.state.firstName){
      this.setState({ errorName : 'Name is required'})
    }else if(!this.state.serviceArea){
      this.setState({ errorService : 'Local they serve is required'})
    }else if(!this.state.email){
      this.setState({ errorEmail : 'Email is required'})
    }else if(!this.state.password){
      this.setState({ errorUpdatePassword : 'Password is required'})
    }else if(!this.state.reTypePassword){
      this.setState({ errorReTypePassword : 'Re-password is required'})
    }else if(!this.state.phone){
      this.setState({ errorPhoneNumber : 'Phone Number is required'})
    }else if(!this.state.year){
      this.setState({ errorYearTrade : 'Year in trade is required'})
    }else if(Object.keys(this.state.checkboxes).length === 0){
      this.setState({errorCommercial : "Please select at least one commercial option"})
    }else if(Object.keys(this.state.checkboxesResidential).length === 0){
      this.setState({errorResidential : "Please select at least one residential option"})
    }else if(Object.keys(this.state.checkboxesDubwaiter).length === 0){
      this.setState({errorDumbwaiter : "Please select at least one dumbwaiter option"})
    }else if(!this.state.isSelected){
      this.setState({errorTermAndCondition:"Please Select Term and Condition"})
    }else {
      return true
    }
  }

  shopeCodeFunc = () =>{
    if(this.validateShopeCode()){
      this.props.navigation.navigate("EmailAccountRegistrationTechnician")
    }
  }

  signUpFunc = () => {
    if(this.validateSignUpData()){
      this.createAccount()
    }else {
      return false
    }
  }
  goToPrivacyPolicy() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationPrivacyPolicyMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }

  goToTermsAndCondition() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationTermAndConditionMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }

  isStringNullOrBlank(str: string) {
    return str === null || str.length === 0;
  }

  isValidEmail(email: string) {
    return this.emailReg.test(email);
  }

  convertJSONtoFormData = (objectJSON:any) => {
    let formData = new FormData();
    for (let key in objectJSON) {
      if(Array.isArray(objectJSON[key])){
        objectJSON[key].forEach(
          (value: any) => {
           formData.append(key,value)
          }
        )
      }else{
        formData.append(key,objectJSON[key])
      }
    }
    return formData;
  }

  createAccount(): boolean {
    if (
      this.isStringNullOrBlank(this.state.firstName) ||
      this.isStringNullOrBlank(this.state.serviceArea) ||
      this.isStringNullOrBlank(this.state.email) ||
      this.isStringNullOrBlank(this.state.password) ||
      this.isStringNullOrBlank(this.state.reTypePassword)||
      this.isStringNullOrBlank(this.state.phone)||
      this.isStringNullOrBlank(this.state.year)
     ) {
      this.showAlert(
        configJSON.errorTitle,
        configJSON.errorAllFieldsAreMandatory
      );
      return false;
    }

    if (!this.isValidEmail(this.state.email)) {
      this.setState({errorEmail:configJSON.errorEmailNotValid})
      return false;
    }

    if (!this.passwordReg.test(this.state.password)) {
      this.setState({errorUpdatePassword:configJSON.errorPasswordNotValid})
      return false;
    }

    if (!this.passwordReg.test(this.state.reTypePassword)) {
      this.setState({errorReTypePassword:configJSON.errorPasswordNotValid})
      return false;
    }

    if (this.state.password !== this.state.reTypePassword) {
      this.setState({errorReTypePassword:configJSON.errorBothPasswordsNotSame})
      return false;
    }

    if (!this.phoneReg.test(this.state.phone)) {
      this.setState({errorPhoneNumber:configJSON.errorPhoneNotValid})
      return false;
    }

    const header = {
      "Content-Type": configJSON.contentTypeApiAddDetail
    };


        const body = {
          "user": {
            "role_id": this.state.roleId,
            "name": this.state.fullName,
            "email": this.state.email,
            "password": this.state.password,
            "password_confirmation": this.state.reTypePassword,
            "phone_number": this.state.phone,
            "equipment_id": [],
            "technician_service_area": this.state.serviceArea,
            "technician_experience": this.state.experience,
            "shop_code": this.state.shopCode
          }
        }
    const data = {
      type: "email_account",
      attributes: body,
    };

    const httpBody = {
      data: data,
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.createAccountApiCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.accountsAPiEndPoint
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.apiMethodTypeAddDetail
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
    return true;
  }

  getValidations() {
    const headers = {
      "Content-Type": configJSON.validationApiContentType
    };

    const getValidationsMsg = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.validationApiCallId = getValidationsMsg.messageId;

    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.urlGetValidations
    );

    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(headers)
    );
    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.validationApiMethodType
    );
    runEngine.sendMessage(getValidationsMsg.id, getValidationsMsg);
  }

  isNonNullAndEmpty(value: string) {
    return (
      value !== undefined &&
      value !== null &&
      value !== "null" &&
      value.trim().length > 0
    );
  }

  
  imgEnableRePasswordFieldProps = {
    source: imgHideEye
  };

  btnConfirmPasswordShowHideProps = {
    onPress: () => {
      this.setState({
        enableReTypePasswordField: !this.state.enableReTypePasswordField
      });
      this.txtInputConfirmPasswordProps.secureTextEntry = !this.state
        .enableReTypePasswordField;
      this.imgEnableRePasswordFieldProps.source = this
        .txtInputConfirmPasswordProps.secureTextEntry
        ? imgHideEye
        : imgShowEye;
    }
  };

  imgEnablePasswordFieldProps = {
    source: imgHideEye
  };

  imgHonestLogoProps = {
    source: imgHonestLogo
  };

  btnPasswordShowHideProps = {
    onPress: () => {
      this.setState({ enablePasswordField: !this.state.enablePasswordField });
      this.txtInputPasswordProps.secureTextEntry = !this.state
        .enablePasswordField;
      this.imgEnablePasswordFieldProps.source = this.txtInputPasswordProps
        .secureTextEntry
        ? imgHideEye
        : imgShowEye;
    }
  };

  btnSignUpProps = {
    onPress: () => this.createAccount()
  };

  btnLegalPrivacyPolicyProps = {
    onPress: () => this.goToPrivacyPolicy()
  };

  btnLegalTermsAndConditionProps = {
    onPress: () => this.goToTermsAndCondition()
  };

  txtInputEmailFill = {
    onChangeText: (text: string) => {
      this.setState({ email: text });
  }
}

  txtInputEmailWebPrpos = {
    onChangeText: (text: string) => {
      this.setState({ email: text, errorEmail:"" });
      //@ts-ignore
      this.txtInputEmailPrpos.value = text;
    }
  };

  txtInputEmailMobilePrpos = {
    ...this.txtInputEmailWebPrpos,
    keyboardType: "email-address"
  };

  txtInputEmailPrpos = this.isPlatformWeb()
    ? this.txtInputEmailWebPrpos
    : this.txtInputEmailMobilePrpos;

  txtPhoneNumberWebProps = {
    onChangeText: (text: string) => {
      this.setState({ phone: text, errorPhoneNumber:"" });

      //@ts-ignore
      this.txtPhoneNumberProps.value = text;
    }
  };

  txtYearTradeWebProps = {
    onChangeText: (text: string) => {
      this.setState({ year: text, errorYearTrade:"" });

      //@ts-ignore
      this.txtYearTradeProps.value = text;
    }
  };

  txtPhoneNumberMobileProps = {
    ...this.txtPhoneNumberWebProps,
    autoCompleteType: "tel",
    keyboardType: "phone-pad"
  };

  txtPhoneNumberProps = this.isPlatformWeb()
    ? this.txtPhoneNumberWebProps
    : this.txtPhoneNumberMobileProps;

    txtYearTradeMobileProps = {
      ...this.txtYearTradeWebProps,
      autoCompleteType: "tel",
      keyboardType: "phone-pad"
    };

    txtYearTradeProps = this.isPlatformWeb()
    ? this.txtYearTradeWebProps
    : this.txtYearTradeMobileProps;

    txtInputShopCodePrpos = {
      onChangeText: (text: string) => {
        this.setState({ shopCode: text , errorShopeCode:""});
  
        //@ts-ignore
        this.txtInputServeAreaNamePrpos.value = text;
      }
    };
  

  txtInputServeAreaNamePrpos = {
    onChangeText: (text: string) => {
      this.setState({ serviceArea: text , errorService:""});

      //@ts-ignore
      this.txtInputServeAreaNamePrpos.value = text;
    }
  };

  txtInputFirstNamePrpos = {
    onChangeText: (text: string) => {
      this.setState({ firstName: text, errorName: "" });

      //@ts-ignore
      this.txtInputFirstNamePrpos.value = text;
    }
  };

  txtInputCompanyNamePrpos = {
    onChangeText: (text: string) => {
      this.setState({ companyName: text, errorName: "" });

      //@ts-ignore
      this.txtInputCompanyNamePrpos.value = text;
    }
  };

  txtInputConfirmPasswordProps = {
    onChangeText: (text: string) => {
      this.setState({ reTypePassword: text, errorReTypePassword:"" });

      //@ts-ignore
      this.txtInputConfirmPasswordProps.value = text;
    },
    secureTextEntry: true
  };

  txtInputPasswordProps = {
    onChangeText: (text: string) => {
      this.setState({ password: text, errorUpdatePassword:"" });

      //@ts-ignore
      this.txtInputPasswordProps.value = text;
    },
    secureTextEntry: true
  };

  toggleCheckBox = (checkboxId: number) => {
    this.setState((prevState) => {
      const newCheckboxes = {
        ...prevState.checkboxes,
        [checkboxId]: !prevState.checkboxes[checkboxId],
      };  
      this.setState({ errorCommercial: "" });
      return { checkboxes: newCheckboxes };
    });
  };

  toggleCheckBoxResidential = (checkboxResidentialId: number) => {
    this.setState((prevState) => {
      const newCheckboxesResidential = {
        ...prevState.checkboxesResidential,
        [checkboxResidentialId]: !prevState.checkboxesResidential[checkboxResidentialId],
      };
      this.setState({ errorResidential: "" });
      return { checkboxesResidential: newCheckboxesResidential };
    });
  };

  toggleCheckBoxDumbwaiter = (checkboxDumbwaiterId: number) => {
    this.setState((prevState) => {
      const newCheckboxesDumbwaiter = {
        ...prevState.checkboxesDubwaiter,
        [checkboxDumbwaiterId]: !prevState.checkboxesDubwaiter[checkboxDumbwaiterId],
      };
      this.setState({ errorDumbwaiter: "" });
      return { checkboxesDubwaiter: newCheckboxesDumbwaiter };
    });
  };

  toggleCheckBoxNew = () => {
    this.setState({ isSelected : !this.state.isSelected, errorTermAndCondition:""})
  }
   
  noClick=()=>{
    this.props.navigation.goBack();
  }

  imageSelect = () => {
    Alert.alert(
      'Profile picture',
      'Choose an option',
      [
        {text: 'Camera', onPress:this.openCamera},
        {text: 'Gallery', onPress: this.openGallery},
        {text: 'Cencel', onPress: ()=> {}},
      ]
    ) 
  }

  openCamera = () => {
    ImagePicker.openCamera({
      multiple: false,
      mediaType: "photo",
      compressImageQuality: 0.1,
      includeBase64: true,
      cropping: true,
    }).then((image: any) => {
      this.setState({ profilePicPath: image.path },() => console.log('\n\n image status:: ', this.state.profilePicPath,  '\n\n checkboxesDubwaiter :: ',this.state.checkboxesDubwaiter));
    });
  };

  openGallery = () => {
    ImagePicker.openPicker({
      multiple: false,
      mediaType: "photo",
      compressImageQuality: 0.1,
      includeBase64: true,
      cropping: true,
    }).then((image: any) => {
      this.setState({ profilePicPath: image.path });
    })
  };
  
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

  createTechnicianAPI = async () => {
    const dataObj: any = {
      "role_id": configJSON.technicianRollId,
      "full_name": this.state.firstName,
      "local_they_serve": this.state.serviceArea,
      "email": this.state.email,
      "password": this.state.password,
      "password_confirmation": this.state.reTypePassword,
      "years_in_trade": this.state.year,
      "shop_id": this.state.shopCode,
      "avatar": {
        uri: this.state.profilePicPath,
        type: 'image/jpg',
        name: 'image.jpg'
      }
      
    }
    let formData = new FormData();
    formData.append("avatar", {
      uri: this.state.profilePicPath,
      type: 'image/jpg',
      name: 'image.jpg'
  });
    formData.append("role_id",configJSON.technicianRollId);
    formData.append("full_name",this.state.firstName);
    formData.append("local_they_serve",this.state.serviceArea,);
    formData.append("email",this.state.email);
    formData.append("password",this.state.password);
    formData.append("password_confirmation",this.state.reTypePassword);
    formData.append("years_in_trade",this.state.year);
    formData.append("shop_id",this.state.shopCode);
    Object.keys(this.state.checkboxes).forEach((key,index) => formData.append(`account_equipments_attributes[${index}][equipment_id]`, key));
    Object.keys(this.state.checkboxesResidential).forEach((key,index) => formData.append(`account_equipments_attributes[${index}][equipment_id]`, key));
    Object.keys(this.state.checkboxesDubwaiter).forEach((key,index) => formData.append(`account_equipments_attributes[${index}][equipment_id]`, key));
    
    Object.keys({...this.state.checkboxes, ...this.state.checkboxesResidential, ...this.state.checkboxesDubwaiter}).forEach((key,index) =>
      dataObj[`account_equipments_attributes[${index}][equipment_id]`] = key);

    console.log(JSON.stringify(dataObj))
    this.createTechnicianAPICallId = await this.apiCall({
      contentType: configJSON.signUpApiContentType,
      method: configJSON.signUpApiMethod,
      endPoint: configJSON.signUpApiEndPoint,
      body: this.convertJSONtoFormData(dataObj),
      type: 'formData',
    })
  }

  getEquipmentsApi = async () => {
    this.getEquipmentsApiCallId = await this.apiCall({
       method: configJSON.getEquipmentsApiMethod,
       endPoint: configJSON.getEquipmentsApiEndPoint,
    })
  }
    
  // Customizable Area End
}
