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
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <View style={styles.leftContainer}>
                    <MaterialCommunityIcons name="checkbox-blank-outline" size={42} color="black" />
                </View>
                <TextInput style={styles.todoInput}/>
                <View style={styles.rightContainer}>
                    <MaterialCommunityIcons name="delete-circle-outline" size={42} color="black" />
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
        backgroundColor: "#fff",
        width: 60,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    centerContainer: {
        flex: 1
    },
    rightContainer: {
        backgroundColor: "#fff",
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    todoInput: {
        flex: 1,
        backgroundColor: "#fff",
        fontSize: 20
    }
});
