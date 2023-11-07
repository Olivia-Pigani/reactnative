import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Bouton(props) {


const handlePress = () => {
    console.log("boutton handleDataPicker :" ,props.value);
    if (props.onPress) {
        props.onPress(props.value);
      }
}


  return (
    <View style={styles.aBouton}>
        <Pressable onPress={handlePress}>
      <Text style={styles.boutonCalc}>{props.value}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({


    boutonCalc : {
        backgroundColor:"white",
        color:"black",
        width:80, 
        minHeight: 80, 
        display: 'flex', 
        padding: 10, 
        borderRadius: 20, 
        textAlign:"center",
    },
    aBouton:{
       margin:2,
    }
 
})