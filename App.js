import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import ListItem from './components/ListItem'
import todos from './dummies/todos.json'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => (<ListItem defaultValue={item.defaultValue} />)}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
    }
});
