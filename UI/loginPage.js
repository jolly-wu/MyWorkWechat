/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Button } from 'beeshell'
import { createStackNavigator, createAppContainer, NavigationActions, StackActions } from 'react-navigation';


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
                <Button type="primary" responsive={false} size='sm' onPress={this.login} style={styles.button}>手机号登录</Button>
            </View >
        );
    }
}

loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: "row-reverse",
        backgroundColor: '#eeeeee',
    },
    button: {
        alignSelf: 'center',
        width: '90%',
        flex: 1,
        marginTop: 100,
    }
});


