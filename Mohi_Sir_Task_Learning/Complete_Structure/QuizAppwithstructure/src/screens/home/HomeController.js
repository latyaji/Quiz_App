import  { Component } from "react";
import {QuizData}  from "../../datastore/Jsquestiondata";

console.log("Quizzz datata JavaScriptData",QuizData.JavaScriptData)
console.log("Quizzz datata ReactNativeData",QuizData.ReactNativeData)


export default class HomeController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // data: [],
            data: QuizData,
            course:'',
        }
    }
    dropfun = () => {
        this.setState({
            data: [
                { course_id: 1 ,course: "JavaScriptData" },
                { course_id :2 ,course: "ReactNativeData" }
            ]
        })
    }
    startfun = () => {
        
        console.log("this.state.course ========== ",this.state.course)

            if(this.state.course != ""){
                this.props.navigation.navigate('Quiz',{course_name : this.state.course})
                // console.log("this.state.course_name ========== ",this.state.course_name)

            }

            // old data
            // if(this.state.course != "" && this.state.course === "JAVASCRIPT"){
            //     this.props.navigation.navigate('Quiz',{course_name:this.state.course})
            // }
            // else if(this.state.course != "" && this.state.course === "REACT-NATIVE"){
            //     this.props.navigation.navigate('SeconQiz')
            // }
        
        else{
            alert("please select category of your course")
        }
    }
   
}
