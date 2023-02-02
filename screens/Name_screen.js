import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from 'expo-constants';

import Name from "../components/Name";

export default function Name_screen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Name navigation={navigation} />
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