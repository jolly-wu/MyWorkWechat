import React, { Component } from 'react'
import { Platform, StyleSheet, Button, Image, Text, View, Easing, Animated, } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer, TabNavigator } from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';
import { AppStyle } from './theme'
import { MessagePage } from './messagePage'
import { ContactPage } from './contactPage'
import { WorkBenchPage } from './workbenchPage'
import { MinePage } from './minePage'
import { DepartmentContactPage } from './contact/departmentContactPage'
import { NavBackButton } from './navBackButton'
import { NavTitleLabel } from './navTitleLabel'
import { RowWidgetContainer } from './rowWidgetContainer'
import { ImageButton } from './imageButton'

const TabName = {
    Message: '消息',
    Contact: '通讯录',
    WorkBench: '工作台',
    Mine: '我'
}

const TabbarContainer = createAppContainer(
    createBottomTabNavigator(
        {
            '消息': createStackNavigator({
                '消息': {
                    screen: MessagePage,
                    headerMode: 'screen',
                    mode: Platform.OS === 'ios' ? 'modal' : 'card',
                    navigationOptions: (navigator) => {
                        return {
                            headerLeft: <NavTitleLabel title={TabName.Message} />,
                            headerRight: <RowWidgetContainer children={[
                                <ImageButton
                                    image={require('../asserts/more_search.png')}
                                />,
                                <ImageButton
                                    image={require('../asserts/add_emotion.png')}
                                />,

                            ]} />,
                            headerStyle: {
                                backgroundColor: AppStyle.tintColor,
                            },
                            headerTintColor: '#ffffff'
                        }
                    },
                },
            }
            ),
            '通讯录': createStackNavigator({
                Contact: {
                    screen: ContactPage,
                    headerMode: 'screen',
                    mode: Platform.OS === 'ios' ? 'modal' : 'card',
                    navigationOptions: (navigator) => {
                        return {
                            headerLeft: <NavTitleLabel title='中控智慧' />,
                            headerRight: <RowWidgetContainer children={[
                                <ImageButton
                                    image={require('../asserts/more_search.png')}
                                />,
                                <ImageButton
                                    image={require('../asserts/tab_app_active.png')}
                                />,

                            ]} />,
                            headerStyle: {
                                backgroundColor: AppStyle.tintColor,
                            },
                            headerTintColor: '#ffffff'
                        }
                    },
                },
                DepartmentContact: {
                    screen: DepartmentContactPage,
                    headerMode: 'screen',
                    mode: Platform.OS === 'ios' ? 'modal' : 'card',
                    navigationOptions: (navigator) => {
                        return {
                            headerLeft: <NavBackButton onTapped={() => {
                                navigator.navigation.goBack()
                            }} title={navigator.navigation.state.params.title} />,
                            headerStyle: {
                                backgroundColor: AppStyle.tintColor,
                            },
                            headerTintColor: '#ffffff',
                            headerTitleStyle: {
                                fontWeight: 'normal',
                            },
                        }
                    },
                }
            }, {
                    defaultNavigationOptions: {
                        gesturesEnabled: false,
                    },
                    transitionConfig: (context) => ({

                    })
                    // transitionConfig: () => ({
                    //     transitionSpec: {
                    //         duration: 300,
                    //         easing: Easing.out(Easing.poly(4)),
                    //         timing: Animated.timing,
                    //     },
                    //     screenInterpolator: sceneProps => {
                    //         const { layout, position, scene } = sceneProps;
                    //         const { index } = scene;

                    //         const height = layout.initHeight;
                    //         const translateY = position.interpolate({
                    //             inputRange: [index - 1, index, index + 1],
                    //             outputRange: [height, 0, 0],
                    //         });

                    //         const opacity = position.interpolate({
                    //             inputRange: [index - 1, index - 0.99, index],
                    //             outputRange: [0, 1, 1],
                    //         });

                    //         return { opacity, transform: [{ translateY }] };
                    //     },
                    // }),
                }
            ),
            '工作台': createStackNavigator({
                WorkBench: {
                    screen: WorkBenchPage,
                    headerMode: 'screen',
                    mode: Platform.OS === 'ios' ? 'modal' : 'card',
                    navigationOptions: (navigator) => {
                        return {
                            headerLeft: <NavTitleLabel title={TabName.WorkBench} />,
                            headerStyle: {
                                backgroundColor: AppStyle.tintColor,
                            },
                            headerRight: <RowWidgetContainer children={[
                                <ImageButton
                                    image={require('../asserts/tab_app_active.png')}
                                />,

                            ]} />,
                        }
                    },
                },
            }
            ),
            '我': createStackNavigator({
                Mine: {
                    screen: MinePage,
                    headerMode: 'screen',
                    mode: Platform.OS === 'ios' ? 'modal' : 'card',
                    navigationOptions: (navigator) => {
                        return {
                            headerLeft: <NavTitleLabel title={TabName.Mine} />,
                            headerStyle: {
                                backgroundColor: AppStyle.tintColor,
                            },
                            headerTintColor: '#ffffff'
                        }
                    },
                },
            }
            ),
        },
        {
            backBehavior: 'none',
            initialRouteName: '消息',
            tabBarOptions: {
                activeTintColor: '#5599ff',
                style: {
                    backgroundColor: AppStyle.barBackColor
                },
                indicatorStyle: {
                    opacity: 0
                },
                tabStyle: {
                    padding: 0
                },
                labelStyle: {
                    fontSize: 12,
                },
            },
            tabBarComponent: props =>
                <BottomTabBar
                    {...props}
                    style={{ borderTopColor: '#605F60', backgroundColor: AppStyle.barBackColor, height: 49, paddingTop: 0, }}
                />,
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    const { routeName } = navigation.state;
                    if (routeName === TabName.Message) {
                        return <Image source={focused ? require('../asserts/tab_message_active.png') : require('../asserts/tab_message_normal.png')}
                            style={{ width: 26, height: 26, tintColor: tintColor }}
                        />;
                    }
                    if (routeName === TabName.Contact) {
                        return <Image source={focused ? require('../asserts/tab_department_active.png') : require('../asserts/tab_department_normal.png')}
                            style={{ width: 26, height: 26, tintColor: tintColor }}
                        />;
                    }
                    if (routeName === TabName.WorkBench) {
                        return <Image source={focused ? require('../asserts/tab_app_active.png') : require('../asserts/tab_app_default.png')}
                            style={{ width: 26, height: 26, tintColor: tintColor }}
                        />;
                    }
                    if (routeName === TabName.Mine) {
                        return <Image source={focused ? require('../asserts/tab_me_active.png') : require('../asserts/tab_me_default.png')}
                            style={{ width: 26, height: 26, tintColor: tintColor }}
                        />;
                    }
                },
            }),
        }
    )
);

export class MainTabPage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <TabbarContainer />
        )
    }
}
