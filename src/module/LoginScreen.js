import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,Keyboard,
  Alert,Image,ScrollView,TouchableWithoutFeedback,
  Platform,TouchableHighlight
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { emailChanged,passwordChanged,loginUser } from '../actions';
import {Navigation} from 'react-native-navigation';
import InputText from './InputText';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import reducers from '../reducers';
import configureStore from '../store/configureStore';
import KeyboardSpacer from 'react-native-keyboard-spacer';
const Dimensions = require('Dimensions');
import { Spinner } from './Spinner';
const window = Dimensions.get('window'); 

const navigatorStyle = {
    navBarBackgroundColor: '#ffff',
    navBarTextColor: '#ffff00',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#458ee5',
    statusBarTextColorScheme: 'light',
    navBarHidden: true,
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#458ee5',
    tabBarSelectedButtonColor: '#ffff00',
  };
 class LoginScreen extends Component {
    constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  

  componentWillMount(){

  }
  _dontHaveAccount(){
    console.log('ajsjsj');
  //this.props.navigator
     this.props.navigator.showModal({
      screen: "BASIS.SignUpScreen"
    });

  }
  _forgotPassword(){
this.props.navigator
     this.props.navigator.showModal({
      screen: "BASIS.ForgotPasswordScreen"
    });
  }

  renderBtn(){
    if (this.props.loading) {
      return <Spinner size="large" />;
    }else{
    return (
    <TouchableHighlight
  style={styles.submit}
  onPress={this._onPressButton.bind(this)}
  underlayColor='#fff'>
    <FontAwesomeIcon name="chevron-right" color="#ffff" style={{alignItems: 'center',justifyContent: 'center', }} />
  </TouchableHighlight>
    );
    }
  }

 onNavigatorEvent(event) {
    // if (event.id === 'menu') {
    //   this.props.navigator.toggleDrawer({
    //     side: 'left',
    //     animated: true
    //   });
    // }
    // if (event.id === 'edit') {
    //   Alert.alert('NavBar', 'Edit button pressed');
    // }
    // if (event.id === 'add') {
    //   Alert.alert('NavBar', 'Add button pressed');
    // }
  }

  
  _onPressButton(){

const { email, password} = this.props;
this.props.loginUser({ email,password });

    // this.props.navigator.showModal({
    //   screen: "BASIS.Home"
    // });
   

  }
  _onEmailChange(text){
    this.props.emailChanged(text);
  }
  _onPasswordChange(text){
    this.props.passwordChanged(text);
  }
  

 render(){
   console.log('ans')
   console.log(this.props.error);
   console.log(this.props.user);
   if (this.props.error === '' && this.props.user != null){
  this.props.navigator.showModal({
      screen: "BASIS.Home",
    navigatorStyle: navigatorStyle,
    });
   
   }
   
return(
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{flex: 1, paddingTop: 50,justifyContent: 'space-between',}}>
     
    <View style={{alignItems: 'center',justifyContent: 'center', }}>
        <Image
          style={styles.logo}
             source={require('../../img/Logo.png')}
          />
    </View>
       <View style={[styles.card2, { backgroundColor: '#ffffff' ,padding : 20}]}>
  

           <InputText
              height= {50}
            label={'EMAIL/MOBILE '}
            iconColor={'#458ee5'}
            keyboardType={'email-address'}
            iconName={'user'}
            returnKeyType = {'next'}
            iconClass={FontAwesomeIcon}
            onChangeText = {this._onEmailChange.bind(this)}
            value = {this.props.email}
          /> 
     

           <InputText
            secureTextEntry
            style={styles.input}
            iconColor={'#458ee5'}
             iconName={'lock'}
             returnKeyType = {'done'}
             keyboardType={'email-address'}
            label={'PASSWORD'}
            value = {this.props.password}
            onChangeText = {this._onPasswordChange.bind(this)}
            iconClass={FontAwesomeIcon}
          /> 
        </View>
        <Text style = {{fontSize:20,alignSelf : 'center',color:'red'}}>{this.props.error}</Text>
<View style = { {alignItems: 'center',justifyContent: 'center', }}>
{this.renderBtn()}
  </View>
  <KeyboardSpacer/>
     

<View style = {{ flexDirection: 'row',	justifyContent: 'space-between', paddingBottom : 0}}>
<TouchableOpacity
 
  onPress={ this._dontHaveAccount.bind(this)}
  underlayColor='#fff'>
  <Text style={styles.link}> Don't Have An Account? </Text>
  </TouchableOpacity>
<TouchableOpacity
 
  onPress={this._forgotPassword.bind(this)}
  underlayColor='#fff'>
  <Text  style={styles.link} > Forgot Password? </Text>
  </TouchableOpacity>

</View>
        </View>
        </TouchableWithoutFeedback>
            );};

}

const mapStateToProps = state =>{
return {
  email:state.auth.email,
  password:state.auth.password,
  error:state.auth.error,
  loading:state.auth.loading,
  user: state.auth.user
};

};

export default  connect(mapStateToProps,{emailChanged, passwordChanged,loginUser })(LoginScreen);
    
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
    fontSize: 18,

  }
});