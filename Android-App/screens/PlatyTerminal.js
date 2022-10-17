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

import Header from '../shared/header';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  static navigationOptions= ({ screenProps}) => ({
    headerLeft:() => (
        <Button onPress={() => screenProps.openDraw()} title='open' color='red'/>
    )
})
  constructor(props){
    super(props);
    this.state = {
      cmd : '',
      reply: ''
    }
  }

  handleOnChangecmd = (e) => {
    console.log(e);
    this.setState({
      cmd : e ,
      reply: ''
    })
  }

  runcmd = async e => {
    e.preventDefault();
    const data = {
      'command' : this.state.cmd
    };
    console.log(data);

    await axios.post('http://10.0.2.2:5000/shell', data)
    .then(response => {
      console.log(response.data.join('\n'));
      this.setState({
        reply : response.data.join('\n')
      })
    })
    .catch(err => {
      console.log(err.response);
    });
  }
	render(){
    return(
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
      <View style={styles.container}> 
      <ScrollView>
      <Text style={styles.header}>Platy Terminal</Text>
        {/*<Text>Platy Share</Text>
        <GetFilePlatyShare />
        <SendFilePlatyShare/>*/}
         <TextInput 
         multiline
         style={styles.input}
         placeholder='enter cmd'
         placeholderTextColor='#ffffff'
         value={this.state.cmd}
				onChangeText={this.handleOnChangecmd}
         />
          <Button title='run'
          onPress={this.runcmd}/>
				  
		<Text style={styles.output}>{this.state.reply}</Text>
				  
    </ScrollView>   
      </View>
      </TouchableWithoutFeedback>
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
 header:{
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign:'center',
},
 input:{
  
  borderWidth: 1,
  borderColor: '#777',
  padding: 10,
  margin: 10,
  width: 200,
  backgroundColor: '#352d2b',
  color: '#ffffff',	
  fontSize: 20,
  height: 40,
  width: 300,
},

output:{
  flex : 1,
  padding: 10,
  margin: 10,
}
});

