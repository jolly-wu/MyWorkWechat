import React from 'react';
import { Platform, StyleSheet, Image, Text, View } from 'react-native';
import { AppStyle } from '../theme'

export class GroupWidget extends React.Component {
    state = {}
    render() {
        return (
            <View style={groupWidgetStyles.container}>
                <Text style={groupWidgetStyles.name}>{this.props.name}</Text>
                {this.props.children}
            </View>
        );
    }
}

groupWidgetStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    name: {
        color: AppStyle.smContentColor,
        fontSize: 10,
        backgroundColor: AppStyle.backSectionColor,
        height: 16,
        paddingTop: 2,
        paddingLeft: 20,
        textAlignVertical: 'center',
    }
})