import React, { Component } from 'react';
import axios from 'axios';

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



import Partitions from './Partitions';

export default class Space extends Component {
  constructor(props) {
    super(props);
    this.state ={
     };
  }
	render() {
		return (
			<View> 
          <Partitions />
			</View>
		)
	}
}
