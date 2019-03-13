import React, { Component } from 'react'
import { Platform, StyleSheet, Image, Text, View, Easing, Animated, } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer, TabNavigator } from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';
import { AppStyle } from './theme'
import { MessagePage } from './messagePage'
import { ContactPage } from './contactPage'
import { WorkBenchPage } from './workbenchPage'
import { MinePage } from './minePage'
import { DepartmentContactPage } from './contact/departmentContactPage'
import { NavBackButton } from './navBackButton'
const TabbarContainer = createAppContainer(
    createBottomTabNavigator(
        {
            Message: createStackNavigator({
                Message: {
                    screen: MessagePage,
                    headerMode: 'screen',
                    mode: Platform.OS === 'ios' ? 'modal' : 'card',
                    navigationOptions: () => ({
                        headerStyle: {
                            backgroundColor: AppStyle.tintColor,
                        },
                        title: '消息',
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {
                            fontWeight: 'normal',
                        },
                    }),
                },
            }
            ),
            Contact: createStackNavigator({
                Contact: {
                    screen: ContactPage,
                    headerMode: 'screen',
                    mode: Platform.OS === 'ios' ? 'modal' : 'card',
                    navigationOptions: (navigator) => {

                        return {
                            headerStyle: {
                                backgroundColor: AppStyle.tintColor,
                            },
                            title: '联系人',
                            headerTintColor: '#ffffff',
                            headerTitleStyle: {
                                fontWeight: 'normal',
                            },
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
            WorkBench: createStackNavigator({
                WorkBench: {
                    screen: WorkBenchPage,
                    headerMode: 'screen',
                    mode: Platform.OS === 'ios' ? 'modal' : 'card',
                    navigationOptions: () => ({
                        headerStyle: {
                            backgroundColor: AppStyle.tintColor,
                        },
                        title: '工作台',
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {
                            fontWeight: 'normal',
                        },
                    }),
                },
            }
            ),
            Mine: createStackNavigator({
                Mine: {
                    screen: MinePage,
                    headerMode: 'screen',
                    mode: Platform.OS === 'ios' ? 'modal' : 'card',
                    navigationOptions: () => ({
                        headerStyle: {
                            backgroundColor: AppStyle.tintColor,
                        },
                        title: '工作台',
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {
                            fontWeight: 'normal',
                        },
                    }),
                },
            }
            ),
        },
        {
            backBehavior: 'none',
            initialRouteName: 'Message',
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
                    if (routeName === 'Message') {
                        return <Image source={focused ? require('../asserts/tab_message_active.png') : require('../asserts/tab_message_normal.png')}
                            style={{ width: 26, height: 26, tintColor: tintColor }}
                        />;
                    }
                    if (routeName === 'Contact') {
                        return <Image source={focused ? require('../asserts/tab_department_active.png') : require('../asserts/tab_department_normal.png')}
                            style={{ width: 26, height: 26, tintColor: tintColor }}
                        />;
                    }
                    if (routeName === 'WorkBench') {
                        return <Image source={focused ? require('../asserts/tab_app_active.png') : require('../asserts/tab_app_default.png')}
                            style={{ width: 26, height: 26, tintColor: tintColor }}
                        />;
                    }
                    if (routeName === 'Mine') {
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
