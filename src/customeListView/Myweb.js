import React, { Component } from 'react';
import { WebView } from 'react-native';


export default class MyWeb extends Component {
  
     constructor(props){
    super(props);
   
    }
  render() {
      const {state} = this.props.navigation;
    console.log(state.params.data);
    return (
     <WebView
        source={{uri: state.params.data.url}}
        style={{marginTop: 20,flex:1}}
      />
    );
  }
}

