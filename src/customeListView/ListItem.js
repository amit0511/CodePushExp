import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,
  View,WebView,TouchableWithoutFeedback,
} from 'react-native';



var SCREEN_WIDTH = require('Dimensions').get('window').width;
var SCREEN_HEIGHT = require('Dimensions').get('window').height;
class ListItem  extends Component{
    constructor(props){
    super(props);
    this.state = {
    };
    }
  loadWebView(){
     //console.log(HomeScreen.Stack)
    //this.props.navigation.navigate('MyWeb', {data: this.props.data})
    console.log(this.props.data);
    this.props.navigator.navigate('MyWeb', {data: this.props.data});
  
  }

  render() {
      const { data } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.loadWebView.bind(this)}>
      <View style={styles.container}>

      <Image source={{uri: data.urlToImage}}                                                                             
       style={styles.welcomeImage}/>
          
        <Text style={styles.Desc11}>the times of india</Text> 
         <Text style={styles.Desc} numberOfLines ={3}>{data.title}</Text> 
        <Text style={styles.Desc1}>{data.publishedAt}</Text> 
        </View>
        </TouchableWithoutFeedback>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {justifyContent: 'flex-start',backgroundColor: '#F5FCFF',height: 220,width:130 ,margin : 5},
  welcomeImage : {width : 130, height : 130,},
  Desc11:{textAlign: 'center',width : 130,position : 'absolute',top: 90,backgroundColor:'transparent',color:'#2196f3',textAlign: 'left',backgroundColor : '#2196f3',color:'white'},
  Desc:{textAlign: 'left',width : 130},
  Desc1:{textAlign: 'left',width : 130,marginTop:5}
});

export default ListItem;