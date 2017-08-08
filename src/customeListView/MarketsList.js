import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,Button,
  View,TouchableOpacity,
} from 'react-native';

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var SCREEN_HEIGHT = require('Dimensions').get('window').height;
class MarketsList  extends Component{
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
        <View>
      <View style={styles.container}>
          <View style={styles.subContainer} >
              <Text>Dow Jones Mini</Text>
              <View style={styles.row}>
              <Text style={styles.txt}>21448.0</Text>
              <Text style={styles.txt}>+0.08</Text>
               <TouchableOpacity onPress={this._onPressLearnMore}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>+12.00</Text>
          </View>
        </TouchableOpacity>

              
              </View>
             
            
        </View>
        
        </View>
          <View style={styles.line}>
            </View>
        </View>
      
    );
  }

}
const styles = StyleSheet.create({
  container: {justifyContent: 'flex-start',backgroundColor: '#F5FCFF',height: 50,margin : 5,flexDirection:'column',flex:1},
  row:{flexDirection:'row',justifyContent: 'space-between',backgroundColor: 'transparent' ,},
  line:{height:1,backgroundColor:'#2196f3',height:1},
  txt:{height : 20},
  button: {marginBottom: 30,alignItems: 'center',backgroundColor: 'white',padding:5,borderWidth:1,borderColor: '#2196f3'},
  buttonText:{color:'#2196f3',fontSize: 8,},
  subContainer:{height:55},
  buttonStyle:{fontSize: 5,color: '#637775',backgroundColor: 'red',transform: [{scaleX: 0.5}, {scaleY: 0.5}]},
});

export default MarketsList;