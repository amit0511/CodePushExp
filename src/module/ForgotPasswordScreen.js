import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,Image,ScrollView,
  Platform,TouchableHighlight
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import InputText from './InputText';
import KeyboardSpacer from 'react-native-keyboard-spacer';
export default class ForgotPasswordScreen extends Component {
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
      this.props.navigator.dismissModal();
    }
  }
   _onEmailChange(text){
   // this.props.emailChanged(text);
  }
  _onPressButton()
  {
     this.props.navigator.push({
      screen: "BASIS.OtpVerificationScreen"
    });
    
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
       <Text style = {styles.link}>Enter your register mobile number or email address
       </Text>
       </View>
           <InputText
              height= {50}
            label={'EMAIL/MOBILE '}
            iconColor={'#458ee5'}
            iconName={'user'}
            iconClass={FontAwesomeIcon}
            onChangeText = {this._onEmailChange.bind(this)}
            value = {this.props.email}
          /> 
     

        </View>
<View style = { {alignItems: 'center',justifyContent: 'center', }}>
<TouchableHighlight
  style={styles.submit}
  onPress={this._onPressButton.bind(this)}
  underlayColor='#fff'>
    <FontAwesomeIcon name="chevron-right" color="#ffff" style={{alignItems: 'center',justifyContent: 'center', }} />
  </TouchableHighlight>
  </View>
        {/* <View style = {{alignItems: 'center',justifyContent: 'center',height: 50,width:50} }>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
        <FontAwesomeIcon name="chevron-right" color="#4F8EF7" style={{alignItems: 'center',justifyContent: 'center', }} />
    </TouchableHighlight>
    </View> */}

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
    color: '#4F8EF7',
    fontSize: 16,

  }
});