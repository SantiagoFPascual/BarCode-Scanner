import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font } from 'expo';

const CrearCodigo = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        '3OF9_NEW': require("../assets/fonts/3OF9_NEW.ttf"),
      });
      setIsFontLoaded(true);
    }

    loadFont();
  }, []);

  return (
    <View>
      {isFontLoaded ? (
        <Text style={styles.textoCodigoDeBarra}>CrearCodigo</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  textoCodigoDeBarra: {
    marginTop: '15%',
    fontFamily: '3OF9_NEW',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});

export default CrearCodigo;