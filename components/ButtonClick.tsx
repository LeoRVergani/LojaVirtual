import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native"

export default function ButtonClick () {
    return (
        <View>
            <TouchableOpacity style={styles.btnCentral} >
                <Text style={styles.textWhite}>Entrar</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    textWhite: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    btnCentral: {
        backgroundColor: '#622785',
        padding: 20,
        width: 150,
        borderRadius: 8,
        alignItems: 'center'
    }
});