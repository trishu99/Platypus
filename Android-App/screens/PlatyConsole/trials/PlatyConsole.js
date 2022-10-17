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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PieChart from './PieChart';


export default class PlatyConsole extends Component {
 


	render() {
    const gonetwork = () =>{
      this.props.navigation.navigate('Network')
    }
    const gocpu = () =>{
      this.props.navigation.navigate('CPU')
    }
    const goprocess = () =>{
      this.props.navigation.navigate('Process')
    }
    const godisk = () =>{
      this.props.navigation.navigate('Disk')
    }
    const gomemory= () =>{
      this.props.navigation.navigate('Memory')
    }
    const godevices = () =>{
      this.props.navigation.navigate('Devices')
    }

		return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
			<View style={styles.container}>
        <ScrollView>
				<Text style={styles.header}>System Info</Text>
        <Text style={styles.header}>PlatyConsole</Text>
        
                <TouchableOpacity onPress={gonetwork}>
                <Text style={styles.network}>Network</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={gocpu}>
                <Text style={styles.cpu}>CPU</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={goprocess}>
                <Text style={styles.process}>Process</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={godisk}>
                <Text style={styles.disk}>DiskIOCounters</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={gomemory}>
                <Text style={styles.memory}>Memory</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={godevices}>
                <Text style={styles.devices}>Devices</Text>
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
      paddingBottom: 10,
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
  network:{
    flex:1,
    backgroundColor:'#8080ff',
    padding: 20,
    fontSize: 30,
    textAlign: 'center',
},
cpu:{
  flex:1,
  backgroundColor:'#8080ff',
  padding: 20,
  fontSize: 30,
  textAlign: 'center',
},
process:{
  flex:1,
  backgroundColor:'#8080ff',
  padding: 20,
  fontSize: 30,
  textAlign: 'center',
},
disk:{
  flex:1,
  backgroundColor:'#8080ff',
  padding: 20,
  fontSize: 30,
  textAlign: 'center',
},
memory:{
  flex:1,
  backgroundColor:'#8080ff',
  padding: 20,
  fontSize: 30,
  textAlign: 'center',
},
devices:{
  flex:1,
  backgroundColor:'#8080ff',
  padding: 20,
  fontSize: 30,
  textAlign: 'center',
},
 });
 

