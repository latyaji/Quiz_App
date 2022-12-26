import { Text, View } from 'react-native'
import React, { Component } from 'react';
import styles from '../../src/assest/Images/crop.png';

export default class ScreenTimer extends Component {
  render() {
    return (
      <View>
        {/* <Text>ScreenTimer</Text> */}
        <Text style={styles.text3}>Timer {this.props.minutes} : {this.props.count}</Text>

      </View>
    )
  }
}