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


export default class PhysicalCores extends Component {
  constructor(props) {
    super(props);
    this.state ={
      PhysicalCores : 0
    };
  }

    componentDidMount() {
        axios.get('http://10.0.2.2:5000/physicalCores')
            .then(response => {
                this.setState({
                    PhysicalCores : response.data
                });
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })
    }

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>No of Physical Cores {this.state.PhysicalCores} </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 10,
     textAlign:'center',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
 
  },
  text:{
    padding: 10,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: 'black',

},
})

