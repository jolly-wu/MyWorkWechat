/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { setTheme } from './UI/theme'
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { AppContainer } from './route/route'
import { MainTabPage } from './UI/mainTabPage'
import { LoginPage } from './UI/loginPage'
import { LocationStorage } from './global'
import { GeoLocation } from './geoLocation/geoLocation'
import {
  NotificationManager,
  NotifyRepeatType
} from './notification/notification'
export default class App extends Component {
  geoLocation = new GeoLocation()
  notification = new NotificationManager()
  login() {}

  componentDidMount() {
    this.requestLocation()
    this.startNotification()
  }

  requestLocation() {
    this.geoLocation.requestPermission().then(() => {
      this.geoLocation.getLatestLocation(1000).then(location => {
        // alert('location:' + location.latitude)
      })
    })
  }

  startNotification() {
    this.notification.cancelAllLocalNotifications()
    this.notification.localNotificationSchedule(
      {
        title: '考勤app',
        message: '欢迎打卡'
      },
      1 * 1000,
      NotifyRepeatType.Day
    )
  }

  render() {
    return <MainTabPage />
  }
}
