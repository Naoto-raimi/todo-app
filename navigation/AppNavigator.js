import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="User" component={UserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
