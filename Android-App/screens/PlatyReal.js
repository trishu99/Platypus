import React, { Component } from 'react';

import axios from 'axios';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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
  


export default class PlatyReal extends Component {
 

  constructor(props) {
    super(props);
    this.state ={
      devices : [],
    };
  }

    componentDidMount() {
        axios.get('http://10.0.2.2:5000/pendrives')
            .then(response => {
                this.setState({
                    devices : response.data,
                });
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })
    }


    devicesList() {
        <FlatList
            data={this.state.devices}
            renderItem={({item}) => (
                
            <Text>{item.data}</Text>
            )}
        />
    }

	render() {
		return (
			    <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
              <View style={styles.container}>
                  <ScrollView>
                  <View>
                      <Text style={styles.header}>All Connected Devices</Text>
                      <FlatList
                         data={this.state.devices}
                         renderItem={({item}) => ( 
                         <Text style={styles.text}>{item}</Text>
                         )}
                      />
                  </View>
                  </ScrollView>
              </View>
              </TouchableWithoutFeedback>
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
        textAlign:'center',
    },
    text:{
        padding: 10,
        margin: 10,
        textAlign: 'center',
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: 'black',

    }
   });
   
