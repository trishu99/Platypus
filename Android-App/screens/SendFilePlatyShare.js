import React, { Component } from 'react';
import axios from 'axios';

import DocumentPicker from 'react-native-document-picker';

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


export default class SendFilePlatyShare extends Component {
  constructor(props) {
    super(props);
	this.state = {
		singleFileOBJ: '',
	  };
	  this.onFormSubmit = this.onFormSubmit.bind(this)
	  this.fileUpload = this.fileUpload.bind(this)
  
  }

  async SingleFilePicker() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      
      });

	  this.setState({ singleFileOBJ: res });
	  console.log(this.state.singleFileOBJ.name);
	  console.log(this.state.singleFileOBJ.type);

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }
  
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.singleFileOBJ).then((response)=>{
      console.log('submitted');
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }


  fileUpload = async (file) => {
  	const formData = new FormData();
	  formData.append('name','mahi.txt')
	  formData.append('file', {
		  uri : file.uri,
		  type: file.type,
		  name: file.name,
	  });
    await axios.post('http://10.0.2.2:5000/putFile', formData, {
  	    headers: {
  	      'Content-Type': 'multipart/form-data'
  	    }
	  })
	
	  
	 /*await fetch('http://10.0.2.2:5000/putFile', {method: 'post', headers: {
		'Content-Type': 'multipart/form-data',
	 },
	 body: formData
	})*/
	  .then(response => {
  			console.log(response);
  	})
  	.catch(error => {
  		console.log(error.response);
  	});
  }

	render() {
		return (
			<TouchableWithoutFeedback onPress={() => {
				Keyboard.dismiss();
			}}>
			<View style={styles.MainContainer}>
				<ScrollView>
			<Text style={styles.text}>
			  File Name: {this.state.singleFileOBJ.name ? this.state.singleFileOBJ.name : ''}
			</Text>
	 
			<Text style={styles.text}>
			  file Type: {this.state.singleFileOBJ.type ? this.state.singleFileOBJ.type : ''}
			</Text>
	 
			<Text style={styles.text}>
			  File Size: {this.state.singleFileOBJ.size ? this.state.singleFileOBJ.size : ''}
			</Text>
	 
			<Text style={styles.text}>
			  File URI: {this.state.singleFileOBJ.uri ? this.state.singleFileOBJ.uri : ''}
			</Text>
	 
			<TouchableOpacity
			  activeOpacity={0.5}
			  style={styles.button}
			  onPress={this.SingleFilePicker.bind(this)}>
			  <Text style={styles.buttonText}>
				Click Here To Pick File
			  </Text>
			</TouchableOpacity>
			<Button title='upload' onPress={this.onFormSubmit}/>
			</ScrollView>
		  </View>
		  </TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 16,
		justifyContent: 'center',
	  },
	
	  button: {
		width: '100%',
		backgroundColor: '#0091EA',
		borderRadius:9,
	  },
	
	  buttonText: {
		color: '#fff',
		fontSize: 21,
		padding: 10,
		textAlign: 'center'
	  },
	
	  text: {
		color: '#000',
		fontSize: 16,
		padding: 10,
		textAlign: 'left'
	  },	
});
