/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { setTheme } from './UI/theme'
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { AppContainer } from './route/route'
import { MainTabPage } from './UI/mainTabPage'
import { LoginPage } from './UI/loginPage'
export default class App extends Component {

  login() {

  }

  componentDidMount() {
  }

  render() {
    return (
      <AppContainer />
    );
  }
}



