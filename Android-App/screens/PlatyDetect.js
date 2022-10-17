import React from 'react';
import { StyleSheet,ScrollView, Text,TouchableWithoutFeedback,
	Keyboard, View } from 'react-native';



export default function About(){
    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.header}>Platy Detect</Text>
            </ScrollView>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

 },
 header:{
    fontSize: 24,
    paddingTop: 20,
    paddingBottom:10,
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
});



