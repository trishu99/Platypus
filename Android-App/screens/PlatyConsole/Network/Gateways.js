import React, { Component } from 'react';
import axios from 'axios';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


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
  

const SList = props => (
    <tr>
                 <td>{props.data.addressFamily}</td>
                  <td>{props.data.ip}</td>
                  <td>{props.data.name}</td>
    </tr> 
)

export default class Gateways extends Component {
  constructor(props) {
    super(props);
    this.state ={
      gateways : [],
      tableHead : ['Addr Family', 'IP', 'Name'],
      tableData : [

      ],

    };
  }

    componentDidMount() {
        axios.get('http://10.0.2.2:5000/gateways')
            .then(response => {
                this.setState({
                    gateways : response.data
                });
                console.log("*********");
                console.log(response.data)
                console.log("*********");
                console.log(this.state.gateways)
                console.log(this.state.tableData),
                this.state.gateways.map((data) => {
                  console.log(data.type)
                  const rowData = []
                  rowData.push(data.addressFamily, data.ip, data.name)
                  this.state.tableData.push(rowData)
                  console.log(rowData)
                
                this.setState({
                    tableData: this.state.tableData
                  });
              })
              console.log('----------')
              console.log(this.state.tableData)
              console.log('----------')
                console.log(response.data)
            this.setState({
                tableData : this.state.tableData
            })

            })
            .catch(function(error) {
                console.log(error);
            })
    }


    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Gateways</Text>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={this.state.tableData} style={styles.row} textStyle={styles.text}/>
      </Table>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    /*container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },*/
  

    /*header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
  */
    head: { backgroundColor: '#F5A315' },
    text: { textAlign: 'center', fontWeight: '100', fontSize: 19},
    row: { backgroundColor: '#E7E6E1' },

    header:{
      fontSize: 24,
      paddingTop: 20,
      paddingBottom: 10,
      textAlign:'center',
  },
  
   });
  
