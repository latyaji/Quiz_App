import React, { Component, useRef } from "react";
import { View, Alert, Text, TouchableOpacity, Image, Modal, Dimensions, StyleSheet, SafeAreaView } from "react-native";
import QuizController from "./QuizController";
import Prevnextbtn from '../../component/Prevnextbtn'
import styles from './QuizStyles';
// import {JavascriptData} from '../../src/datastore/Jsquestiondata'
// import QuestionItemdata from "../../src/component/QuestionItemdata";
// import Prevnextbtn from '../../src/component/Prevnextbtn'
// import styles from '../../src/styles/Styles'
// import ScreenTimer from '../../src/screens/ScreenTimer'
import {crop} from '../../assest'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Quiz extends QuizController {

    // constructor(props) {
    //     super(props);
    //   }
    renderHeader = () => {
        return (
            <View style={styles.vi1}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Image source={crop} style={styles.backimg} /></TouchableOpacity>
            <TouchableOpacity onPress={() => this.resetfuncall()}><Text style={styles.text3}>Reset</Text></TouchableOpacity>
            {/* <ScreenTimer
                minutes={this.state.minutes}
                count={this.state.count}
            />  ye krna hai baad mai*/}
        </View>
        )
      }

      rendermodal = () =>{
        return(
            <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                this.setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.v4}>
                <View style={styles.v5}>
                    <Text style={styles.t2}>Text Score</Text>
                    {/* <Text style={styles.t3}>{this.state.questions.length}</Text> */}

                    <Text style={styles.t3}>{this.state.storescoreData.length}{' ' + ' / ' + this.state.questions.length}</Text>
                    {this.state.storescoreData.length > this.state.storescoreData.length/2 ? (<Text style={[styles.t2, { color: "green" }]}>Congratulation!!!</Text>) : (<Text style={[styles.t2, { color: "red" }]}>Fail</Text>)}
                    <TouchableOpacity
                        // onPress={() => { this.setModalVisible(!this.state.modalVisible) }}
                        onPress={() => { this.setModalVisible(false)}}
                        style={{ alignItems: "center" }}>
                        <Text style={styles.t9}>Close</Text>
                    </TouchableOpacity>


                </View>

            </View>
        </Modal>
        )
      }

      renderFooter = () =>{
        return (
            <View style={{ marginTop: 20 }}>
            <Prevnextbtn
                onClick={() => this.Prevfun()}
                nextfun={() => this.nextfuncall()}
                setModalVisiblefun={() => this.setModalVisible()}
                questions={this.state.questions}
                questionIndex={this.state.questionIndex}
            />

        </View>
        )
      }
   
    render() {
        // console.log("this state",this.state)
        console.log("this.state.questions datat 11",this.state.questions)
        // const propertyValues = Object.values(this.state.questions.JavaScriptData);

        //  console.log("propertyValues",propertyValues.Options);

        // console.log("OptionsOptions data",this.state.questions.JavaScriptData.data)


        const { modalVisible } = this.state;
        
        return (

            <SafeAreaView style={{ flex: 1, padding: 10, borderWidth: 1 }}>
                {this.renderHeader()}

               {
                 this.renderData(this.state.questions[this.state.questionIndex])
               }
               {this.renderFooter()}

                {/* modal code start */}
                {this.rendermodal()}

                {/* modal code end */}

            </SafeAreaView>
        )
    }
}
