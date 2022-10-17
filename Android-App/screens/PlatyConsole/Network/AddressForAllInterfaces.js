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
    FlatList,
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  


export default class AddressForAllInterfaces extends Component {
  constructor(props) {
    super(props);
    this.state ={
      interfaces : [],
      addrs : [],
    };
  }

    componentDidMount() {
        
        axios.get('http://10.0.2.2:5000/interfaces')
            .then(response => {
                this.setState({
                    interfaces : response.data
                });
                this.state.interfaces.map((data) => {
                    console.log(data)
                });
                console.log("*********");
                console.log(this.state.interfaces);
                console.log("*********");

            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://10.0.2.2:5000/addressForAllInterfaces')
            .then(response => {
                this.setState({
                    addrs : response.data
                });
                this.state.addrs.map((data) => {
                    console.log('----------------')
                    console.log(data.interface)
                    console.log(data.address)
                    console.log('----------------')
                });

                console.log("*********");
                console.log(this.state.addrs);
                console.log("*********");

            })
            .catch(function(error) {
                console.log(error);
            })
    }


    render() {
		return (
            <View style={styles.container}>
            <Text style={styles.header}>Address For All Interfaces</Text>
            <FlatList
          data={this.state.addrs}
          renderItem={({item}) => 
        <Text>interface: {item.interface} {'\n'} address : {item.address} {'\n'}</Text>}
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
    })
    
