import React from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from "expo-constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const EscanerScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            console.log("useeffect")
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    };
        
    getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({data}) => {
        console.log("handlebar")
        setScanned(true);
        alert(`Codigo del codigo de barra: ${data}`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
    <View style={styles.container}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject}/>
        {scanned && <Button title={'Toca para escanear de vuelta'} onPress={() => setScanned(false)}/>}
    </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#FFFAF3",
        flex: 1,
    },
    });

export default EscanerScreen;
