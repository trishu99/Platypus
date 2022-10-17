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
  
  export default class power extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        isDialogOpen: false,
        pid_t:'',
        pid_s:'',
        programname:'',
        processnameforterminate:'',
        processnameforsignal: '',
        processnameforcheck:'',
        signal:'',
        output:'',
        signaloutput:'',
        checkoutput:'',
        startpoutput:'',
        
        poweroutput:'',
        cancelval:'',
        shutdownaftermin:'',
        shutdownattime:'',

        sdnow:'',
        sdaftermin:'',
        sdattime:'',
        restartsys:'',
        rebootsys:'',
        suspendsys:'',
        hibernatesys:'',

        screenlocksys:'',

    };
}

handleOnChangeProgramName = (e) => {
    this.setState({
        programname: e
    });
}

handleOnChangePidT = (e) => {
    this.setState({
        pid_t: e
    });
}

handleOnChangePidS = (e) => {
    this.setState({
        pid_s: e
    });
}

handleOnChangeSignal = (e) => {
    this.setState({
        signal : e
    });
}
handleOnChangeProcessNameForSignal = (e) => {
    this.setState({
        processnameforsignal : e
    });
}

handleOnChangeProcessNameForTerminate = (e) => {
    this.setState({
        processnameforterminate : e
    });
}

handleOnChangeProcessNameForCheck = (e) => {
    this.setState({
        processnameforcheck : e
    });
}
handleOnChangeShutdownaftermin = (e) => {
    this.setState({
        shutdownaftermin : e
    });
}
handleOnChangeShutdownattime = (e) => {
    this.setState({
        shutdownattime: e
    });
}


StartProgram= async e => {
    
    e.preventDefault();
    const data = {
        programname : this.state.programname,
        // filename : this.state.filename
    };
    console.log(data);
    await axios.post('http://10.0.2.2:5000/startprocess', data)
    .then((response) => {
        console.log(response)
         this.setState({
            startpoutput: response.data	
        })
    }) 
}


checkprocess = async e => {

    e.preventDefault();
    const data = {
        processname : this.state.processnameforcheck,
    };
    console.log(data);
    await axios.post('http://10.0.2.2:5000/checkprocess', data)
    .then((response) => {
        console.log(response)
         this.setState({
            checkoutput: response.data	
    })     
 
    });
}


sendsignal = async e => {

    e.preventDefault();
    const data = {
        processname : this.state.processnameforsignal,
        signal : this.state.signal,
        pid : this.state.pid_s,
        // filename : this.state.filename
    };
    console.log(data);
    await axios.post('http://10.0.2.2:5000/sendsignal', data)
    .then((response) => {
        console.log(response)
         this.setState({
        signaloutput: response.data	
    })     
  
    });
}



downloadEmployeeData = async e => {

    e.preventDefault();
    const data = {
        processname : this.state.processnameforterminate,
        pid : this.state.pid_t,
        // filename : this.state.filename
    };
    console.log(data);
    await axios.post('http://10.0.2.2:5000/terminateprocess', data)
    .then((response) => {
        console.log(response)
         this.setState({
        output: response.data	
    })     
    });
}

shutdownnow = async e => {
        
    console.log('shutdown');
    await axios.post('http://10.0.2.2:5000/shutdownnow')
    .then((response) => {
        console.log(response)
         this.setState({
            sdnow: response.data	
        })
    }) 
}

shutdownaftergivenmin = async e => {
    
    e.preventDefault();
    const data = {
        mins : this.state.shutdownaftermin,
        // filename : this.state.filename
    };
    console.log('shutdown after min');
    await axios.post('http://10.0.2.2:5000/shutdownaftermin', data)
    .then((response) => {
        console.log(response)
         this.setState({
            sdaftermin: response.data	
        })
    }) 
}

shutdownattime = async e => {
    
    e.preventDefault();
    const data = {
        gtime : this.state.shutdownattime,
        // filename : this.state.filename
    };
    console.log('shutdown after min');
    await axios.post('http://10.0.2.2:5000/shutdownattime', data)
    .then((response) => {
        console.log(response)
         this.setState({
            sdattime: response.data	
        })
    }) 
}


shutdowncancel = async e => {

    console.log('cancel shutdown');
    await axios.post('http://10.0.2.2:5000/cancelshutdown')
    .then((response) => {
        console.log(response)
         this.setState({
            cancelval: response.data	
        })
    }) 
}

restartsystem = async e => {

    console.log('restart');
    await axios.post('http://10.0.2.2:5000/restartsystem')
    .then((response) => {
        console.log(response)
         this.setState({
            restartsys: response.data	
        })
    }) 
}
rebootsystem = async e => {

    console.log('reboot');
    await axios.post('http://10.0.2.2:5000/rebootsystem')
    .then((response) => {
        console.log(response)
         this.setState({
            rebootsys: response.data	
        })
    }) 
}

suspendsystem = async e => {

    console.log('suspend');
    await axios.post('http://10.0.2.2:5000/suspendsystem')
    .then((response) => {
        console.log(response)
         this.setState({
            suspendsys: response.data	
        })
    }) 
}

hibernatesystem = async e => {

    console.log('hibernate');
    await axios.post('http://10.0.2.2:5000/hibernatesystem')
    .then((response) => {
        console.log(response)
         this.setState({
            hibernatesys: response.data	
        })
    }) 
}

screenlocksystem = async e => {

    console.log('screen lock');
    await axios.post('http://10.0.2.2:5000/screenlocksystem')
    .then((response) => {
        console.log(response)
         this.setState({
            screenlocksys: response.data	
        })
    }) 
}

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => {
				Keyboard.dismiss();
			}}>

            <View style={styles.container}>
                <ScrollView>
                <Text style={styles.header}>Power Options</Text>

                <Text style={styles.header}>Shutdown system after mins</Text>
				<TextInput
					style={styles.input}
					placeholder='enter mins'
					value={this.state.shutdownaftermin}
					onChangeText={this.handleOnChangeShutdownaftermin}
				/>
                <Button 
                    title='Shutdown after mins'
                    onPress={this.shutdownaftergivenmin}
                />
                <Text>{this.state.sdaftermin}</Text>


                <Text style={styles.header}>Shutdown system at time(24-hr format)</Text>
				<TextInput
					style={styles.input}
					placeholder='enter time'
					value={this.state.shutdownattime}
					onChangeText={this.handleOnChangeShutdownattime}
				/>
                <Button 
                    title='Shutdown at time'
                    onPress={this.shutdownattime}
                />
                <Text>{this.state.sdattime}</Text>


                <Text style={styles.header}>Cancel Shutdown</Text>
                <Button 
                    title='Cancel Shutdown'
                    onPress={this.shutdowncancel}
                />
                <Text>{this.state.cancelval}</Text>


                <Text style={styles.header}>Restart System</Text>
                <Button 
                    title='restart system'
                    onPress={this.restartsystem}
                />
                <Text>{this.state.restartsys}</Text>
  

                <Text style={styles.header}>Reboot system</Text>
                <Button 
                    title='Reboot system'
                    onPress={this.rebootsystem}
                />
                <Text>{this.state.rebootsys}</Text>


                <Text style={styles.header}>suspend System</Text>
                <Button 
                    title='Suspend system'
                    onPress={this.suspendsystem}
                />
                <Text>{this.state.suspendsys}</Text>

                <Text style={styles.header}>hibernate mode</Text>
                <Button 
                    title='Hibernate mode'
                    onPress={this.hibernatesystem}
                />
                <Text>{this.state.hibernatesys}</Text>


                <Text style={styles.header}>Screen Lock</Text>
                <Button 
                    title='Screen Lock'
                    onPress={this.screenlocksystem}
                />
                <Text>{this.state.screenlocksys}</Text>

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
    input:{
		borderWidth: 1,
		borderColor: '#777',
		padding: 8,
		margin: 10,
		width: 200,	
	},

   });
   

