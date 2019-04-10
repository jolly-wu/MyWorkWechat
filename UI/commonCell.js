import React from 'react';
import { Button } from 'beeshell'
import { Platform, StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import { AppStyle } from './theme';

export class CommonCell extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {}
    renderIndicator() {
        if (this.props.showIndicator) {
            return (
                <Text style={{
                    fontSize: 14, color: 'gray', alignSelf: 'center',
                }}>
                    >
                </Text>
            )
        }
    }
    render() {
        return (
            <TouchableHighlight onPress={this.props.onTap} underlayColor="gray">
                <View style={commonCellStyles.container}>
                    <Image source={this.props.tagImage} />
                    <Text style={commonCellStyles.title}>{this.props.bigTitle}</Text>
                    {
                        this.renderIndicator()
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

commonCellStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignContent: 'center',
        marginLeft: 20,
        height: 55,
        borderBottomColor: AppStyle.borderBottomColor,
        borderBottomWidth: AppStyle.borderBottomWidth,
    },
    tagImage: {
        width: 55,
        height: 55,
    },
    title: {
        marginTop: 10,
        flexGrow: 1,
        flexShrink: 1,
        fontSize: 15,
        fontWeight: 'bold',
        color: AppStyle.titleFontColor,
        marginLeft: 20,
        height: 55,
    },
});
