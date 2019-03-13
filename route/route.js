// In App.js in a new project import React from "react"; 

import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginPage } from "../UI/loginPage"
import { MainTabPage } from "../UI/mainTabPage"
const RootStack = createStackNavigator(
    {
        Login: LoginPage
        ,
        Main: MainTabPage
    },
    {
        initialRouteName: "Login",
        headerMode: 'none',  //隐藏导航栏
    },
);

const AppContainer = createAppContainer(RootStack);
export { AppContainer }
