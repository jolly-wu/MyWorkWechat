import React from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Longlist } from 'beeshell';
import { GroupWidget } from './messageCell/groupWidget'
import { ContactItemCell, ContactCellItemType } from './messageCell/contactItemCell'
import { createStackNavigator, createAppContainer, NavigationActions, StackActions } from 'react-navigation';

class IndicatorIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { items: [], align: '' }
    }
    indicatorIndexStyle = StyleSheet.create({
        root: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            width: 30,
            height: Dimensions.get('window').height - 48, //垂直居中
            position: 'absolute',
            //<---向右靠齐
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            //--->
            zIndex: 100
        },
        item: {
            width: '100%',
            textAlign: 'center',
        }
    })

    componentDidMount() {
        this.setState({
            items: ['A', 'B', 'C', '#']
        })
    }

    render() {
        return (
            <View style={this.indicatorIndexStyle.root}>
                {
                    this.state.items.map((item, index) => {
                        return (
                            < Text style={this.indicatorIndexStyle.item} key={index}>
                                {item}
                            </Text>
                        )
                    })
                }
            </View >
        );
    }
}

export class ContactPage extends React.Component {
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

    onItemTaped = (item) => {
        if (item.id === ContactCellItemType.Person) {

        }
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
        return (//遍历字典数组
            Object.keys(item).map((key, index) => {
                return item[key].map((itemKey, idx) => {
                    imagePath = itemKey.imagePath
                    return (
                        <GroupWidget name={key} key={key}
                            children={
                                <ContactItemCell
                                    key={idx}
                                    text={itemKey.name}
                                    photo={imagePath}
                                    onTap={() => {
                                        this.onItemTaped(itemKey)
                                    }}
                                />
                            }
                        />)
                })
            }
            )
        )
    }

    render() {
        return (
            <View style={contactPageStyles.root}>
                <Longlist
                    data={this.state.list}
                    renderItem={({ item, index }) => {
                        return this.onRenderItem(item, index);
                    }}
                    hasRefreshControl={false}
                    onEndReached={this.onRefresh}
                    onRefresh={this.onRefresh}
                />
                <IndicatorIndex />
            </View >
        );
    }

    componentDidMount() {
        this.setState({
            list: [
                {
                    我的客户: [
                        {
                            id: ContactCellItemType.Guests,
                            imagePath: require('../asserts/share_web_wechat.png'),
                            name: '我的客户'
                        }
                    ]
                },
                {
                    J: [
                        {
                            id: ContactCellItemType.Person,
                            imagePath: require('../asserts/pstn_icon_recall.png'),
                            name: 'jolly'
                        }
                    ]
                },
                {
                    '#': [
                        {
                            id: ContactCellItemType.Department,
                            imagePath: require('../asserts/contacts_folder.png'),
                            name: '厦门中控'
                        }
                    ]
                },
            ]
        })
    }
}

contactPageStyles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }
})
