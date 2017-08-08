import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,Button,
  View,
} from 'react-native';

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var SCREEN_HEIGHT = require('Dimensions').get('window').height;
class newsList  extends Component{
    constructor(props){
    super(props);
    this.state = {
    };
    }

_onPressLearnMore(){

    }
  render() {
      const { data } = this.props;
    return (
      <View style={styles.container}>
          
           <Image style = {styles.welcomeImage}

          source={require('../../img/powder_swatch.jpg')}
          
        >
        
        </Image>
       
         <View style={styles.parent}>
         <View style={styles.row1}>
         <Button  style={styles.btn1}  onPress={this._onPressLearnMore}  title="STARTUPS" color="#2196f3" backgroundColor = "#2196f3"/>
         <Text style={styles.date}> 12th December 2017</Text>
         </View>
         <Text style={styles.desc2} numberOfLines ={2}>Early market optimism in Asia sparked by bullish American economic data yesterday -- gave way after North Korea said it successfully test-fired an intercontinental ballistic missile </Text>
         <View>
         <Text style={styles.desc22} numberOfLines ={0}>Early market optimism in Asia sparked by bullish American economic data yesterday -- gave way after North Korea said it successfully test-fired an intercontinental ballistic missile </Text>
         </View>
         </View>
         <View  style={styles.line}>

             </View>
        </View>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {justifyContent: 'flex-start',backgroundColor: '#F5FCFF',height: 120 ,margin : 5,flexDirection:'row'},
  welcomeImage : {width : 120, height : 120,flexDirection:'row'},
  Desc:{textAlign: 'center',width : 120,position : 'absolute',alignItems: 'center',justifyContent: 'center',top: 50,backgroundColor:'transparent',color:'#2196f3',flexDirection:'row'},
  Desc1:{textAlign: 'left',width : 120,marginTop:5,flexDirection:'row'},
  dots:{borderRadius: 5,position : 'absolute',top: 10,alignItems: 'flex-start',width:10,height:10,backgroundColor:'white',marginLeft:10,flexDirection:'row'},
  Desc11:{marginTop:3,position : 'absolute',top: 60,alignItems: 'center',justifyContent: 'center',backgroundColor:'transparent',color:'#2196f3',textAlign: 'center',width : 120,flexDirection:'row'},
  btn1 :{ height:20,backgroundColor:'#2196f3',color:'#2196f3',},
  row1:{height: 30,flexDirection:'row'},
  date:{height:20,alignItems: 'center',justifyContent: 'center', marginTop:10,backgroundColor:'transparent',marginLeft:0,fontSize: 13, color:'#2196f3'},
  desc2:{flexDirection:'row',paddingRight:13,fontSize: 15,backgroundColor:'transparent',color:'#2196f3',fontSize: 15},
  desc22:{fontSize: 10,backgroundColor:'transparent',color:'#2196f3',paddingTop:5},
  parent:{marginLeft:5},
  line:{height:1,backgroundColor:'black',paddingTop:5},
});

export default newsList;