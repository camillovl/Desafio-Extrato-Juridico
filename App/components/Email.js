import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

export default function Email({ navigation }) {

    const [email, setEmail] = useState("")
    const [checkValidEmail, setCheckValidEmail] = useState(false)

    const handleCheckEmail = (text) => {
        let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        setEmail(text)
        if (regex.test(text)) {
            setCheckValidEmail(false)
        } else {
            setCheckValidEmail(true)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.title_container}>
                <Text style={styles.title_text_container}>Simple Form</Text>
            </View>
            <View style={styles.email_container}>
                <Text style={styles.email_container_text}>Your Email: </Text>
            </View>
            <View style={styles.email_input_container}>
                <TextInput style={styles.email_input} placeholder="Ex: JoãoMateus@gmail.com" value={email} onChangeText={(text) => handleCheckEmail(text)} />
                {checkValidEmail ? <Text style={styles.textoFalhou}>Formato de Email não é valido</Text> : <Text style={styles.textoFalhou}></Text>}
            </View>
            <TouchableOpacity style={styles.SubmitButtom} onPress={() => navigation.navigate('Cep_screen')} >
                <Text style={styles.SubmitButtom_Text} >Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: Constants.statusBarHeight,
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
    email_container: {
        marginHorizontal: 35,
        marginTop: 30,
        marginBottom: 10,
    },
    email_container_text: {
        fontSize: 16,
    },
    email_input_container: {
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 15,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 30,
    },
    email_input: {
        marginLeft: 20,
        marginTop: 25,
    },
    textoFalhou: {
        marginLeft: 150,
        marginTop: 20,
        color: 'red',
        fontSize: 14,
    },
    SubmitButtom: {
        marginTop: 40,
        height: 50,
        marginHorizontal: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
    SubmitButtom_Text: {
        fontSize: 20,
        fontWeight: 'bold',
    }

});
