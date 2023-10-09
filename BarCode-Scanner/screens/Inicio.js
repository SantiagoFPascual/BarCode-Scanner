import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Boton from '../components/Boton'
import { useNavigation } from '@react-navigation/native'

const Inicio = () => {
    const navigation = useNavigation();
    const handleOnPress1 = () =>{
        navigation.navigate("Escaner")
          }
          const handleOnPress2 = () =>{
            navigation.navigate("CrearCodigo")
              }

  return (
    <View>
      <Text>Inicio</Text>
      <Boton
        texto="Escaner"
        onPress={handleOnPress1}
        style={styles.color123}/>
         <Boton
        texto="Crear Codigo"
        onPress={handleOnPress2}
        style={styles.color123}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    color123:{
      backgroundColor:"blue"
    },
  });
export default Inicio