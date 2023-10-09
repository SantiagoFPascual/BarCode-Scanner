import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function Menu({ navigation }) {

    return (
        <View style={[styles.menu]}>
        <Pressable
            style={[styles.button]}
            onPress={() => navigation.navigate("Escaner")}
            
        >
            <Text style={[styles.textPressable]}>1</Text>
        </Pressable>
        <Pressable
            style={[styles.button]}
            onPress={() => navigation.navigate("CrearCodigo")}
        >
            <Text style={[styles.textPressable2]}>2</Text>
        </Pressable>
        
        </View>
    );
    }

    const styles = StyleSheet.create({
    menu: {
        display: "flex",
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 100,
        position: "absolute",
        bottom: 0,
        borderTopWidth: 5,
        botderRadius: 10,
        borderTopColor: "white",
    },
    textPressable: {
        textAlign: "center",
        color: 'green',
        fontSize:30,
    },
    textPressable2: {
        textAlign: "center",
        color: 'red',
        fontSize:30,
    },
    textPressable3: {
        textAlign: "center",
        color: 'blue',
        fontSize:30,
    },
    button: {
        width: "33%",
        height: "100%",
        display: "flex",
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth:1
        
    },

    });