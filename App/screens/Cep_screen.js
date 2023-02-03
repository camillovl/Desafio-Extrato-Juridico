import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from 'expo-constants';

import Cep from "../components/Cep";

export default function Cep_screen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Cep navigation={navigation} />
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