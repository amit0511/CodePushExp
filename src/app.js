import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';
import configureStore from './store/configureStore';
import thunk from 'redux-thunk';
const store = configureStore();
registerScreens(store,Provider); // this is where you register all of your app's screens
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

Navigation.startSingleScreenApp({
    screen: {
    screen: 'BASIS.LoginScreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: navigatorStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});
