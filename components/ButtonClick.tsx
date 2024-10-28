import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native"

export default function ButtonClick () {
    return (
        <View>
            <Link href="/listProducts" asChild>
                <TouchableOpacity style={styles.btnCentral} >
                    <Text style={styles.textWhite}>Entrar</Text>
                </TouchableOpacity>
            </Link>
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
        backgroundColor: '#b31d6a',
        padding: 20,
        width: 150,
        borderRadius: 8,
        alignItems: 'center'
    }
});