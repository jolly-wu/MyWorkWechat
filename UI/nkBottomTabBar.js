import { BottomTabBar } from 'react-navigation-tabs'
import React from 'react'
import { View } from 'native-base'

export class NKBottomTabBar extends BottomTabBar {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    // alert('1222')
  }

  render () {
    // super.setRenderLabel(({ route, focused }) => {
    //   alert('111')
    //   return <View />
    // })
    return super.render()
  }
}
