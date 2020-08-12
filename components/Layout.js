import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import {
    Container,
    Header,
    Body,
    Title,
    Content,
    Icon,
    Right,
    Left,
} from 'native-base'
import { preventAutoHide } from 'expo/build/launch/SplashScreen'

const Layout = ({ children, userOnPress, menuOnPress }) => {
    return (
        <Container>
            <Header style={styles.header}>
                <Left>
                    <TouchableOpacity onPress={menuOnPress}>
                        <Icon style={styles.icon} type="Feather" name="menu" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title style={styles.title}>やることリスト</Title>
                </Body>
                <Right>
                    <TouchableOpacity onPress={userOnPress}>
                        <Icon style={styles.icon} type="Feather" name="user" />
                    </TouchableOpacity>
                </Right>
            </Header>
            <View style={styles.container}>
                <Content style={styles.content}>{children}</Content>
            </View>
        </Container>
    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: 350,
    },
    header: {
        backgroundColor: 'green',
    },
    title: {
        color: 'white',
    },
    icon: {
        color: 'white',
    },
})
