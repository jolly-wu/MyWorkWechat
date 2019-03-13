import React from 'react';
import { Platform, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export class NavBackButton extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {}
    render() {
        return (
            <TouchableOpacity
                style={{ paddingRight: 15, marginLeft: 5, flexDirection: 'row' }}
                onPress={this.props.onTapped}
            >
                <Image
                    source={require('../asserts/back_arrow.png')}
                    style={{ width: 20, height: 20, tintColor: 'white', alignSelf: 'center' }}
                />
                <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}