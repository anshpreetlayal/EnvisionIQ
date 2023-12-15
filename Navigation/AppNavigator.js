import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen'; 
const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    
  }
);

export default createAppContainer(AppNavigator);
