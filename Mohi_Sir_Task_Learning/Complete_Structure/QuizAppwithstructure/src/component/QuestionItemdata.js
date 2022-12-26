import { Dimensions, FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import styles from '../../src/styles/Styles';
const { height, width } = Dimensions.get('window');

export default class QuestionItemdata extends Component {

  state = {
    highlight: ''

  }
  render() {
    // console.log("this.props.Quizdta.userselect ",this.props.Quizdta.userselect)
    return (
      <View style={{ width: width }}>
        <Text style={styles.a}>{' ' + this.props.Quizdta.question}</Text>  

          <View style={{ marginTop: 20 }}>

          <FlatList
            data={this.props.Quizdta.Options}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => this.props.onClick(item)}
                  style={{
                    width: "90%", height: 60, elevation: 3,
                    backgroundColor: this.props.Quizdta.userselect == item ? "grey" : "#fff",
                    marginTop: 10, marginBottom: 10, alignSelf: "center", alignItems: "center", paddingLeft: 15, flexDirection: "row"
                  }}>
                  <View style={styles.a4}>
                    <Text style={styles.a3}>
                      {index == 0 ? 'A' : index == 1 ? 'B' : index == 2 ? 'C' : 'D'}
                    </Text>
                  </View>
                  <Text style={[styles.a5, { color: this.props.Quizdta.Options == item ? "#fff" : "#000" }]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )
            }
            }
          /> 
        </View>
      </View>
    )
  }
}








