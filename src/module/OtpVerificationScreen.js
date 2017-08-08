import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,Image,
  Alert,TouchableHighlight,ScrollView,
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import InputText from './InputText';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import KeyboardSpacer from 'react-native-keyboard-spacer';
//arrow-circle-o-left
export default class OtpVerificationScreen extends Component {
  static navigatorButtons = {
    rightButtons: [{
      icon: require('../../img/Logo.png'),
      id: 'close'
    }]
  };
    constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  
 onNavigatorEvent(event) {
   if (event.id == 'close') {
      this.props.navigator.dismissAllModals();
    }
  }
  _onEmailChange(text){
   // this.props.emailChanged(text);
  }
  _resendOtp(){

  }
 render(){
            return(
                <View style={{flex: 1, paddingTop: 50 ,justifyContent: 'space-around'}}>
                <ScrollView scrollEnabled={false}>
    <View style={{alignItems: 'center',justifyContent: 'center', }}>
        <Image
          style={styles.logo}
             source={require('../../img/Logo.png')}
          />
    </View>
       <View style={[styles.card2, { backgroundColor: '#ffffff' ,padding : 20}]}>
       <View style = {{alignItems: 'center',justifyContent: 'center', }}>
       <Text style = {styles.link}>RESET PASSWORD
       </Text>
       <Text style = {styles.link}>Enter your Code Recived on your  mobile
       </Text>
       </View>
           <InputText
              height= {50}
            label={'OTP'}
            iconColor={'#458ee5'}
            iconName={'check-square-o'}
            iconClass={FontAwesomeIcon}
            onChangeText = {this._onEmailChange.bind(this)}
            value = {this.props.email}
          /> 
     

        </View>
<View style = { {alignItems: 'center', justifyContent: 'space-between' }}>
<TouchableHighlight
  style={styles.submit}
  onPress={() => this._onPressButton.bind(this)}
  underlayColor='#fff'>
    <FontAwesomeIcon name="check" color="#ffff" style={{alignItems: 'center',justifyContent: 'center', }} />
  </TouchableHighlight>
  <TouchableOpacity
  onPress={ this._resendOtp.bind(this)}
  underlayColor='#fff'>
  <Text style={styles.link}> Resend OTP </Text>
  </TouchableOpacity>
  </View>
  </ScrollView>
  <KeyboardSpacer/>
        </View>
        
        

            );};

}
          const styles = StyleSheet.create({
  input: {marginBottom: 10,marginTop: 10,},
  logo:{height: 50,width: 50,resizeMode : 'contain',},
  submit:{
    width:50,
    height:50,
    marginTop:10,
    paddingTop:20,justifyContent: 'center',alignItems: 'center',
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:25,
    borderWidth: 1,
    borderColor: '#fff'
  },link:{
    paddingTop:10,
    color: '#4F8EF7',
    fontSize: 16,

  }
});