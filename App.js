import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import FacebookScreen from './screens/fb';
import InstagramScreen from './screens/in';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer
    
    />
  );
  }
}

var TabNavigator = createBottomTabNavigator({
  Instagram: {screen:InstagramScreen},
  Facebook: {screen: FacebookScreen}
})
const Appcontainer = createAppContainer(TabNavigator)
