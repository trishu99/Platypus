import React, { useState, Component } from 'react';

import { StyleSheet,ScrollView, Text, View, Button, FlatList, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import Icon from 'react-native-vector-icons/FontAwesome'

export default class Home extends Component{
    static navigationOptions= ({ screenProps}) => ({
        title :'Home',
        headerLeft:() => (
            <Icon name="menu" size={40} color='#333' onPress={() => screenProps.openDraw()}/>
            //<Button onPress={() => screenProps.openDraw()} title='open' color='red'/>

        )
    })
render(){
    const goterminal = () =>{
        this.props.navigation.navigate('PlatyTerminal')
    }
    const gorun = () =>{
        this.props.navigation.navigate('PlatyRun')
    }
    
    const goshare = () =>{
        this.props.navigation.navigate('PlatyShare')
    }
    const goreal = () =>{
        this.props.navigation.navigate('PlatyReal')
    }
    const goconsole = () =>{
        this.props.navigation.navigate('PlatyConsole')
    }
    const godetect = () =>{
        this.props.navigation.navigate('PlatyDetect')
    }
    
    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.container}>
            <ScrollView>
            <View>
                {/*<Image
                    style={styles.term}
                    source={require('../assets/term.jpeg')}
                />
                <Image
                        style={styles.share}
                        source={require('../assets/share.jpeg')}    
                />
                <Image
                    style={styles.real}
                    source={require('../assets/term.jpeg')}
                />
                <Image
                    style={styles.consoles}
                    source={require('../assets/term.jpeg')}
                />
                <Image
                    style={styles.detect}
                    source={require('../assets/term.jpeg')}
                />*/}
                
                <Text style={styles.header}>Platypus</Text>
                
                <TouchableOpacity onPress={goterminal}>
                <Text style={styles.term}>PlatyTerminal</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={gorun}>
                <Text style={styles.run}>PlatyRun</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={goshare}>
                <Text style={styles.share}>PlatyShare</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={goreal}>
                <Text style={styles.real}>PlatyReal</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={goconsole}>
                <Text style={styles.consoles}>PlatyConsole</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={godetect}>
                <Text style={styles.detect}>PlatyDetect</Text>
                </TouchableOpacity>

            </View>
            {/*</View>
            <Button title='Platyterminal' onPress={goterminal}/>
            <Button title='PlatyShare' onPress={goshare}/>
            <Button title='PlatyReal' onPress={goreal}/>
            <Button title='PlatyConsole' onPress={goconsole}/>
            <Button title='PlatyDetect' onPress={godetect}/>
          </View>*/}
          </ScrollView>
            </View>
            </TouchableWithoutFeedback>
          
    )
        }
}

const styles = StyleSheet.create({    
    container: {
        flex : 1,
        backgroundColor: '#ddd'
    },
    header:{
        textAlign:'center',
        fontSize: 40,
        paddingTop: 10,
        paddingBottom: 20,
    },
    term:{
        flex:1,
        backgroundColor:'lightblue',
        padding: 20,
        fontSize: 30,
        textAlign: 'center',
    },
    run:{
        flex:1,
        backgroundColor:'#b0ada4',
        padding: 20,
        fontSize: 30,
        textAlign: 'center', 
    },
    share:{
        flex:1,
        backgroundColor:'#99ff66',
        padding: 20,
        fontSize: 30,
        textAlign: 'center',
    },
    real:{
        flex:1,
        backgroundColor:'#ffc34d',
        padding: 20,
        fontSize: 30,
        textAlign: 'center',
    },
    consoles:{
        flex:1,
        backgroundColor:'#ff99ff',
        padding: 20,
        fontSize: 30,
        textAlign: 'center',
    },
    detect:{
        flex:1,
        backgroundColor:'#8080ff',
        padding: 20,
        fontSize: 30,
        textAlign: 'center',
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333',
    },
});
