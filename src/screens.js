import { Navigation } from 'react-native-navigation';

import LoginScreen from './module/LoginScreen';
import ForgotPasswordScreen from './module/ForgotPasswordScreen';
import OtpVerificationScreen from './module/OtpVerificationScreen';
import SignUpScreen from './module/SignUpScreen';
import HomeScreen from './module/HomeScreen';
import MyWeb from './customeListView/Myweb';

// register all screens of the app (including internal ones)
export function registerScreens(store,provider) {
  Navigation.registerComponent('BASIS.LoginScreen', () => LoginScreen,store,provider);
  Navigation.registerComponent('BASIS.ForgotPasswordScreen', () => ForgotPasswordScreen,store,provider);
  Navigation.registerComponent('BASIS.OtpVerificationScreen', () => OtpVerificationScreen,store,provider);
  Navigation.registerComponent('BASIS.SignUpScreen', () => SignUpScreen,store,provider);
  Navigation.registerComponent('BASIS.Home', () => HomeScreen,store,provider);
  Navigation.registerComponent('BASIS.MyWeb', () => MyWeb);
}