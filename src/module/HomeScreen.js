import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import App from './app';
import DrawerMenu from '../Drawer/drawer-toolbar-ios';
import BookmarkView from '../Pages/bookmark';
import CalendarView from '../Pages/calendar';
import ClientView from '../Pages/client';
import InfoView from '../Pages/info';
import SettingsView from '../Pages/setting';
import MyWeb from '../customeListView/Myweb';
import ProfileView from './ProfileView';
import { DrawerNavigator, StackNavigator } from 'react-navigation';


const stackNavigator = StackNavigator({
  Info: { screen: InfoView },
  Settings: {screen: SettingsView },
  Bookmark: {screen: BookmarkView },
  Calendar: {screen: CalendarView},
  Client: {screen: ClientView},
  MyWeb : {screen: MyWeb},
  ProfileView :{screen: ProfileView}        
}, {
  headerMode: 'screen'
});

export default  class HomeScreen extends Component{
  constructor(props) {
    super(props);
  
  
  } 
  componentWillMount(){

  }
  render(){
    return (

      <Screen11/>
    );

  }

}

 var Screen11 = DrawerNavigator({

  Home: {
    screen: App,
  },
  Stack: {
    screen: stackNavigator
  }
}, {
   drawerPosition: 'left',
  contentComponent: DrawerMenu,
  
  contentOptions: {
    activeTintColor: '#e91e63',
    style: {
      flex: 1,
      paddingTop: 15,
    }
  }
});

//AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
