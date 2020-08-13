import React from 'react'
import { StyleSheet, SafeAreaView, Text, ScrollView, View } from 'react-native'
import { ListItem, Avatar, Button } from 'react-native-elements'
import { Input, Item, Icon } from 'native-base'

const user = {
    uid: '100000',
    email: 'test@example.com',
    address: '東京都千代田区丸の内1-1-1',
    tel: '03-1234-5678',
}

export default UserScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
            <ScrollView>
                <View style={{ marginTop: 40, alignItems: 'center' }}>
                    <Avatar
                        size="medium"
                        title="OP"
                        rounded
                        source={{
                            uri: 'http://www.bluecode.jp/images/shiro.jpg',
                        }}
                        onPress={() => alert('変更しますか？')}
                    />
                </View>
                <Text style={{ alignSelf: 'center', margin: 20 }}>
                    基本情報
                </Text>
                <View
                    style={{ marginTop: 0, width: '100%', alignSelf: 'center' }}
                >
                    <ListItem
                        // key={1}
                        title={'UID: ' + user.uid}
                        leftIcon={
                            <Icon type="Feather" name="plus-circle" size={20} />
                        }
                        bottomDivider
                        titleStyle={{ color: '#aaa' }}
                        // chevron
                        // onPress={() => alert("UID")}
                    />
                    <ListItem
                        // key={2}
                        title={'EMail: ' + user.email}
                        leftIcon={
                            <Icon type="Feather" name="plus-circle" size={20} />
                        }
                        bottomDivider
                        chevron
                        onPress={() => alert('EMail')}
                    />
                </View>
                <Text style={{ alignSelf: 'center', margin: 20 }}>
                    拡張情報
                </Text>
                <View
                    style={{ marginTop: 0, width: '100%', alignSelf: 'center' }}
                >
                    <ListItem
                        // key={1}
                        title={'Phone: ' + user.tel}
                        leftIcon={
                            <Icon type="Feather" name="plus-circle" size={20} />
                        }
                        bottomDivider
                        chevron
                        onPress={() => alert('Phone')}
                    />
                    <ListItem
                        // key={2}
                        title={'住所: ' + user.address}
                        leftIcon={
                            <Icon type="Feather" name="plus-circle" size={20} />
                        }
                        bottomDivider
                        chevron
                        onPress={() => alert('住所')}
                    />
                    <ListItem
                        // key={2}
                        title={
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{ fontSize: 16, marginRight: 20 }}>
                                    配信：
                                </Text>
                            </View>
                        }
                        leftIcon={
                            <Icon type="Feather" name="plus-circle" size={20} />
                        }
                        bottomDivider
                    />
                </View>
                <Text style={{ alignSelf: 'center', margin: 20 }}>その他</Text>
                <Button
                    title="ログアウト"
                    buttonStyle={{ width: 300, alignSelf: 'center' }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
