import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from 'expo-constants';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Final_screen(
    { route }) {

    const { endereco, estado, bairro, cidade } = route.params;

    return (
        <View style={styles.container}>

            <View style={styles.title_container}>
                <Text style={styles.title_text_container}>Simple Form</Text>
            </View>

            <Text style={styles.cidade_text}>Endereço: </Text>
            <View style={styles.endereco_container}>
                <Text style={styles.endereco_text}>{endereco}</Text>
            </View>

            <Text style={styles.cidade_text}>Estado: </Text>
            <View style={styles.endereco_container}>
                <Text style={styles.endereco_text}>{estado}</Text>
            </View>

            <Text style={styles.cidade_text}>Bairro: </Text>
            <View style={styles.endereco_container}>
                <Text style={styles.endereco_text}>{bairro}</Text>
            </View>

            <Text style={styles.cidade_text}>Cidade: </Text>
            <View style={styles.endereco_container}>
                <Text style={styles.endereco_text}>{cidade}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: Constants.statusBarHeight
    },
    title_container: {
        height: 150,
        //backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    title_text_container: {
        //backgroundColor: 'green',
        marginBottom: 40,
        fontSize: 50,
        fontWeight: 'bold',
    },
    cidade_text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 15,
    },
    endereco_container: {
        borderWidth: 2,
        borderRadius: 30,
        height: 50,
        width: "auto",
        marginBottom: 10,
    },
    endereco_text: {
        fontSize: 16,
        marginTop: 10,
        marginHorizontal: 15,
    },

})