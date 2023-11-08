import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Details from './screen/Details'
import Display from './screen/Display'
import Form from './screen/Form'


const Tab = createBottomTabNavigator()


export default function App() {


  return (
  
<NavigationContainer >
<Tab.Navigator screenOptions={{tabBarIconStyle:{display:"none"},tabBarLabelPosition: "beside-icon",headerShown:false}}>
    <Tab.Screen name='Details' component={Details}/>
    <Tab.Screen name='Display' component={Display}/>
    <Tab.Screen name='Form' component={Form}/>
</Tab.Navigator>

</NavigationContainer>



  )
}

const styles = StyleSheet.create({})