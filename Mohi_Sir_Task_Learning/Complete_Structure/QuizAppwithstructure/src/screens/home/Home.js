import React from "react";
import { SafeAreaView, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './HomeStyles';
import HomeController from "./HomeController";
import {icon} from '../../assest';

export default class Home extends HomeController {

    render() {
        return (
            <SafeAreaView>
                <Text style={styles.text1}>QUIZ APP</Text>
                <TouchableOpacity
                    style={styles.touch1}
                    onPress={() => this.dropfun()} >
                    <TextInput 
                      placeholder="Choose the category" style={styles.txt4}>{this.state.course}</TextInput>
                    <Image
                        style={[styles.img1,{transform:this.state.data.length == 0 ? [{rotate: '270deg'}]:[{rotate: '360deg'}]}]}
                        source={icon} />
                </TouchableOpacity>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item, index }) => (
                        <>
                            <TouchableOpacity onPress={() => this.setState({ course: item.course, data: [] })}>
                                <Text style={styles.tex2}>{item.course}</Text>
                            </TouchableOpacity>
                        </>
                    )}
                />
                <TouchableOpacity 
                 onPress={() => this.startfun()}
                >
                    <Text style={styles.tex3}>Start Quiz</Text>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}

