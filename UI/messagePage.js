import React, { Component } from 'react'
import { Longlist } from 'beeshell';
import { MsgCell } from './messageCell/groupChatMsgCell'
import { Platform, StyleSheet, Text, View } from 'react-native';

const MsgType = {
    MyOtherCmpMsg: 0,
    MyAppMindMsg: 1,
    AWeekSummaryMsg: 2,
    DeviceAssistantMsg: 3,
    GroupChatMsg: 4
}

export class MessagePage extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [] }
    }

    componentDidMount() {
        this.setState({
            list: [
                {
                    id: MsgType.GroupChatMsg
                },
                // {
                //     id: MsgType.MyAppMindMsg
                // },
                // {
                //     id: MsgType.MyOtherCmpMsg
                // },
                // {
                //     id: MsgType.AWeekSummaryMsg
                // },
                // {
                //     id: MsgType.DeviceAssistantMsg
                // }
            ]
        })
    }

    onRenderItem(item, index) {
        return (
            <MsgCell
                tagImage={require('../asserts/fw_wechat.png')}
                bigTitle="中控智慧"
                val="欢迎来到这里"
            >
            </MsgCell>
        )
    }
    onRefresh = (param) => {
        var promise = new Promise(function (resolve, reject) {
            // 异步处理
            // 处理结束后、调用resolve 或 reject
            resolve(this.state.list)
        });
        return promise
    }
    render() {
        return (
            <Longlist
                data={this.state.list}
                renderItem={({ item, index }) => {
                    return this.onRenderItem(item, index);
                }}
                hasRefreshControl={false}
                onEndReached={this.onRefresh}
                onRefresh={this.onRefresh}
            />
        );
    }

}