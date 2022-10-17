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
  

const SList = props => (
   <tr>
                  <td>{props.data.total}</td>
                  <td>{props.data.used}</td>
                  <td>{props.data.free}</td>
                  <td>{props.data.percent}</td>  
    </tr>
)

export default class Space extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allProcesses : [],
      partitionName: '',
      total: '',
      used: '',
      free: '',
      percent: '',
    };
  }

    componentDidMount() {
        const data = {'device' : this.props.navigation.state.params.data}
        console.log('jsdkfjsdjflkkjsdfjsdjdklfs')
        console.log(data)
        axios.post('http://10.0.2.2:5000/disk_usage', data)
            .then(response => {
                this.setState({
                    allProcesses : response.data,
                    partitionName: data,
                });
                console.log('mhia-------')
                console.log(this.state.partitionName.device)
                console.log(this.state.allProcesses)
                console.log(this.state.allProcesses)
                this.state.allProcesses.map((data) => {
                    console.log(data.total)
                   // const rowData = []
                    //rowData.push(data.device, data.mountpoint, data.fstype, data.opts, data.device)
                    //this.state.tableData.push(rowData)
                    //console.log(rowData)
                    this.setState({
                      total: data.total,
                      used: data.used,
                      free: data.free,
                      percent: data.percent,
                })
                console.log(this.state.total)
            })

            })
            .catch(function(error) {
                console.log(error);
            })
    }



	render() {
		return (
		<View style={styles.container}>  
        <ScrollView>
        <Text style={styles.header}>Space of {this.state.partitionName.device}</Text>
        <View textStyle={styles.text}>
        <Text>Total  {this.state.total} </Text>
        <Text>Used  {this.state.used} </Text>
        <Text>Free  {this.state.free} </Text>
        <Text>Percent  {this.state.percent} </Text>
        </View>


      {/*<Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={this.state.tableData} style={styles.row} textStyle={styles.text}/>
        </Table>*/}
            </ScrollView>
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
      fontSize: 25,
      color: 'black',
  
  },
  header:{
    fontSize: 24,
    paddingTop: 20,
    textAlign:'center',
},
  })
  
