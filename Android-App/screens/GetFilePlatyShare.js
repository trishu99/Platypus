// import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';

import RNFetchBlob from 'react-native-fetch-blob'

import {NativeModules} from 'react-native';
const {FileIO} = NativeModules;



import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  PermissionsAndroid, Image
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


var RNFileManager = require('react-native-file-manager');

export async function request_storage_runtime_permission() {

	try {
	  const granted = await PermissionsAndroid.request(
		PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
		{
		  'title': 'ReactNativeCode Storage Permission',
		  'message': 'ReactNativeCode App needs access to your storage to download Photos.'
		}
	  )
	  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  
		Alert.alert("Storage Permission Granted.");
	  }
	  else {
  
		Alert.alert("Storage Permission Not Granted");
  
	  }
	} catch (err) {
	  console.warn(err)
	}
  }

class DownloadFile extends Component {
	

	
	constructor(props) {
		super(props);
		this.state = {
			filename : '',
			path : ''
		};
	}
	
	handleOnChangeFileName = (e) => {
		console.log(e)
		this.setState({
			filename : e
		});
	}

	handleOnChangePath = (e) => {
		this.setState({
			path : e
		});
	}
	
	async componentDidMount() {

		await request_storage_runtime_permission()
	
	  }

	  getExtention = (filename) => {
		return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
		  undefined;
	  }

	  downloadImage = async (e) => {
		let formdata = new FormData();
		formdata.append("path", this.state.path);
		formdata.append("filename", this.state.filename);
		const data = {
			path : this.state.path,
			filename : this.state.filename
		};
		console.log("---------")
		console.log(data.path);
				console.log(data.filename);
		console.log("---------")
		var date = new Date();
		var fileurl = 'http://10.0.2.2:5000/getFile';
		var ext = this.getExtention(this.state.filename);
		ext = "." + ext[0];
		const { config, fs } = RNFetchBlob;
		let PictureDir = fs.dirs.PictureDir
		let options = {
		  fileCache: true,
		  addAndroidDownloads: {
			useDownloadManager: true,
			notification: true,
			path: PictureDir + "/file_" + Math.floor(date.getTime()
			  + date.getSeconds() / 2) + ext,
			description: 'downloading file'
		  }
		}
		//console.log(data.filename)
		//console.log(data.path)

		config(options).fetch('POST', "http://10.0.2.2:5000/getFile?path="+data.path+"&filename="+data.filename, {
			'Content-Type' : 'application/octet-stream',
			data: JSON.stringify({"user" : '1', "name" : "mahi"})
		}, [
			{
				data: 'thisisimp',
				name : 'mahima',
				file: 'bill',
			}
		]
		).then((res) => {
			console.log(options.path)
		  Alert.alert("Image Downloaded Successfully.");
		}).catch((error) => {
			console.log(error);
		});
	  }/*
downloadEmployeeData = async e => {

		e.preventDefault();
		const data = {
			path : this.state.path,
			filename : this.state.filename
		};
		console.log(data);

		fetch('http://10.0.2.2:5000/getFile', {
			method: 'POST',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		  })
		  .then((response) => response.blob())
		  .then((blob) => {
 
			
			// 2. Create blob link to download
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
		  })
		/*.then((response) => {
			console.log('success');
			console.log(response);
			const base64 = Buffer.from(response.data).toString('base64');

		})
		.catch((error) => {
			console.log(error);
		});
	}*/
	/*RNFetchBlob
  .config({
    // add this option that makes response data to be stored as a file,
    // this is much more performant.
    fileCache : true,
  })
  .fetch('POST', 'http://10.0.2.2:5000/getFile',  {
	'Content-Type' : 'multipart/form-data',
	},
	// part file from storage
	JSON.stringify(data), )
  .then((res) => {
    // the temp file path
    console.log('The file saved to ', res.path())
  })



		await axios.post('http://10.0.2.2:5000/getFile', data)
		.then((response) => {
			console.log('sucesss');
			console.log(response.data);
		   
			var path = RNFileManager.DocumentDirectoryPath + '/test.txt';

// write the file
RNFileManager.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
  .then((success) => {
    console.log('FILE WRITTEN!');
  })
  .catch((err) => {
    console.log(err.message);
  });

			
			/*const url = window.URL.createObjectURL(new Blob([JSON.stringify[response.data]]));
		   const link = document.createElement('a');
		   link.href = url;
		   link.setAttribute('download', data.filename); //or any other extension
		   document.body.appendChild(link);
		   link.click();
		})
		.catch(function (error) {
			console.log('problem');
			console.log(error);		
		});
	}*/
	
	render() {
		return (
			<TouchableWithoutFeedback onPress={() => {
				Keyboard.dismiss();
			}}>
		
			<View style={styles.container}>
				<ScrollView>
				<Text>Download file</Text>
				<Text>File Name</Text>
				<TextInput
					style={styles.input}
					placeholder='enter filename'
					value={this.state.filename}
					onChangeText={this.handleOnChangeFileName}
				/>
				<Text>Path of file</Text>
				<TextInput
					style={styles.input}
					placeholder='enter path'
					value={this.state.path}
					onChangeText={this.handleOnChangePath}
				/>
				<Button 
					title='enter'
					onPress={this.downloadImage}
				/>
				</ScrollView>
			</View>
			</TouchableWithoutFeedback>
		)
	}/*
	render(){
	return(
	<View style={styles.MainContainer}>

	<Image source={{ uri: 'https://images.all-free-download.com/images/graphicthumb/hd_picture_of_the_beautiful_natural_scenery_04_169926.jpg' }}
	  style={{ width: 300, height: 300, resizeMode: 'contain', margin: 5 }} />

	<TouchableOpacity style={styles.button} onPress={this.downloadImage} >

	  <Text style={styles.text}>Click Here To Download Above Image</Text>

	</TouchableOpacity>

  </View>
	)}*/

}

const styles = StyleSheet.create({
	container:{
	   flex: 1,
	   justifyContent: 'center',
	   alignItems: 'center',
	   backgroundColor: '#F5FCFF',
   
	},
	input:{
		borderWidth: 1,
		borderColor: '#777',
		padding: 8,
		margin: 10,
		width: 200,	
	},
	MainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	  },
	
	  button: {
	
		width: '80%',
		paddingTop: 3,
		paddingBottom: 3,
		backgroundColor: '#2E7D32',
		borderRadius: 7,
		margin: 10
	  },
	  text: {
		color: '#fff',
		fontSize: 20,
		textAlign: 'center',
		padding: 5
	  }
   });
   
   

export default DownloadFile;
