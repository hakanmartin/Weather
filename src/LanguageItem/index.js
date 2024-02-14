import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const LanguageItem = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.yazi} >Supported Languages</Text>
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

export default LanguageItem;