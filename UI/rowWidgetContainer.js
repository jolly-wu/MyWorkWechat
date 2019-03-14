import React from 'react';
import { Platform, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export class RowWidgetContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {}
    getChildItems() {
        if (!this.props.children) {
            return []
        }
        return this.props.children
    }
    render() {
        return (
            <View style=
                {{
                    flexDirection: 'row',
                    height: 40,
                    alignContent: 'center',
                    marginRight: 0,
                }}>
                {
                    React.Children.map(this.props.children, function (child) {
                        return child;
                    })
                }
            </View>
        );
    }
}