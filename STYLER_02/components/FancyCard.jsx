import React from 'react'
import { Text, View, StyleSheet, Image, } from 'react-native'

export default function FancyCard() {
    return (
        <View style={styles.main}>
            <Text style={styles.headindText}>Trending Place</Text>
            <View style={styles.card}>
                <Image style={styles.cardImage}
                    source={{
                        uri: 'https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_4x3.jpg'
                    }}
                />
                <Text style={styles.imageHeading}>Taj Mahal</Text>
                <Text style={styles.imageLabel}>It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal</Text>
                <Text style={styles.imageDescription}>Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD, with the mosque, the guest house and the main gateway on the south, the outer courtyard and its cloisters were added subsequently and completed in 1653 AD.</Text>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
  
    headindText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        backgroundColor: '#badc58',
        margin: 10,

    },
    cardEleveted: {},

    cardImage: {
        height: 360,
        marginHorizontal:4,
        borderRadius: 6,
        borderTopLeftRadius:40,
        borderTopRightRadius:40

    },

    imageHeading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
         margin: 10,

    },
    imageLabel: {
        fontSize: 16,
        color: '#535c68',
        paddingHorizontal:10


    },
    imageDescription: {
        fontSize: 14,
        marginBottom: 8,
        marginTop: 8,
        paddingHorizontal:10

    }

})