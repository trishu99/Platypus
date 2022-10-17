import React, {Component} from 'react';


import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';

import Home from '../screens/home';
import PlatyTerminal from '../screens/PlatyTerminal';
import PlatyRun from '../screens/PlatyRun'
import PlatyShare from '../screens/PlatyShare';
import PlatyReal from '../screens/PlatyReal';
import PlatyConsole from '../screens/PlatyConsole/PlatyConsole';
import PlatyDetect from '../screens/PlatyDetect';
import CPU from '../screens/PlatyConsole/CPU/CPU'
import Network from '../screens/PlatyConsole/Network/Network'
import Process from '../screens/PlatyConsole/Process/Process'
import Disk from '../screens/PlatyConsole/Disk/DiskIOCounters'
import Memory from '../screens/PlatyConsole/Memory/Memory'
import Devices from '../screens/PlatyConsole/Disk/Disk'
import Space from '../screens/PlatyConsole/Disk/Space'

import AddressFamilies from '../screens/PlatyConsole/Network/AddressFamilies';
import AllNICs from '../screens/PlatyConsole/Network//AllNICs';
import AddressForAllInterfaces from '../screens/PlatyConsole/Network/AddressForAllInterfaces';
import Gateways from '../screens/PlatyConsole/Network/Gateways';

import start from '../screens/start'
import power from '../screens/power'

import Header from '../shared/header'

const screens = {
    Home: {
        screen: Home,
        
    },
    PlatyTerminal:{
        screen: PlatyTerminal, 
    },
    PlatyRun:{
        screen: PlatyRun,
    },
    PlatyShare:{
        screen: PlatyShare
    },
    PlatyReal:{
        screen: PlatyReal
    },
    PlatyConsole:{
        screen: PlatyConsole
    },
    PlatyDetect:{
        screen: PlatyDetect
    },
    CPU :{
        screen: CPU
    },
    Space: {
        screen: Space
    },
    Network:{
        screen: Network
    },
    Process:{
        screen: Process
    },
    Disk:{
        screen: Disk
    },
    Memory:{
        screen: Memory
    },
    Devices:{
        screen: Devices
    },
    AddressFamilies:{
        screen: AddressFamilies
    },
    AddressForAllInterfaces:{
        screen: AddressForAllInterfaces
    },
    AllNICs:{
        screen: AllNICs
    },
    Gateways:{
        screen: Gateways
    },

    start:{
        screen: start,
    },
    power: {
        screen: power,
    }

  
}

const HomeStack = createStackNavigator(screens, {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
        headerStyle:{height: 55, backgroundColor: 'orange'},
        headerTitleStyle: {fontWeight: 'bold', color:'white'}
    }
});

const AppContainer = createAppContainer(HomeStack);

export default class homeStack extends Component{
    render(){
        return <AppContainer screenProps={{openDraw: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}}/>
    }
}

//export default createAppContainer(HomeStack); 

