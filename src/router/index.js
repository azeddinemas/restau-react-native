import { StyleSheet  } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {GetStarted,Home,Notification,Profile,Favorite} from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from '../compenents/molecules/BottomNavigator';
import Categories from '../screens/Categories';
import Detail from '../screens/Detail';


const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}} />
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}} />
        <Stack.Screen name="Categories" component={Categories} options={{headerShown:false}} />
        <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})