import React from 'react';
// import {View,Text,StyleSheet} from "react-native";
import Hometemp from './Hometemp';
import Offersnavigation from '../Offers/Offersnavigation';
import Popularnavigation from '../Popular/Popularnavigation';
import Cartnavigation from '../Cart/Cartnavigation';
import Accountnavigation from '../Account/Accountnavigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator,createAppContainer} from 'react-navigation';

const BottomNavigator= createBottomTabNavigator({
    Hometemp: {
      screen: Hometemp,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
         <Icon name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    Offersnavigation: {
      screen: Offersnavigation,
      navigationOptions: {
        tabBarLabel: 'Offers',
       tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-gift" color={tintColor} size={24} />
        )
      }
    },
    Popularnavigation: {
      screen: Popularnavigation,
      navigationOptions: {
        tabBarLabel: 'Popular',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-analytics" color={tintColor} size={24} />
        )
      }
    },
    Cartnavigation: {
      screen: Cartnavigation,
      navigationOptions: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-cart" color={tintColor} size={24} />
        )
      }
    },
    Accountnavigation: {
      screen: Accountnavigation,
      navigationOptions: {
        tabBarLabel: 'Account',
       tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color={tintColor} size={24} />
        )
      }
    },
   
    
  
  }, 
     {
       initialRouteName: 'Hometemp',
      order: ['Hometemp', 'Offersnavigation','Popularnavigation','Cartnavigation','Accountnavigation'],
     
      navigationOptions: {
        tabBarVisible: true
      },
      tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'grey'
      }
    });
    const AppContainer=createAppContainer(BottomNavigator);
 class Homeproducts extends React.Component {
    
    render() {
      return (
    
          <AppContainer/>
     
       ) }
  }
 
  export default Homeproducts;