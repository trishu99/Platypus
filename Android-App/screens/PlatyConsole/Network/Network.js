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
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class Network extends Component {
  constructor(props) {
    super(props);
    this.state ={
     };
  }
    componentDidMount() {   
    }
  	render() {
      const goaddressfamilies = () =>{
        this.props.navigation.navigate('AddressFamilies')
      }
      const goaddressinterfaces = () =>{
        this.props.navigation.navigate('AddressForAllInterfaces')
      }
      const gonics = () =>{
        this.props.navigation.navigate('AllNICs')
      }
      const gogateways = () =>{
        this.props.navigation.navigate('Gateways')
      }
     
      return (
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
      }}>
        <View style={styles.container}>
          <ScrollView>
          <Text style={styles.header}>System Info</Text>
          <Text style={styles.header}>Network</Text>
          
                  <TouchableOpacity onPress={goaddressfamilies}>
                  <Text style={styles.addressf}>Address Families</Text>
                  </TouchableOpacity>
  
                  <TouchableOpacity onPress={goaddressinterfaces}>
                  <Text style={styles.addressi}>Address For All Interfaces</Text>
                  </TouchableOpacity>
  
                  <TouchableOpacity onPress={gonics}>
                  <Text style={styles.nics}>All NICs</Text>
                  </TouchableOpacity>
  
                  <TouchableOpacity onPress={gogateways}>
                  <Text style={styles.gateways}>Gateways</Text>
                  </TouchableOpacity>
  
                
  
  
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
    },
   addressf:{
      flex:1,
      backgroundColor:'#8080ff',
      padding: 20,
      fontSize: 30,
      textAlign: 'center',
  },
  addressi:{
    flex:1,
    backgroundColor:'#8080ff',
    padding: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  nics:{
    flex:1,
    backgroundColor:'#8080ff',
    padding: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  gateways:{
    flex:1,
    backgroundColor:'#8080ff',
    padding: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  
   });
   
  
  
