import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Bouton({isGrey,isWhite,value,onPress}) {


const handlePress = () => {
    console.log("boutton handleDataPicker :" ,value);
    if (onPress) {
        onPress(value);
      }
}


  return (
    <View  style={isWhite ? [styles.aBouton,styles.isWhite] :  [styles.aBouton,styles.isGrey]}>
        <Pressable onPress={handlePress} style={({pressed})=>pressed && styles.pressedItem}>
      <Text style={styles.boutonCalc}>{value}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({


    boutonCalc : {
        color:"black",
        width:80, 
        minHeight: 80, 
        display: 'flex', 
        padding: 10, 
        borderRadius: 20, 
        textAlign:"center",
        fontSize:30
    },
    aBouton:{
       margin:2,
    },
    isGrey:{
      backgroundColor:"grey",
    },
    isWhite:{
      backgroundColor:"white"
    },
    pressedItem:{
      backgroundColor:"yellow",
    }
 
})