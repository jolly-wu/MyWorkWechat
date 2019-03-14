import React from 'react';
import { Platform, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export class NavTitleLabel extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {}
    render() {
        return (
            <TouchableOpacity
                style={{ paddingRight: 16, marginLeft: 10, flexDirection: 'row' }}
                onPress={this.props.onTapped}
            >
                <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 15, }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}