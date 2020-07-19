import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const MyListItem = (props) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
                <MaterialCommunityIcons name="checkbox-blank-outline" size={42} color="black" />
            </View>
            <TextInput style={styles.todoInput} defaultValue={props.defaultValue}/>
            <View style={styles.rightContainer}>
                <MaterialCommunityIcons name="delete-circle-outline" size={42} color="black" />
            </View>
        </View>
    )
}

export default ListItem;

const styles = StyleSheet.create({
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