import React, { Component } from 'react'

import CalendarStrip from 'react-native-slideable-calendar-strip'
import { CalendarList } from 'react-native-calendars'
import { View, Text, Button } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

export class AttendacePage extends Component {
  constructor (props) {
    super(props)
    this.state = { onWeekMode: false, selectedDate: '2019-04-07' }
  }
  renderCalendar () {
    const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' }
    const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' }
    const workout = { key: 'workout', color: 'green' }

    return (
      <View>
        <View style={{ height: this.state.onWeekMode ? 110 : 0 }}>
          <CalendarStrip
            isChinese
            showWeekNumber
            showChineseLunar
            selectedDate={this.state.selectedDate}
            onPressDate={date => {
              this.setState({ selectedDate: date })
            }}
            onPressGoToday={today => {
              this.setState({ selectedDate: today })
            }}
            markedDate={[
              '2018-05-04',
              '2018-05-15',
              '2018-06-04',
              '2018-05-01'
            ]}
          />
        </View>

        <CalendarList
          current={this.state.selectedDate}
          pastScrollRange={24}
          futureScrollRange={24}
          horizontal
          pagingEnabled
          markedDates={{
            '2019-04-09': {
              dots: [vacation, massage, workout],
              selected: true,
              selectedColor: 'red'
            },
            '2019-04-09': { dots: [massage, workout], disabled: true }
          }}
          markingType={'multi-dot'}
          style={{ height: !this.state.onWeekMode ? 300 : 0 }}
        />
      </View>
    )
  }
  onSwipeUp () {
    this.setState({
      onWeekMode: true
    })
  }
  onSwipeDown () {
    this.setState({
      onWeekMode: false
    })
  }
  render () {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {this.renderCalendar()}
        <GestureRecognizer
          onSwipeUp={state => this.onSwipeUp()}
          onSwipeDown={state => this.onSwipeDown()}
        >
          <View style={{ height: 400, backgroundColor: 'red' }}>
            <Button
              title='打卡'
              onPress={() => {
                alert('打卡成功')
              }}
            />
          </View>
        </GestureRecognizer>
      </View>
    )
  }
}
