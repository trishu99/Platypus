
/*import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }


});*/






/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import axios from 'axios';

import GetFilePlatyShare from './GetFilePlatyShare';
import SendFilePlatyShare from './SendFilePlatyShare';

import Navigator from './routes/homeStack';
import DrawerNavigator from './routes/DrawerNavigator'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

 	render(){
    return(
        <DrawerNavigator/>
    )
  }
}
const styles = StyleSheet.create({
 container:{
   paddingTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

 },
 input:{
  borderWidth: 1,
  borderColor: '#777',
  padding: 8,
  margin: 10,
  width: 200,	
},
output:{
  flex : 1,
  padding: 10,
  margin: 10,
}
});

