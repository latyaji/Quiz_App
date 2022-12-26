import React, { Component } from "react";
// import {JavascriptData} from '../../../src/datastore/Jsquestiondata'
import QuestionItemdata from '../../../src/component/QuestionItemdata'
// console.log("javadata",JavascriptData)
import { QuizData } from "../../datastore/Jsquestiondata";
import { View, Alert, Text, TouchableOpacity, Image, Modal, Dimensions, StyleSheet, SafeAreaView } from "react-native";
// import {View,Text} from 'react-native';

// console.log("QuizData *******" , QuizData.JavaScriptData)
// let storescoreData = []


export default class QuizController extends Component {
    intervalId
    constructor(props) {
        super(props)
        this.state = {
            minutes: 0,
            count: 0,
            questionIndex: 0,
            questions: QuizData,
            modalVisible: false,
            datacount: "",
            storedata: "",
            storescoreData : []
        }

    }

    filterFuncall = () => {
        console.log("**", this.state.questions, QuizData)
        // return
        const newVar = QuizData.filter((value) => {
            if(value.Category == this.props.route.params.course_name) 
              return value
        })
        // console.log("newVar data Category",newVar)
        // console.log("newVar data",typeof(newVar))
        this.setState({questions:newVar[0].data})

    }


    componentDidMount() {
        console.log("this  ===++++======== questions",this.state.questions)
        console.log("course_name @@@@@ ",this.props.route.params.course_name)
        this.filterFuncall()
        // const array1 = this.state.questions.filter((x)=>{
        //     console.log("itemmmmmm",this.state.questions)
        //     return
        //     if(this.props.state.params.course_name == this.state.questions)
        //     {
        //         return x
        //     }
        //     // this.setState({array1:array1})

        // })


        // this.intervalId = setInterval(() => {
        //     this.setState({ count: this.state.count + 1 })
        //     if (this.state.count == 59) {
        //         this.setState({ minutes: +1 })
        //         Alert.alert(
        //             'Your Quiz time out',
        //             'Please Press Ok',
        //             [
        //                 { text: 'OK', onPress: () => this.props.navigation.navigate('HomeScreen', clearInterval(this.intervalId)) },
        //             ]
        //         );
        //     }
        // }, 1000)

    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    renderData = (item, index) => {
        console.log("item datatatat",item)
        console.log("this optionnn",this.state.questions)


        return (
            <QuestionItemdata
                Quizdta={item}
                onClick={(val) => {
                          this.state.questions.filter((value) => {

                        // console.log("value.id ******",value.id)
                        // console.log("item.id *** ",item.id)

                        
                        if (item.id == value.id) {
                            value.userselect = val
                            // console.log("userselecteddd",val)
                        }
                    })
                    this.setState({ questions: this.state.questions })


                }}
            />
           
        )

    }

    setModalVisible = (visible) => {
        // console.log("moda;;l;", this.state.questions)

        this.state.questions.filter((item, index) => {
            console.log("item.correct ****",item.correct)
            console.log("item.userselect ======= ",item.userselect)

            if (item.correct == item.userselect) {
                this.state.storescoreData.push(item.correct)
                return this.state.storescoreData

                // storescoreData = 1 + this.state.score
                // this.setState({ storescoreData: this.state.score })


                // this.state.score = 1 + this.state.score
                // this.setState({ score: this.state.score })
                // console.log("SCore total",(this.state.score))

            }


        })
        this.setState({ modalVisible: visible });
        // this.setState({storescoreData : null})
        // this.props.navigation.navigate("Home")
        // console.log("storescoreData",this.state.storescoreData)
    }
    resetfuncall() {
       let a =  this.state.questions.filter((item,index) =>{
             return item.userselect = ''
            // console.log("item value",item.userselect)
        })
        console.log("aaaaa========>",a)
    //     console.log("reset call",this.state.questions)
        
    //    if(this.state.questions[this.state.questionIndex].userselect != '')
    //    {
    //         this.setState( {null : this.state.questions[this.state.questionIndex].userselect} )
    // }
    // this.state.questions.
    }
    Prevfun() {
        if (this.state.questionIndex > 0) {
            this.setState({ questionIndex: this.state.questionIndex - 1 })
        }
        // else if(this.state.datacount == this.state.questionIndex)
        // {
        //     return
        // }
        // else if(this.setState({ datacount: this.state.datacount}))
    }
    nextfuncall() {

        if (this.state.questions[this.state.questionIndex].userselect == '') {
            alert("please select any one option")
        }
        else if(this.state.questions.length -1 == this.state.questionIndex )
        {
            // alert("last index call here");
            this.setModalVisible()
    33    
        }
        
        else {
            //    console.log("checck datat length",this.state.questions.length)
               this.setState({ questionIndex: this.state.questionIndex + 1 })
        }

        // else { alert("QUIZ FINSHED HERE") }

    }

}