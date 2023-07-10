import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PickUpScreen from './screens/PickUpScreen';
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen';
import Loginscreen from './screens/Loginscreen';


export default function StackNavigator() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Loginscreen}  options={{headShown:false}}/>
      <Stack.Screen name="Home" component={HomeScreen}  options={{headShown:false}}/>
      <Stack.Screen name="PicUp" component={PickUpScreen}  options={{headShown:false}}/>
      <Stack.Screen name="Cart" component={CartScreen}  options={{headShown:false}}/>
      <Stack.Screen name="Order" component={OrderScreen}  options={{headShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})