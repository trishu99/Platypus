import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";


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


export default class PieChart extends Component {
  constructor(props){
  	super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <VictoryPie   width={350} theme={VictoryTheme.material}
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
     data={[
    { x: "user", y: this.props.user },
    { x: "nice", y: this.props.nice },
    { x: "system", y: this.props.system },
    { x: "idle", y: this.props.idle},
    { x: "iowait", y: this.props.iowait },
    { x: "irq", y: this.props.irq },
    { x: "softirq", y: this.props.softirq },
    { x: "steat", y: this.props.steat},
    { x: "guest", y: this.props.guest },
    { x: "guest_nice", y: this.props.guest_nice},
    
  ]}/>
       
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
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
 
