import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const DottedContainer = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', margin:20}}>
     <TouchableOpacity
     style={styles.container}
     >
        <View>

        <Text style={styles.imgUploadText}>Upload Image</Text>
        </View>
   
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:56,
    width:"100%",
    borderWidth: 2,
    borderColor: '#2f599a',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 10,
  },
  imgUploadText: {
    alignSelf:'center',
    color:"#8ba3c7",
    fontSize:16,
    fontWeight:"400",
  }
});

export default DottedContainer;
