import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ErrorItem = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textmessage}>Sorry :/</Text>
            <Text style={styles.textmessage2}>We have not found the place.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 60,
        marginRight: 60,
        marginTop: 50,
        backgroundColor: 'mintcream',
    },
    textmessage: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 20,
        textAlign: 'center',
    },
    textmessage2: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    }
});

export default ErrorItem;