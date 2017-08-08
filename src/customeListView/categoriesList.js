import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,
  View,
} from 'react-native';

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var SCREEN_HEIGHT = require('Dimensions').get('window').height;
class categoriesList  extends Component{
    constructor(props){
    super(props);
    this.state = {
    };
    }

  render() {
      const { data } = this.props;
    return (
      <View style={styles.container}>
          
           <Image style = {styles.welcomeImage}

          source={require('../../img/powder_swatch.jpg')}
          
        >
         <Image source={{uri: data.urlToImage}}
       style={styles.welcomeImage}/>
        
        </Image>
        <View style={styles.dots}>
          </View>
         <Text style={styles.Desc}>MARKETS</Text> 
         <Text style={styles.Desc11}>313 Articles</Text> 
        
        </View>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {justifyContent: 'flex-start',backgroundColor: '#F5FCFF',height: 120,width:120 ,margin : 5},
  welcomeImage : {width : 120, height : 120,},
  Desc:{textAlign: 'center',width : 120,position : 'absolute',alignItems: 'center',justifyContent: 'center',top: 50,backgroundColor:'transparent',color:'#2196f3'},
  Desc1:{textAlign: 'left',width : 120,marginTop:5},
  dots:{borderRadius: 5,position : 'absolute',top: 10,alignItems: 'flex-start',width:10,height:10,backgroundColor:'white',marginLeft:10},
  Desc11:{marginTop:3,position : 'absolute',top: 60,alignItems: 'center',justifyContent: 'center',backgroundColor:'transparent',color:'#2196f3',textAlign: 'center',width : 120}
});

export default categoriesList;