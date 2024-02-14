import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Options from '../options';
import Weather from '..';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_left' }}>
                <Stack.Screen name='Weather' component={Weather} />
                <Stack.Screen name='Options' component={Options} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;