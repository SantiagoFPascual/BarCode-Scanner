import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default  Boton = ({texto, onPress, style}) => {

  const handleOnPress = () => {
    const date = new Date();
    onPress();
  }
  
  return (
    
    <TouchableOpacity 
        onPress={() => handleOnPress()}
        style={[styles.button1, style]}>
        <Text style={[styles.textButton]}>{texto}</Text>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
button1: {
    marginTop: 10,
    width:"70%",
    height: 60,
    borderRadius: 15
},
textButton: {
    color: 'white',
    textAlign: 'center',
    marginTop: 18,
    fontSize: 15,
  },})