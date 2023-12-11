import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Components/HomeScreen';
import CategoryScreen from '../Components/CategoryScreen';
import JournalScreen from '../Components/JournalScreen';
import SavedQuotesScreen from '../Components/SavedQuotesScreen';
import SettingsScreen from '../Components/SettingsScreen';
import LoginScreen from '../AuthScreens/LoginScreen';
import SignUpScreen from '../AuthScreens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{ title: 'Find your type of quote' }}
        />
        <Stack.Screen
          name="Journal"
          component={JournalScreen}
          options={{ title: 'How do you feel today?' }}
        />
        <Stack.Screen
          name="SavedQuotes"
          component={SavedQuotesScreen}
          options={{ title: 'Your encyclopedia of inspiration' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Have an account? Login' }}
        />
        <Stack.Screen
          name="Register"
          component={SignUpScreen}
          options={{ title: 'Don\'t have an account? Register' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
