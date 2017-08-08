import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import { Navigator, NativeModules } from 'react-native';

import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { Toolbar, BottomNavigation, Icon } from 'react-native-material-ui';
import Container from '../Container';

import { TabRouter } from 'react-navigation';

import TodayView from '../Contents/today';
import ProfileView from '../Contents/profile';
import MapView from '../Contents/map';
import ChatView from '../Contents/chat';

const uiTheme = {
  palette: {
    primaryColor: COLOR.blue500,
    accentColor: COLOR.blue500,
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20
    }
  }
}



const TabRoute = TabRouter({
  Basis: { screen: TodayView },
  Profile: { screen: ProfileView },
  Map: { screen: MapView },
  Chat: {screen: ChatView}
  }, {
    initialRouteName: 'Basis',
  }
);



class TabContentNavigator extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: props.value.active,
      navigator: props.navigator
    };
  }
    static navigationOptions = {
    drawerLabel: 'asdkfjsadhfk',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/Logo_40W.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  //this method will not get called first time
  componentWillReceiveProps(newProps){
    this.setState({
      active: newProps.value.active,
    }); 
  }

  render() {
    console.log("asjs");
    console.log(this.props.navigator)
    const Component = TabRoute.getComponentForRouteName(this.state.active);
    return <Component navigator = {this.props.navigator}/>;
  }
}

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: 'Basis',
    };
  }
  navigate() {
    this.props.navigation.navigate('DrawerOpen'); // open drawer
  }
navigateProfile() {
    this.props.navigation.navigate('ProfileView'); // open drawer
  }




  render() {
    console.log(this.props.navigation)
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />

          <Toolbar
            leftElement="menu"
             centerElement="Searchable"
             rightElement={{
                            actions: ['search','account-circle'],

                        }}
            centerElement={this.state.active}
            onLeftElementPress={() => this.navigate()}
            onRightElementPress={() => this.navigateProfile()}
          />
        
          
          <TabContentNavigator value={this.state} key={this.state}  navigator = {this.props.navigation}/>

          <BottomNavigation active={this.state.active}
            hidden={false}
            style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0 } }}
          >
            <BottomNavigation.Action
              key="Basis"
              icon="today"
              label="Basis"
              onPress={() => this.setState({ active: 'Basis' })}
            />
            <BottomNavigation.Action
              key="Profile"
              icon="person"
              label="Profile"
              onPress={() => {
                this.setState({ active: 'Profile' });
              }}
            />
            <BottomNavigation.Action
              key="Map"
              icon="map"
              label="Map"
              onPress={() => this.setState({ active: 'Map' })}
            />
            <BottomNavigation.Action
              key="Chat"
              icon="chat"
              label="Chat"
              onPress={() => this.setState({ active: 'Chat' })}
            />
          </BottomNavigation>

        </Container>
      </ThemeProvider>
    );
  }
}

