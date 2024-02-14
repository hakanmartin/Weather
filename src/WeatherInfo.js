import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import React from 'react';
import ErrorItem from './ErrorItem';
import WeatherSearch from './search';
import { AntDesign } from '@expo/vector-icons';

const WeatherInfo = ({ weatherData, fetchWeatherData, selectedCity }) => {
    const navigation = useNavigation();

    let content = null;

    try {
        const {
            name,
            visibility,
            weather: [{ icon, description }],
            main: { temp, humidity, feels_like },
            wind: { speed },
            sys: { sunrise, sunset },
        } = weatherData;

        content = (
            <SafeAreaView style={styles.container}>
                <WeatherSearch style={styles.search} fetchWeatherData={fetchWeatherData} />
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <Pressable onPress={() => navigation.navigate('Options')}>
                        <AntDesign name="bars" size={45} color="black" marginLeft={10} />
                    </Pressable>
                    <Text style={styles.title}>{name}</Text>
                </View>
                <View style={styles.logo}>
                    <Image
                        style={styles.largeIcon}
                        source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
                    />
                    <Text style={styles.currentTemp}>{temp} °C</Text>
                </View>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.extraInfo} >
                <View style={styles.info} >
                    <Image
                    style={styles.smallIcon}
                    source = {require('../assets/tempic.png')}
                     />
                     <Text style={styles.infoText} >{feels_like} °C</Text>
                     <Text style={styles.infoText} >Feels Like</Text>
                </View>
                <View style={styles.info} >
                    <Image
                    style={styles.smallIcon}
                    source = {require('../assets/humidityic.png')}
                     />
                     <Text style={styles.infoText} >{humidity} %</Text>
                     <Text style={styles.infoText} >Humidity</Text>
                </View>
            </View>
            <View style={styles.extraInfo} >
                <View style={styles.info} >
                    <Image
                    style={styles.smallIcon}
                    source = {require('../assets/visibilityic.png')}
                     />
                     <Text style={styles.infoText} >{visibility}</Text>
                     <Text style={styles.infoText} >Visibility</Text>
                </View>
                <View style={styles.info} >
                    <Image
                    style={styles.smallIcon}
                    source = {require('../assets/windic.png')}
                     />
                     <Text style={styles.infoText} >{speed} m/s</Text>
                     <Text style={styles.infoText} >Wind Speed</Text>
                </View>
            </View>
            <View style={styles.extraInfo} >
                <View style={styles.info} >
                    <Image
                    style={styles.smallIcon}
                    source = {require('../assets/sunriseic.png')}
                     />
                     <Text style={styles.infoText} >{new Date(sunrise*1000).toLocaleString()}</Text>
                     <Text style={styles.infoText} >Sunrise</Text>
                </View>
                <View style={styles.info} >
                    <Image
                    style={styles.smallIcon}
                    source = {require('../assets/sunsetic.png')}
                     />
                     <Text style={styles.infoText} >{new Date(sunset*1000).toLocaleString()}</Text>
                     <Text style={styles.infoText} >Sunset</Text>
                </View>
            </View>
        </SafeAreaView>
        );
    } catch (error) {
        content = (
            <View style={styles.container}>
                <WeatherSearch style={styles.search} fetchWeatherData={fetchWeatherData} />
                <Pressable onPress={() => navigation.navigate('Options')}>
                        <AntDesign name="bars" size={45} color="black" marginLeft={10} />
                    </Pressable>
                <ErrorItem />
            </View>
        );
    }

    return content;
};

export default WeatherInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -52,
    },
    title: {
        textAlign:'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        marginLeft: 90,
        paddingRight: 80,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    largeIcon: {
        width: 200,
        height: 200,
    },
    currentTemp: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    extraInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7,
    },
    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: 'rgba(128, 128, 128, 0.4)',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'black'
    },
    smallIcon: {
        height: 40,
        width: 40,
        borderRadius: 40/2,
        marginLeft: 50,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 18,
    }

})