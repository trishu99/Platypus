
import React, { Component } from 'react';
import axios from 'axios';

import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	TouchableOpacity,
  } from 'react-native';
  
  import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  

export default class PlatyRun extends React.Component {
	


	 
 
	


	render() {
		const gostart = () =>{
			this.props.navigation.navigate('start')
		}
		const gopower = () =>{
			this.props.navigation.navigate('power')
		}
	   
		return (

			<View style={styles.container}>
				 <ScrollView>
        		<Text style={styles.header}>PlatyRun</Text>
        
                <TouchableOpacity onPress={gostart}>
                <Text style={styles.start}>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={gopower}>
                <Text style={styles.power}>Power</Text>
                </TouchableOpacity>

				
				</ScrollView>

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
		paddingBottom:10,
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
	start:{
        flex:1,
        backgroundColor:'#b0ada4',
        padding: 20,
        fontSize: 30,
        textAlign: 'center', 
    },
    power:{
        flex:1,
        backgroundColor:'#99ff66',
        padding: 20,
        fontSize: 30,
        textAlign: 'center',
    },
   });
   
