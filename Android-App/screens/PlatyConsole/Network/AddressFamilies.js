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


export default class AddressFamilies extends Component {
  constructor(props) {
    super(props);
    this.state ={
    };
  }
	render() {
		return (
      <View style={styles.container}>

           <Text style={styles.header}>Address Families Numbers</Text>
           <Text>
                 "AF_APPLETALK : 5" {'\n'}
        "AF_ASH : 18" {'\n'}
        "AF_ATMPVC : 8" {'\n'}
        "AF_ATMSVC : 20" {'\n'}
        "AF_AX25 : 3" {'\n'}
        "AF_BLUETOOTH : 31" {'\n'}
        "AF_BRIDGE : 7" {'\n'}
        "AF_DECnet : 12" {'\n'}
        "AF_ECONET : 19" {'\n'}
        "AF_FILE : 1" {'\n'}
        "AF_INET : 2" {'\n'}
        "AF_INET6 : 10" {'\n'}
        "AF_IPX : 4" {'\n'}
        "AF_IRDA : 23" {'\n'}
        "AF_ISDN : 34" {'\n'}
        "AF_KEY : 15" {'\n'}
        "AF_LINK : 17" {'\n'}
        "AF_NETBEUI : 13" {'\n'}
        "AF_NETLINK : 16" {'\n'}
        "AF_NETROM : 6" {'\n'}
        "AF_PACKET : 17" {'\n'}
        "AF_PPPOX : 24" {'\n'}
        "AF_ROSE : 11" {'\n'}
        "AF_ROUTE : 16" {'\n'}
        "AF_SECURITY : 14" {'\n'}
        "AF_SNA : 22" {'\n'}
        "AF_UNIX : 1" {'\n'}
        "AF_UNSPEC : 0" {'\n'}
        "AF_WANPIPE : 25"{'\n'}
        "AF_X25 : 9" {'\n'}
        </Text>
                
		
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
   textAlign:'center',
},
})
