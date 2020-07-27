import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import { Container, Header, Body, Title, Content, Icon, Right, Left } from "native-base";
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

const Layout = ({children, onPress}) => {
    return (
        <Container>
            <Header style={styles.header}>
                <Left>
                    <Icon style={styles.icon} type="Feather" name='menu' onPress={onPress} /> 
                </Left> 
                <Body>
                    <Title style={styles.title}>やることリスト</Title>
                </Body> 
                <Right>
                    <Icon style={styles.icon} type="Feather" name='user' onPress={onPress} /> 
                </Right>       
            </Header>
            <View style={styles.container}>
                <Content style={styles.content}>
                    {children}
                </Content>
            </View>
        </Container>
    )
}

export default Layout;

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
  }
});