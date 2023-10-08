import React from 'react'
import { View, Text, SafeAreaView, StyleSheet,ScrollView } from 'react-native'

export default function Elevator() {
  return (
    <View>
    <Text style ={styles.headingText}> Elevator</Text>
    <ScrollView horizontal={true} style ={styles.container}>
    <View  style={[styles.card, styles.cardElevater]}>
        <Text>Tap</Text>
    </View>
    <View  style={[styles.card, styles.cardElevater]}>
        <Text>me</Text>
    </View>
    <View  style={[styles.card, styles.cardElevater]}>
        <Text>to</Text>
    </View>
    <View  style={[styles.card, styles.cardElevater]}>
        <Text>Scroll</Text>
    </View>
    <View  style={[styles.card, styles.cardElevater]}>
        <Text>maore</Text>
    </View>
    <View  style={[styles.card, styles.cardElevater]}>
        <Text>View</Text>
    </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        padding:8,
    },
    container:{
        padding:8,
       
    },
    cardElevater:{
        backgroundColor:'#34eba4',
    
    },

    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
       
        margin:8,
        borderRadius:4,
        padding:5


    },
    
})
