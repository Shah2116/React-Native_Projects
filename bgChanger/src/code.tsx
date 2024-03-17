import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ContactDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Details</Text>
      </View>
      <Image 
        source={{ uri: 'path_to_your_image' }} 
        style={styles.profileImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Mobile number</Text>
        <Text style={styles.infoText}>+1-202-555-0104</Text>
        
        <Text style={styles.label}>Email address</Text>
        <Text style={styles.infoText}>emmastone@gmail.com</Text>
        
        <Text style={styles.label}>Default ringtone</Text>
        <Text style={styles.infoText}>Ringtone</Text>
      </View>
      <TouchableOpacity style={styles.shareButton}>
        <Text style={styles.shareButtonText}>SHARE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#8e44ad',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: -50,
  },
  infoContainer: {
    padding: 20,
  },
  label: {
    color: '#333',
    fontSize: 18,
    marginTop: 10,
  },
  infoText: {
    color: '#555',
    fontSize: 16,
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: '#8e44ad',
    padding: 15,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ContactDetails;