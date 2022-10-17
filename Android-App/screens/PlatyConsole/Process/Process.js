import React, { Component } from 'react';
import axios from 'axios';
import AllProcessMemory from './AllProcessMemory';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class Process extends Component {
  constructor(props) {
    super(props);
    this.state ={
     };
  }
    componentDidMount() {   
    }
	render() {
		return (
			<View> 
        <AllProcessMemory/>
			</View>
		)
	}
}
