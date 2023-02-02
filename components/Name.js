import { StatusBar } from 'expo-status-bar';
import { DatePickerAndroid, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export default function Name({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.title_container}>
                <Text style={styles.title_text_container}>Simple Form</Text>
            </View>
            <View style={styles.border_container}></View>
            <View style={styles.name_container}>
                <Text style={styles.name_container_text}>Your name: </Text>
            </View>
            <View style={styles.name_input_container}>
                <TextInput style={styles.name_input} label="Full Name" placeholder="Ex: João Mateus"></TextInput>
            </View>
            <TouchableOpacity style={styles.SubmitButtom} >
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
    name_container: {
        marginHorizontal: 35,
        marginTop: 40,

    },
    name_container_text: {
        fontSize: 16,

    },
    name_input_container: {
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 10,
        marginTop: 12,
        borderWidth: 4,
        borderColor: 'grey',
        borderRadius: 30,
    },
    name_input: {
        marginLeft: 20,
    },
    SubmitButtom: {
        marginTop: 30,
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
