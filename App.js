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

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Todoリスト</Text>
            <TextInput style={styles.todoInput} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>追加する</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        textAlign: 'center',
        fontSize: 30,
    },
    todoInput: {
        backgroundColor: '#fff',
        width: '70%',
        alignSelf: 'center',
        marginTop: 20,
        padding: 10,
        fontSize: 20,
    },
    container: {
        backgroundColor: '#ddd',
        flex: 1,
    },
    button: {
        backgroundColor: 'blue',
        width: '60%',
        alignSelf: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
    },
})
