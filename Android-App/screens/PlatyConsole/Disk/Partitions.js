import React, { Component } from 'react';
import axios from 'axios';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { withNavigation } from 'react-navigation';

import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	TextInput,
	Button,
	TouchableOpacity, 
	Alert,
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



class Partitions extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allProcesses : [],
      tableHead : ['Device', 'Mount Point', 'File System', 'Opt', 'Space'],
      tableData : [

      ],
    };
    this.goshare = this.goshare.bind(this); 

  }

    componentDidMount() {
        axios.get('http://10.0.2.2:5000/partitions')
            .then(response => {
                this.setState({
                    allProcesses : response.data,
                  })
                console.log(this.state.tableData),
                this.state.allProcesses.map((data) => {
                  console.log(data.device)
                  const rowData = []
                  rowData.push(data.device, data.mountpoint, data.fstype, data.opts, data.mountpoint)
                  this.state.tableData.push(rowData)
                  console.log(rowData)
                  this.setState({
                    tableData: this.state.tableData
                  })
              })
              console.log('----------')
              console.log(this.state.tableData)
              console.log('----------')
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    _alertIndex(index) {
      Alert.alert(`This is row ${index + 1}`);
    }

    goshare(){
      this.props.navigation.navigate('PlatyDetect')
    }
	render() {


    const element = (data, index) => (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Space', {data: data})}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Space</Text>
        </View>
      </TouchableOpacity>
    );

		return (
      <View>
        <ScrollView>
        <Text style={styles.header}>Partitions</Text>
      {/*<Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={this.state.tableData} style={styles.row} textStyle={styles.text}/>
      </Table>*/}
      <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            this.state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>

        </ScrollView>
    </View>

		)
	}
}

export default withNavigation(Partitions);

const styles = StyleSheet.create({
  head: { height: 50, backgroundColor: '#F5A315' },
  text: { textAlign: 'center', fontWeight: '100' },
  row: {backgroundColor: '#E7E6E1', flex:1, flexDirection:'row'},
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },

  header:{
    fontSize: 24,
    paddingTop: 20,
    textAlign:'center',
},

 });
