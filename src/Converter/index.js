import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Converter = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.yazi} >°C to °F Convert</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopWidth: 2,
        //borderBottomWidth: 2,
    },
    yazi: {
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 80
    }
})

export default Converter;