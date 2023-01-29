import { StyleSheet  } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted/GetStarted';


const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})