import { View, Text, StyleSheet, Alert, ActivityIndicator, Image, } from "react-native";
import React, { useState, useEffect } from 'react';
import Constants from "expo-constants";
import WeatherInfo from "./WeatherInfo";
import WeatherSearch from "./search";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEYS = '00f4b93b2cd4fd10db1b32b8e163d7aa'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [selectedCity, setSelectedCity] = useState(''); // Kullanıcının seçtiği yer

    // add a function something something
    const fetchWeatherData = async (cityName) => {
        try {
            setLoaded(false);
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`);
            if (response.status == 200){
                const data = await response.json();
                setWeatherData(data);
            }
            else {
                setWeatherData(null);
            }
            setLoaded(true);

        } catch(error) {
            Alert.alert('Error', error.message)
        }
    }

    // remember my city name
    useEffect(() => {
        fetchWeatherData('Istanbul');
    }, []);
    

   // if the data is not loaded, show a loading message

   if (!loaded) {
    return (
        <View style={styles.container} >
            <ActivityIndicator size='large' color="red" />
        </View>
    )
   }
   
   return (
    <View style={styles.container} >
        <Image blurRadius={70} position={'absolute'} style={styles.backgimage} source={require('../assets/Adsız.png')} />
        <View style={styles.header} >
            
        </View>
        <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} setSelectedCity={setSelectedCity} />
    </View>
);
};


export default Weather

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'mintcream',
      position: 'relative'
    },
    backgimage: {
      ...StyleSheet.absoluteFillObject,
    },
    header: {
        alignItems: 'center',
        backgroundColor: 'ligtsteelblue',
        height: 80,
        justifyContent: 'center',
    },
},

);