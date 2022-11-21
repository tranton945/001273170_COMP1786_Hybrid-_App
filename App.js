import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {HomeScreen, NewTripScreen, TripListScreen} from './Screen';

// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm i react-native-screens
// npm install react-native-safe-area-context
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
          <Stack.Screen name={'NewTripScreen'} component={NewTripScreen} />
          <Stack.Screen name={'TripListScreen'} component={TripListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
