import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from 'expo-constants';

import Email from 'C:/Users/Camillo/Documents/Mobile Projects/Desafio-Extrato-Judiciario/Simple_Form/App/components/Email.js';

export default function Email_screen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Email navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: Constants.statusBarHeight

    }
})