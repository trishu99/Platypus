import React, { Component } from 'react';
import axios from 'axios';

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
    FlatList,
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  


export default class AllNICs extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allNICs : []
    };
  }

    componentDidMount() {
        axios.get('http://10.0.2.2:5000/allNICs')
            .then(response => {
                this.setState({
                    allNICs : response.data
                });
                console.log('----------')
                console.log(this.state.allNICs)
                console.log('----------')
            })
            .catch(function(error) {
                console.log(error);
            })
    }


   
	render() {
		return (
            <View style={styles.container}>
                <Text style={styles.header}>All NIcs</Text>
                <FlatList
          data={this.state.allNICs}
          renderItem={({item}) => 
        <Text style={styles.text}>{item}</Text>}
        />

            </View>

		)
	}
}

const styles = StyleSheet.create({

    container:{
      textAlign:'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    
    },
    header:{
       fontSize: 24,
       paddingTop: 20,
       paddingBottom: 10,
       textAlign:'center',
    },
    text: { 
        textAlign: 'center', 
        fontWeight: '100',
        fontSize: 24,
 },

    })
    

