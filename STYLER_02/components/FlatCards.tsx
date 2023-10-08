import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default function FlatCards() {
    return (
        <View>
            <Text style={styles.heading}>
                Flat Cards
            </Text>
            <View style={styles.container} >
                <View  style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View  style={[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
                <View  style={[styles.card, styles.cardThree]}>
                    <Text>Green</Text>
                </View>
                <View  style={[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
       padding:10
    },
    container: {  
        flex:1,
        flexDirection:'row'
    },

    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height: 110,
        width: 100,
        borderRadius: 4,
        margin:8
        
    },
     
    cardOne:{
        backgroundColor: '#eb4034'
    },
    cardTwo:{
        backgroundColor:'#345beb'
    },
    cardThree:{
        backgroundColor: '#34eba4'
    }

})