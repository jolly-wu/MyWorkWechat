import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Longlist } from 'beeshell';
import { CommonCell } from './commonCell'
import { createStackNavigator, createAppContainer, NavigationActions, StackActions } from 'react-navigation';

export class WorkBenchPage extends React.Component {
    constructor(props) {
        super(props)
        this.onItemClick.bind(this);
    }
    state = { items: [1], align: '' }
    onRefresh = (param) => {
        var promise = new Promise(function (resolve, reject) {
            // 异步处理
            // 处理结束后、调用resolve 或 reject
            resolve(this.state.list)
        });
        return promise
    }

    onItemClick = () => {
        const pushAction = StackActions.push({
            routeName: 'WebPage',
            params: {
                title: "Github",
                url: 'https://github.com/facebook/react-native'
            },
        });
        this.props.navigation.dispatch(pushAction);
    }
    onRenderItem(item, index) {
        return (
            <CommonCell tagImage={require('../asserts/share_web_wechat.png')}
                bigTitle='Github'
                showIndicator={true}
                onTap={this.onItemClick}
            />
        )
    }

    render() {
        return (
            <View style={contactPageStyles.root}>
                <Longlist
                    data={this.state.items}
                    renderItem={({ item, index }) => {
                        return this.onRenderItem(item, index);
                    }}
                    hasRefreshControl={false}
                    onEndReached={this.onRefresh}
                    onRefresh={this.onRefresh}
                />
            </View >
        );
    }
}