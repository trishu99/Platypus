/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import axios from 'axios';
import SendFilePlatyShare from './SendFilePlatyShare';

import GetFilePlatyShare from './GetFilePlatyShare';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
	Keyboard,
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
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
      <View style={styles.container}> 
      <ScrollView>
        <Text>Platy Share</Text>
        <SendFilePlatyShare/>
        <GetFilePlatyShare/>
        </ScrollView>
      </View>
      </TouchableWithoutFeedback>
    )
  }
}
const styles = StyleSheet.create({
 container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

 }
});


