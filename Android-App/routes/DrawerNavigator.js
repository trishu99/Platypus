import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer';
import homeStack from './homeStack';

import PlatyTerminal from '../screens/PlatyTerminal';
import PlatyShare from '../screens/PlatyShare';
import PlatyReal from '../screens/PlatyReal';
import PlatyConsole from '../screens/PlatyConsole/PlatyConsole';
import PlatyDetect from '../screens/PlatyDetect';

import Header from '../shared/header';

const screens ={
    Home:{
        screen: homeStack,
    },
    PlatyTerminal:{
        screen: PlatyTerminal,
        navigationOptions: ({ screenProps}) => ({
            headerLeft:() => (
                <Button onPress={() => screenProps.openDraw()} title='open' color='red'/>
            )})
    },
    PlatyShare:{
        screen: PlatyShare,
        defaultNavigationOptions:{
            headerTitle: () => <Header/>
        }
    },
    PlatyReal:{
        screen: PlatyReal,
        defaultNavigationOptions:{
            headerTitle: () => <Header/>
        }
    },
    PlatyConsole:{
        screen: PlatyConsole,
        defaultNavigationOptions:{
            headerTitle: () => <Header/>
        }
    },
    PlatyDetect:{
        screen: PlatyDetect,
        defaultNavigationOptions:{
            headerTitle: () => <Header/>
        }
    },


}

const MyDrawerNavigator = createDrawerNavigator(
    screens, {
    initialRouteName: 'Home',
    drawerWidth: 300,
    drawerPosition: 'left',
    
        
}
);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component{
    render(){
        return <AppContainer/>
    }
}