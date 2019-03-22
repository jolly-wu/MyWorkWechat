import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

export class IWebView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <WebView
                source={{ uri: this.props.navigation.state.params.url }}
                style={{ marginTop: 0 }}
            />
        );
    }
}
