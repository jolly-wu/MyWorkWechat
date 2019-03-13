import React from 'react';
import { Platform, StyleSheet, Image, Text, Alert, View, TouchableHighlight } from 'react-native';
import { AppStyle } from '../theme'

/*
    props
    onTap:点击事件
*/

export const ContactCellItemType = {
    Guests: 0,
    Person: 1,
    Department: 2
}

export class ContactItemCell extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {}
    render() {
        return (
            <TouchableHighlight onPress={this.props.onTap} underlayColor="gray">
                <View style={contactItemStyles.container}>
                    <Image style={contactItemStyles.tagImage} source={this.props.photo}></Image>
                    <Text style={contactItemStyles.text}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>

        );
    }
}

contactItemStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20,
        height: 55,
        borderBottomColor: AppStyle.borderBottomColor,
        borderBottomWidth: AppStyle.borderBottomWidth
    },
    tagImage: {
        width: 40,
        height: 40,
        flexGrow: 0,
        flexShrink: 1,
        alignSelf: 'center',
    },
    text: {
        alignSelf: 'center',
        marginLeft: 12,
        flexGrow: 1,
        flexShrink: 1,
        fontSize: AppStyle.titleFontSize,
        color: AppStyle.titleFontColor,
        fontWeight: 'bold'
    }
})


