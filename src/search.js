import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';

const WeatherSearch = ({ fetchWeatherData }) => {
    const [cityName, setCityName] = useState('');

    const handleSearch = () => {
        fetchWeatherData(cityName);
    }

    return (
        <View style={styles.SearchBar}>
            <TextInput
                placeholder='Search City...                                                              '
                value={cityName}
                onChangeText={(text) => setCityName(text)}
                onSubmitEditing={handleSearch}  // Call handleSearch when 'Done' or 'Enter' is pressed
            />
            <EvilIcons
                name='search'
                size={28}
                color='black'
                onPress={handleSearch}  // Call handleSearch when search icon is pressed
            />
        </View>
    )
}

export default WeatherSearch;

const styles = StyleSheet.create({
    SearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(128, 128, 128, 0.1)',
    }
});
