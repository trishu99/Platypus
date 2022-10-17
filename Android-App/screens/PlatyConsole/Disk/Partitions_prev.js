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
  


export default class Partitions extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allProcesses : [],
      tableHead : ['Device','Mount Point', 'File System', 'Opts', 'Space'],
      tableData: [],
    };
    this.addentry = this.addentry.bind(this)


  }

    componentDidMount() {
        axios.get('http://10.0.2.2:5000/partitions')
            .then(response => {
                this.setState({
                    allProcesses : response.data,
                    tableData: response.data               
                });
                console.log(response.data)
               /* this.state.allProcesses.map(
                    function(data, i) {
                        console.log(data.device)
                        console.log(i)
                        const rowData = []
                        rowData.push(data.device,data.mountpoint,data.fstype,data.opts, data.mountpoint)
                        console.log(rowData)
                        this.state.tableData.push(rowData)
                    }
                )*/
                console.log('done')

            })
            .catch(function(error) {
                console.log(error);
            })
    }


    

    addentry() {

        this.state.allProcesses.map(
            function(data, i) {
                this.addrow(data)
            }
        )
    }

    addrow(data) {
        const rowData = []
        rowData.push(data.device,data.mountpoint,data.fstype,data.opts, data.mountpoint)
        this.state.tableData.push(rowData)

    }
	render() {
		return (
            <View>
			<View style={styles.container}>  
            <Text>Paritions</Text>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
        </Table>
        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  this.state.tableData.map((rowData, index) => (
                    console.log(rowData),
                    <Row
                      key={index}
                      data={rowData}
                    />
                  ))
                }
              </Table>

              </View>

              <View sytyle={styles.see}>
                <Button  title='pressthis' onPress={() => this.addentry()}/>
                </View>
 
        </View>
		)
	}
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 30, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 20, backgroundColor: '#E7E6E1' },
    btn: {paddingTop: 40},
    see: {flex: 1,paddingTop: 30, color: 'pink', backgroundColor: 'yellow'}
    

  })
  
