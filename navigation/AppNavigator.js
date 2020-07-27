import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Book" 
            component={BookScreen}
            options={{headerShown: false}} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}