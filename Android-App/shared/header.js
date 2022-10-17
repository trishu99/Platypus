import React, { Component } from 'react';
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
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

  
export default function Header({navigation}){
    
    return(
        <View style={styles.headertop}>
            <View>
                <Text style={styles.headertext}>GameZone</Text>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    headertop:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headertext:{
        fontWeight: 'bold',
        fontSize: 20,
        
    }
})