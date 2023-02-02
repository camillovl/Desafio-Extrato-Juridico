import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from 'expo-constants';

import Email from "../components/Email";

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