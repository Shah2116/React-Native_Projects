import {Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
// import DocumentPicker from 'react-native-document-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const DocumentsPicker = () => {

    const [selectImage, setSelectImage] = useState('')
  
    let options = {
        storageOptions:{
            path:'image',
        }
    }
   const ImagePicker = () =>{
    try {
        launchImageLibrary(options, response =>{
            setSelectImage(response.assets[0].uri)
            console.log(response.assets[0].uri)
        })
    } catch (error) {
        console.log("user cancelled image upload", error)
    }
   
   }

    // const selectDoc = async () =>{
    //    try {
    //     const doc = await DocumentPicker.pick()
    //     console.log(doc)
    //    } catch (error) {
    //     if(DocumentPicker.isCancel(error)){
    //         console.log("user cancelled the upload, error")
    //     } else{
    //         console.log(error)
    //     }    
    //    }
    // }

  return (

    <View style={styles.viewContainer}>
      <TouchableOpacity
      >
       <Text style={styles.documentPicker}>DocumentsPicker</Text>
      </TouchableOpacity>
      
      <View style={styles.imgContainer}>
        <Image style={{height:100,width:'100%'}} source={{uri:selectImage}} />
        </View>
    </View>
  );
};

export default DocumentsPicker;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginHorizontal:20,
    justifyContent:'center',
  },
  documentPicker: {
    fontSize:30,
    fontWeight:'500',
    marginVertical:30,
  },
//   imgContainer:{
//     height:200,
//     width:'100%'
//   },
});
