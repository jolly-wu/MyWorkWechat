import React from 'react';
import { Button } from 'beeshell'
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import { AppStyle } from '../theme';

export class MsgCell extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {}
    render() {
        return (
            <View style={msgCellStyles.container}>
                <Image source={this.props.tagImage} />
                <View style={msgCellStyles.content}>
                    <View style={msgCellStyles.titleContainer}>
                        <Text style={msgCellStyles.title}>{this.props.bigTitle}
                        </Text>
                        <Text style={msgCellStyles.time}>
                            20:10
                        </Text>
                    </View>
                    <Text style={msgCellStyles.value}>{this.props.val}</Text>
                </View>
            </View>
        );
    }
}

msgCellStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20,
        height: 55,
        borderBottomColor: AppStyle.borderBottomColor,
        borderBottomWidth: AppStyle.borderBottomWidth,
    },
    tagImage: {
        width: 55,
        height: 55
    },
    content: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        marginLeft: 10,
    },
    titleContainer: {
        justifyContent: "flex-start",
        flexDirection: "row",
        width: '100%',
        flexGrow: 1,
        flexShrink: 1,
    },
    title: {
        marginTop: 10,
        flexGrow: 1,
        flexShrink: 1,
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'baseline',
        color: AppStyle.titleFontColor
    },
    time: {
        fontWeight: 'normal',
        fontSize: 12,
        alignSelf: 'baseline',
        flexGrow: 1,
        flexShrink: 1,
        textAlign: 'right',
        marginRight: 12,
        color: AppStyle.smContentColor
    },
    value: {
        marginTop: 0,
        flexGrow: 1,
        flexShrink: 1,
        width: '100%',
        fontSize: 12,
        color: AppStyle.smContentColor
    },
});
