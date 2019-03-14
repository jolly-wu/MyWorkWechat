import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { UserInfoCard } from './mine/userInfoCard'
import { AppStyle } from './theme'
export class MinePage extends React.Component {
    state = {}
    render() {
        return (
            <View style={{
                backgroundColor: AppStyle.backgroundColor,
                height: '100%'
            }}>
                <UserInfoCard
                    companyName="中控智慧"
                    userName="jolly.wu"
                    photo={require('../asserts/icon_redenv_bubble.png')}
                />
            </View>
        );
    }
}

styles = StyleSheet.create({

})
