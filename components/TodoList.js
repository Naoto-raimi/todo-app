import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Text, ListItem, Left, Icon, Body, Right } from "native-base";

const TodoList = (props) => {
    const { items, onItemCheck, onItemRemove } = props;
  
    return (
        <SafeAreaView>
            <FlatList
                data={items}
                contentContainerStyle={styles.listView}
                renderItem={({ item, index }) =>(
                    <ListItem icon>
                        <Left>
                            <Icon
                                type="MaterialCommunityIcons"
                                style={styles.checkbox}
                                name={item.checked ? "check-box-outline" : "checkbox-blank-outline"}
                                onPress={() => onItemCheck(index)}
                            />
                        </Left>
                        <Body>
                            <Text>{item.todoText}</Text>
                        </Body>
                        <Right>
                            <Icon
                                type="FontAwesome"
                                style={styles.icon}
                                name="trash"
                                onPress={() => onItemRemove(index)}
                            />
                        </Right>
                    </ListItem>)
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
  }
  
  export default TodoList;
  
  const styles = StyleSheet.create({
    listView: {
      flex: 1,
    },
    icon: {
      color: 'green',
      fontSize: 28,
    },
    checkbox: {
      color: 'green',
      fontSize: 28,
    },
  });