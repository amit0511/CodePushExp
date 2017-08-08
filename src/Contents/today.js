import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,ScrollView,
  StatusBar,Image,TouchableOpacity,
  View,
} from 'react-native';
import ListViewCustome from '../customeListView/ListViewHome';

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var SCREEN_HEIGHT = require('Dimensions').get('window').height;
export default class TodayView extends Component {
  constructor(props, context) {
    super(props, context);
  }
  onPressLearnMore() {

  }
 

  render() {
    console.log('jelld');
    console.log(this.props.navigator)
    return (
      <ScrollView style ={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
          <Text style={styles.welcome}>
            Hello Ankur,
          </Text>
          <Text style={styles.welcomeSubTitle}>
            News snippets gathered as per your preferences
          </Text>
          <View>
        <Image style = {styles.welcomeImage}
          source={require('../../img/logo_og.png')}
        />
        </View>
        <View style = {styles.rowView}>
        <Text style={styles.Btn}>TECHNOLOGY</Text>
        <Text numberOfLines = {1} style={styles.Date1} >12th December 2017</Text> 
        </View>
        <ListViewCustome style={styles.ListViewCustome} isType = {1} navigator = {this.props.navigator} />   
          <View>
           <Text style={styles.sectionTitle}> Explore by interest </Text>
           <View style={styles.ViewAll}>
           <Text style={styles.descButtonStyle}> search by categories </Text>
              <TouchableOpacity onPress={this._onPressLearnMore}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>View ALL</Text>
          </View>
        </TouchableOpacity>
        
         
           </View>
           </View>

         <ListViewCustome style={styles.ListViewCustome} isType = {2}/>   
         <View>
           <Text style={styles.sectionTitle}> Featured News </Text>
           <View style={styles.ViewAll}>
           <Text style={styles.descButtonStyle}> Don't miss out on this </Text>
              <TouchableOpacity onPress={this._onPressLearnMore}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>View ALL</Text>
          </View>
        </TouchableOpacity>
        
         
           </View>
           </View>
         <ListViewCustome style={styles.ListViewCustome} isType = {3}/>   
           <View>
           <Text style={styles.sectionTitle}> Markets </Text>
           <View style={styles.ViewAll}>
           <Text style={styles.descButtonStyle}> Live market prices </Text>
              <TouchableOpacity onPress={this._onPressLearnMore}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>View ALL</Text>
          </View>
        </TouchableOpacity>
        
         
           </View>
           </View>
          <ListViewCustome style={styles.ListViewCustome} isType = {4}/> 
           <View>
           <Text style={styles.sectionTitle}> Current Standing </Text>
           <View style={styles.ViewAll}>
           <Text style={styles.descButtonStyle}> Your latest portfolio update </Text>
              <TouchableOpacity onPress={this._onPressLearnMore}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>View ALL</Text>
          </View>
        </TouchableOpacity>
        
         
           </View>
           </View>


        </View>

        
        </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {flex: 1,justifyContent: 'flex-start',backgroundColor: '#F5FCFF',},
  button: {alignItems: 'center',backgroundColor: '#2196f3',padding:5,borderWidth:1,borderColor: '#2196f3'},
  header: {backgroundColor: '#455A64',},
  welcome: {fontSize: 20,color:'#2196f3',justifyContent: 'flex-start',textAlign: 'left',margin: 10,},
  instructions: {textAlign: 'center',color: '#333333',marginBottom: 5,},
  welcomeSubTitle : { fontSize: 10,color:'#2196f3',justifyContent: 'flex-start',textAlign: 'left',margin: 10,marginTop:5, },
  welcomeImage : {width : SCREEN_WIDTH - 20, height : 200,margin : 10},
  Btn : {width : 120,backgroundColor : '#2196f3' ,justifyContent: 'flex-start',marginLeft:10, padding : 5,},
  Date1 : { justifyContent: 'flex-start',width : 150,textAlign: 'center' },
  ListViewCustome : { height : 100,flex : 1,justifyContent: 'flex-start',marginBottom :40},
  scrollView:{marginBottom : 60},
  buttonText:{color:'white',fontSize: 8,},
  buttonStyle:{height:20,alignItems :'flex-end', },
  descButtonStyle:{flexDirection: "row",color:'#2196f3'},
  sectionTitle:{fontSize: 25, color:'#2196f3'},
  ViewAll:{flexDirection: "row",backgroundColor : '#F5FCFF',justifyContent: 'space-between',height:30},
  rowView:{flexDirection:'row',justifyContent:'flex-start'}
});