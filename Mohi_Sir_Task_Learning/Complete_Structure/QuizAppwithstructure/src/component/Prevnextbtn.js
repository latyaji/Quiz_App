import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react';
import styles from '../../src/styles/Styles';

export default class Prevnextbtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Next: 'Next',
            Submit: 'Submit'
        }
    }
    render() {
        return (
            <View style={styles.vi2}>
                {this.props.questionIndex == 0 ? (
                    <TouchableOpacity onPress={() => this.props.onClick()}>
                    </TouchableOpacity>) :

                    (<TouchableOpacity onPress={() => this.props.onClick()}
                        style={{ backgroundColor: this.props.questionIndex == 0 ? "grey" : "purple", width: 100, height: 50, borderRadius: 12, marginLeft: 20, justifyContent: "center", alignItems: "center" }} >
                        <Text style={{ color: "#fff" }}>Previous</Text>
                    </TouchableOpacity>)}


                {this.props.questionIndex == this.props.questions.length - 1 ? (
                    <TouchableOpacity
                        // onPress={() => this.props.setModalVisiblefun()}
                         onPress={() => this.props.nextfun()}
                        style={styles.t7} >
                        <Text style={{ color: "#fff" }}>{this.state.Submit}</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() => this.props.nextfun()}
                        style={styles.t1} >
                        <Text style={styles.t6}>{this.state.Next}</Text>
                    </TouchableOpacity>
                )
                }

{/* {this.props.questionIndex == this.props.questions.length - 1} ? (<Text style={styles.t6}>{this.state.Submit}</Text>) : (<Text style={styles.t6}>{this.state.Next}</Text>) */}


                {/* {his.props.questionIndex == this.props.questions.length - 1} ? () : () */}
            </View>
        )
    }
}