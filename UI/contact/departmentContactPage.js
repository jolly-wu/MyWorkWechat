import React from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Longlist } from 'beeshell';
import { ContactItemCell, ContactCellItemType } from '../messageCell/contactItemCell'
import { createStackNavigator, createAppContainer, NavigationActions, StackActions } from 'react-navigation';

export class DepartmentContactPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { list: [] }
    }
    onRefresh = (param) => {
        var promise = new Promise(function (resolve, reject) {
            // 异步处理
            // 处理结束后、调用resolve 或 reject
            resolve(this.state.list)
        });
        return promise
    }

    onItemClick(item) {
        if (item.id === ContactCellItemType.Department) {
            const pushAction = StackActions.push({
                routeName: 'DepartmentContact',
                params: {
                    title: item.name,
                },
            });

            this.props.navigation.dispatch(pushAction);
        }
    }

    onRenderItem(item, index) {
        return this.state.list.map((item, index) => {
            return (
                <ContactItemCell
                    key={item.name}
                    text={item.name}
                    photo={item.imagePath}
                    onTap={() => {
                        this.onItemClick(item)
                    }}
                />
            )
        })
    }
    componentDidMount() {
        this.setState({
            list: [
                {
                    id: ContactCellItemType.Department,
                    imagePath: require('../../asserts/contacts_folder.png'),
                    name: '总工办二部'
                },
                {
                    id: ContactCellItemType.Person,
                    imagePath: require('../../asserts/conversation_phone_icon.png'),
                    name: 'larry'
                }
            ]
        })
    }
    render() {
        return (
            <Longlist
                data={this.state.list}
                renderItem={({ item, index }) => {
                    return this.onRenderItem(item, index);
                }}
                hasRefreshControl={false}
                onEndReached={this.onRefresh}
                onRefresh={this.onRefresh}
            />
        );
    }
}