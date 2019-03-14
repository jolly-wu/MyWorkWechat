/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'beeshell'
import { createStackNavigator, createAppContainer, NavigationActions, StackActions } from 'react-navigation';
import { AppStyle } from './theme';


export class LoginPage extends Component {
    constructor(props) {
        super(props);
        //注意:绑定this指针，在login函数才能访问到props里面内容
        this.login = this.login.bind(this);
    }

    login() {
        //重置导航栈并跳转
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            < View style={loginStyles.container} >
                <View style={loginStyles.logo}>
                    <Image source={require('../asserts/AppIcon60x60.png')}
                        resizeMode='center'
                        style={{
                            width: '100%'
                        }}
                    >
                    </Image>
                    <Text style={{
                        width: '100%',
                        textAlign: 'center',
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: AppStyle.tintColor
                    }}>
                        企业微信
                    </Text>
                </View>

                <View style={loginStyles.bottom}>
                    <Button type="primary" responsive={true} size='sm'
                        textColorReverse={true}
                        onPress={this.login} style={styles.button}>微信登录
                    </Button>
                    <TouchableOpacity
                        style={{
                            paddingRight: 15, marginLeft: 5, flexDirection: 'row',
                        }}
                        onPress={this.login}
                    >
                        <Text style={{
                            height: 40,
                            lineHeight: 40,
                            width: '100%',
                            textAlign: 'center',
                            color: AppStyle.tintColor
                        }}>
                            手机号登录
                    </Text>
                    </TouchableOpacity>

                </View>
            </View >
        );
    }
}

loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        height: '100%',
        backgroundColor: 'white'
    },
    bottom: {
        width: '100%',
        marginTop: 'auto',
        marginBottom: 100,
    },
    logo: {
        width: '100%',
        height: 100,
        marginTop: 200,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    button: {
        alignSelf: 'center',
        // width: '90%',
        height: 40,
        // flex: 0,
        flexGrow: 1,
        marginTop: 20
    }
});


