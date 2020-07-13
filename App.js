import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <View style={styles.leftContainer}>

                </View>
                <View style={styles.centerContainer}>

                </View>
                <View style={styles.rightContainer}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    itemContainer: {
        height: 60,
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        flexDirection: "row" 
    },
    leftContainer: {
        backgroundColor: "blue",
        width: 60
    },
    centerContainer: {
        backgroundColor: "red",
        flex: 1
    },
    rightContainer: {
        backgroundColor: "yellow",
        width: 60
    }
});
