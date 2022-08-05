import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Checkout, Home, Tracking } from './views';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Checkout" component={Checkout} options={{headerShown: false}}/>
        <Stack.Screen name="Tracking" component={Tracking} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}