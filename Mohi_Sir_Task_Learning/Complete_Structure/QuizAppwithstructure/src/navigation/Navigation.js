// import React, { Component } from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomeScreen from "../../src/screens/HomeScreen";
// // console.log("HomeSCreen",HomeScreen)
// // import First from "../../src/screens/First";
// // import SeconQiz from "../../src/screens/SeconQiz";


// const Stack = createNativeStackNavigator();
// // console.log("Stack",Stack)
// export default  class Navigation extends Component() {
// render(){
//     return (
//         <NavigationContainer>
//           <Stack.Navigator screenOptions={{headerShown: false,}} >
//                <Stack.Screen name="HomeScreen" component={HomeScreen} />
//                {/* <Stack.Screen name="First" component={First} />
//                <Stack.Screen name="SeconQiz" component={SeconQiz} /> */}
//           </Stack.Navigator>
//         </NavigationContainer>
//       );
// }
// }





 



// In App.js in a new project
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Quiz} from '../screens'


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;