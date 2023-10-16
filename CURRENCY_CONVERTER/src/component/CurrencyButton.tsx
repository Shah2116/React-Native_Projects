
import React from "react";
import {View, Text, StyleSheet} from 'react-native'

import { PropsWithChildren } from "react";

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton =(props: CurrencyButtonProps):JSX.Element =>{
    return(
        <View style = {styles.currencyContainer}>
            <Text  style={styles.currencyFlag}>{props.flag}</Text>
            <Text style={styles.currencyName}>{props.flag}</Text>
        </View>
    )
}

const styles =StyleSheet.create({
currencyContainer:{
    alignItems:'center'
},
currencyFlag:{
    fontSize:28,
    marginBottom:4,
    color:'#ffffff',
},
currencyName:{
    fontSize:28,
    marginBottom:4,
    color:'#ffffff',

}

})

export default CurrencyButton;