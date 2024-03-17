// import React, { Component } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

// class SignupForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       email: '',
//       password: '',
//       selectedImage: null,
//     };
//   }

//   handleSignup = () => {
//     // Implement your signup logic here
//     console.log('Signing up...');
//     console.log('Username:', this.state.username);
//     console.log('Email:', this.state.email);
//     console.log('Password:', this.state.password);
//     console.log('Selected Image:', this.state.selectedImage);
//     // Add your signup API call or navigation logic
//   };

//   handleImageUpload = () => {
//     const options = {
//       title: 'Select Image',
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };

//     ImagePicker.showImagePicker(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         this.setState({ selectedImage: response });
//       }
//     });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Signup</Text>

//         <TouchableOpacity style={styles.imageUploadButton} onPress={this.handleImageUpload}>
//           {this.state.selectedImage ? (
//             <Image source={{ uri: this.state.selectedImage.uri }} style={styles.selectedImage} />
//           ) : (
//             <Text style={styles.uploadText}>Upload Image</Text>
//           )}
//         </TouchableOpacity>

//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={this.state.username}
//           onChangeText={(text) => this.setState({ username: text })}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           keyboardType="email-address"
//           value={this.state.email}
//           onChangeText={(text) => this.setState({ email: text })}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={this.state.password}
//           onChangeText={(text) => this.setState({ password: text })}
//         />

//         <TouchableOpacity style={styles.signupButton} onPress={this.handleSignup}>
//           <Text style={styles.buttonText}>Signup</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   imageUploadButton: {
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   selectedImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 8,
//   },
//   uploadText: {
//     fontSize: 16,
//     color: '#3498db',
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//   },
//   signupButton: {
//     backgroundColor: '#3498db',
//     padding: 10,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default SignupForm;






// // createTechnicianAPI = async () => {

// //   let formData = new FormData();
// //   formData.append("type","email_account");
// //   formData.append("role_id",configJSON.technicianRollId);
// //   formData.append("full_name",this.state.firstName);
// //   formData.append("local_they_serve",this.state.serviceArea,);
// //   formData.append("email",this.state.email);
// //   formData.append("password",this.state.password);
// //   formData.append("password_confirmation",this.state.reTypePassword);
// //   formData.append("years_in_trade",this.state.year);
// //   formData.append("phone_number",this.state.phone);
// //   formData.append("account_equipments_attributes[0][equipment_id]",this.state.address1);
// //   formData.append("account_equipments_attributes[1][equipment_id]",this.state.address2);
// //   formData.append("avatar",this.state.profilePicPath);


// //   this.createTechnicianAPICallId = await this.apiCall({
// //     contentType: configJSON.MULTIPART_CONTENT_TYPE,
// //     method: configJSON.apiMethodTypeAddDetail,
// //     endPoint: configJSON.signUpEndPoint,
// //     body: formData
// //   })
// // }


// // createTechnicianAPI = async () => {

// //   let formData = new FormData();
// //   formData.append("type","email_account");
// //   formData.append("role_id",configJSON.technicianRollId);
// //   formData.append("full_name",this.state.firstName);
// //   formData.append("local_they_serve",this.state.serviceArea,);
// //   formData.append("email",this.state.email);
// //   formData.append("password",this.state.password);
// //   formData.append("password_confirmation",this.state.reTypePassword);
// //   formData.append("years_in_trade",this.state.year);
// //   formData.append("phone_number",this.state.phone);
// //   formData.append("account_equipments_attributes[0][equipment_id]",this.state.address1);
// //   formData.append("account_equipments_attributes[1][equipment_id]",this.state.address2);
// //   formData.append("avatar",this.state.profilePicPath);


// //   this.createTechnicianAPICallId = await this.apiCall({
// //     contentType: configJSON.MULTIPART_CONTENT_TYPE,
// //     method: configJSON.apiMethodTypeAddDetail,
// //     endPoint: configJSON.signUpEndPoint,
// //     body: formData
// //   })
// // }




import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const App = () => {
  const [profilePicPath, setProfilePicPath] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const openCamera = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      (response) => {
        if (!response.didCancel) {
          setProfilePicPath(response.uri);
          setModalVisible(false);
        }
      }
    );
  };

  const openGallery = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      (response) => {
        if (!response.didCancel) {
          setProfilePicPath(response.uri);
          setModalVisible(false);
        }
      }
    );
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {profilePicPath && <Image source={{ uri: profilePicPath }} style={{ width: 200, height: 200, marginBottom: 20 }} />}

      <TouchableOpacity onPress={toggleModal} style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Select Image</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={openCamera} style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Open Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={openGallery} style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Open Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleModal} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  uploadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  optionButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;





// this.state.commercialData.forEach((data) => {
//   userData["user[equipment_id]"].push(data.id)
// });
// this.state.residentialData.forEach((data) => {
//   userData["user[equipment_id]"].push(data.id)
// });
// this.state.dumbwaiterData.forEach((data) => {
//   userData["user[equipment_id]"].push(data.id)
// });



// const userData: any = {
//   "user[role_id]": this.state.roleId,
//   "user[name]": this.state.firstName,
//   "user[technician_service_area]": this.state.serviceArea,
//   "user[email]": this.state.email,
//   "user[password]": this.state.password,
//   "user[password_confirmation]": this.state.reTypePassword,
//   "user[phone_number]": this.state.phone,
//   "user[technician_experience]": this.state.year,
//   "user[avatar]": this.state.profilePicPath,
//   "user[equipment_id]": []
// }