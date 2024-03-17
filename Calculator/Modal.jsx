// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Modal from 'react-native-modal';

// const CustomModals = () => {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   const ModalOption = ({ text, onPress }) => (
//     <>
//       <TouchableOpacity onPress={onPress} style={styles.modalOption}>
//         <Text style={styles.btnText}>{text}</Text>
//       </TouchableOpacity>
//       <View style={styles.separator} />
//     </>
//   );

//   return (
//     <View style={styles.container}>
//     <TouchableOpacity onPress={toggleModal} style={styles.button}>
//       <Text style={styles.buttonText}>Open Modal</Text>
//     </TouchableOpacity>

//     <Modal isVisible={isModalVisible} style={styles.modal} transparent={true}>
//       <View style={styles.modalContent}>
//         <Text style={styles.modalText}>Profile Picture</Text>
//         <Text style={styles.modalText}>Choose an option</Text>
//         <View style={styles.separator} />

//         <ModalOption text="Camera" onPress={() => handleOptionPress("Camera")} />
//         <ModalOption text="Gallery" onPress={() => handleOptionPress("Gallery")} />
//         <ModalOption text="Remove Picture" onPress={() => handleOptionPress("Remove Picture")} />
//         <ModalOption text="Cancel" onPress={toggleModal} />
//       </View>
//     </Modal>
//   </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#3498db',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   modal: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: rgba(255, 255, 255, 0.7)
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     paddingVertical: 20,
//     borderRadius: 10,
//     width: '80%',
//   },
//   modalText: {
//     alignSelf: 'center',
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 20,
//     color:'#000'
//   },
//   closeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   separator: {
//     borderBottomColor: 'black', 
//     borderBottomWidth: 1,  
//   },
//   btnText: {
//     alignSelf: 'center',
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 20,
//     color:'blue',
//   },
// });

// export default CustomModals;



