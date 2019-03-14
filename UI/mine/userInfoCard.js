import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { AppStyle } from '../../UI/theme'
export class UserInfoCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={this.styles.root}>
                <View style={this.styles.header}>
                    <Text style={{
                        fontSize: AppStyle.smContentFontSize,
                        color: AppStyle.smContentColor,
                        marginTop: 20,
                        flexGrow: 1,
                        flexShrink: 0
                    }}>{this.props.companyName}</Text>
                    <View style={{
                        flexGrow: 1,
                        flexShrink: 0,
                    }}>
                        <Image source={this.props.photo}
                            style={{
                                marginRight: 'auto',
                                marginLeft: 'auto',
                                right: 0,
                                position: 'absolute',
                                width: 50,
                                height: 50,
                                marginTop: 10,

                            }}
                        />
                    </View>
                </View>

                <Text style={{
                    fontSize: AppStyle.titleFontSize,
                    color: AppStyle.titleFontColor,
                    marginBottom: 15
                }}>
                    {this.props.userName}
                </Text>

                <View style={this.styles.bottom}>
                    <Text
                        style={{
                            color: AppStyle.smContentColor,
                            fontSize: AppStyle.smContentFontSize,
                            alignSelf: 'center'
                        }}
                    >对外名片
                    </Text>
                    <Image
                        style={{
                            backgroundColor: 'green',
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            right: 0,
                            position: 'absolute',
                            marginRight: 20
                        }}
                        source={require('../../asserts/icon_qrcore_scanning.png')}>
                    </Image>
                </View>
            </View>
        );
    }

    styles = StyleSheet.create({
        root: {
            flexDirection: 'column',
            borderWidth: 1,
            borderColor: AppStyle.borderBottomColor,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: 'white'
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 0,
            width: '100%',
            height: 70,
        },
        userName: {

        },
        bottom: {
            flexDirection: 'row',
            borderTopColor: AppStyle.borderBottomColor,
            borderTopWidth: 1,
            marginLeft: -20,
            marginRight: -20,
            paddingLeft: 20,
            paddingRight: 20,
            height: 40,
        }
    })
}