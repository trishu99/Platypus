import React, { Component } from 'react';
import axios from 'axios';

import PieChart from './PieChart';
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
  

export default class CPU extends Component {
  constructor(props) {
    super(props);
    this.state ={
      physicalCores : 0, logicalCores : 0, cpuTimes : [], cpuPercent : 0,
        guest: "0.0",
        guest_nice: "0.0",
        idle: "19193.18",
        iowait: "305.83",
        irq: "0.0",
        nice: "12.49",
        softirq: "70.36",
        steat: "0.0",
        system: "896.2",
        user: "3530.58",
        pguest: "0.0",
        pguest_nice: "0.0",
        pidle: "19193.18",
        piowait: "305.83",
        pirq: "0.0",
        pnice: "12.49",
        psoftirq: "70.36",
        psteat: "0.0",
        psystem: "896.2",
        puser: "3530.58"
    };
  }

    componentDidMount() {
        axios.get('http://10.0.2.2:5000/logicalCores')
            .then(response => {
                this.setState({
                    logicalCores : response.data
                });
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://10.0.2.2:5000/physicalCores')
            .then(response => {
                this.setState({
                    physicalCores : response.data
                });
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })


        axios.get('http://10.0.2.2:5000/cpuPercent')
            .then(response => {
                this.setState({
                    cpuPercent : response.data
                });
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://10.0.2.2:5000/cpuTimes')
            .then(response => {
                const dat = response.data;
                this.setState({
                     guest: dat["guest"],
                    guest_nice: dat["guest_nice"],
                    idle: dat["idle"],
                    iowait: dat["iowait"],
                    irq: dat["irq"],
                    nice: dat["nice"],
                    softirq: dat["softirq"],
                    steat: dat["steat"],
                    system: dat["system"],
                    user: dat["user"]
                }); 
                console.log(dat)
            })
            .catch(function(error) {
                console.log(error);
            })


        axios.get('http://10.0.2.2:5000/cpuTimesPercent')
            .then(response => {
                const dat = response.data;
                this.setState({
                    pguest: dat["guest"],
                    pguest_nice: dat["guest_nice"],
                    pidle: dat["idle"],
                    piowait: dat["iowait"],
                    pirq: dat["irq"],
                    pnice: dat["nice"],
                    psoftirq: dat["softirq"],
                    psteat: dat["steat"],
                    psystem: dat["system"],
                    puser: dat["user"]
                }); 
                console.log(dat)
            })
            .catch(function(error) {
                console.log(error);
            })

    }

	render() {
		return (
            <View style={styles.container}>
				<ScrollView>

				<Text style={styles.header}>CPU info</Text>
                <Text>No of Logical Cores  {this.state.logicalCores} </Text>

                <Text>No of Physical Cores  {this.state.physicalCores} </Text>
                
                <Text>CPU Utilization Percentage  {this.state.cpuPercent}</Text>

                <Text>CPU times</Text>
                <Text> Guest : {this.state.guest}   </Text>
                <Text> Guest_nice : {this.state.guest_nice}   </Text>
                <Text> Idle : {this.state.idle} </Text>
                <Text> Iowait : {this.state.iowait} </Text>
                <Text> IRQ : {this.state.irq} </Text>
                <Text> Nice : {this.state.nice} </Text>
                <Text> SoftIRQ : {this.state.softirq} </Text>
                <Text> Steat : {this.state.steat} </Text>
                <Text> System : {this.state.system} </Text>
                <Text> User : {this.state.user} </Text>



                <Text>CPU times percentage</Text>
                <Text> Guest : {this.state.pguest}   </Text>
                <Text> Guest_nice : {this.state.pguest_nice}   </Text>
                <Text> Idle : {this.state.pidle} </Text>
                <Text> Iowait : {this.state.piowait} </Text>
                <Text> IRQ : {this.state.pirq} </Text>
                <Text> Nice : {this.state.pnice} </Text>
                <Text> SoftIRQ : {this.state.psoftirq} </Text>
                <Text> Steat : {this.state.psteat} </Text>
                <Text> System : {this.state.psystem} </Text>
                <Text> User : {this.state.puser} </Text>
                <PieChart guest = {this.state.pguest} guest_nice = {this.state.pguest_nice} 
                idlt = {this.state.pidle} iowait = {this.state.piowait} irq = {this.state.pirq}
                nice = {this.state.pnice} softirq = {this.state.psoftirq} steat = {this.state.psteat}
        system = {this.state.psystem} user = {this.state.user}/>
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
    flex:1,
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
   
