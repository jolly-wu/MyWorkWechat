import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Longlist } from 'beeshell';
import { CommonCell } from './commonCell'
export class WorkBenchPage extends React.Component {
    state = { items: [1, 2, 3], align: '' }
    onRefresh = (param) => {
        var promise = new Promise(function (resolve, reject) {
            // 异步处理
            // 处理结束后、调用resolve 或 reject
            resolve(this.state.list)
        });
        return promise
    }
    onRenderItem(item, index) {
        return (//遍历字典数组
            <CommonCell tagImage={require('../asserts/share_web_wechat.png')}
                bigTitle='客户'
                showIndicator={true}
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