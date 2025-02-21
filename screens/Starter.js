import * as React from 'react';
import { StyleSheet,View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Add from './Add';
import Display from './Display';
import TurnBook from './TurnBook'

const MainPageMore = createBottomTabNavigator({
    
    screenOptions:{
      animation:'shift'
    },
    screens: {
      Turn: 
      {
        screen:TurnBook,
        options:{
          tabBarVisibilityAnimationConfig:false,
          headerShown:false,
          tabBarIcon: (tabInfo) => {
            return (
              <AntDesign name="car" size={25} />
            );
          }
        }
      },
      
      Display: 
      {
        screen:Display,
        
        options:{
          
          headerShown:false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="desktop"
                size={24}
                color='black'
              />
            );
          }
        }
      },
      Add:
      {
          screen:Add,
          options:{
            headerShown:false,
          tabBarIcon: (tabInfo) => {
            return (
              <AntDesign name="pluscircle" size={25} />
            );
          }
          },
      },
     
    },
  });


const RootStack = createNativeStackNavigator({
    
  screens: {
    Login:{
        screen:LoginScreen,
        options:{
          headerShown:false,
          navigationBarColor:'black',
          navigationBarHidden:true,
        }
    },
    Main:{
        screen:MainPageMore,
        options:{
          headerShown:false,
          navigationBarColor:'black',
          navigationBarHidden:true,          
        },

        
    },
  },
  
});

const Navigation = createStaticNavigation(RootStack);

export default function Starter() {
  return <Navigation />
}
