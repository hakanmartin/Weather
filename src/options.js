import { View, Text, StyleSheet, Image, Pressable, TextInput, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AboutItem from '../src/AboutItem/index.js';
import Converter from './Converter/index.js';
import LanguageItem from './LanguageItem/index.js';
import DataItem from './DataItem/index.js';

const Options = () => {
    const navigation = useNavigation();
    const [newCity, setNewCity] = useState('');

    const handleSave = async () => {
        // Yeni şehir bilgisini saklamak
        await AsyncStorage.setItem('selectedCity', newCity);
        // setSelectedCity ile yeni bilgiyi güncellemek (Weather bileşeninde)
        setSelectedCity(newCity);
    };
    return (
        <View style={styles.container} >
            <Image position={'absolute'} blurRadius={70} source={require('../assets/Adsız.png')} />
            <View style={styles.top} >
            <Pressable onPress={() => navigation.navigate('Weather')} style={styles.backbar} >
                <Ionicons name="md-chevron-back-outline" size={30} color="black" style={{ marginBottom: 5, marginTop: 5}} />
                <Text style={styles.back} >Back</Text>
              </Pressable>
            </View>
            <View style={styles.box}>
            <Text>Enter a new city:</Text>
            <TextInput
                style={styles.input}
                value={newCity}
                onChangeText={setNewCity}
                placeholder="Enter city name"
            />
            <Button title="Save" onPress={handleSave} />
        </View>
        <AboutItem style={styles.ilkbar} />
        <DataItem />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    top: {
        flexDirection: 'row',
        marginTop: 33
    },
    backbar: {
        backgroundColor: 'rgba(128, 128, 128, 0.4)',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10
    },
    back: {
        fontSize: 20,
        marginBottom: 5,
        marginTop: 5,
        marginRight: 10
    },
    ilkbar: {
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        width: 200,
        marginBottom: 20,
        marginTop: 30
    },
})

export default Options;