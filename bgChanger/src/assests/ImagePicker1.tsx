import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class ImagePicker1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      selectedImage: null,
    };
  }

  handleSignup = () => {
    // Implement your signup logic here
    console.log('Selected Image:', this.state.selectedImage);
    // Add your signup API call or navigation logic
  };

  handleImageUpload = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.setState({ selectedImage: response });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageUploadButton} 
        onPress={this.handleImageUpload}>
          {this.state.selectedImage ? (
            <Image source={{ uri: this.state.selectedImage.uri }} 
            style={styles.selectedImage} 
            />
          ) : (
            <Text style={styles.uploadText}>Upload Image</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imageUploadButton: {
    alignItems: 'center',
    marginBottom: 16,
  },
  selectedImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 8,
  },
  uploadText: {
    fontSize: 16,
    color: '#3498db',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  signupButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ImagePicker1;
