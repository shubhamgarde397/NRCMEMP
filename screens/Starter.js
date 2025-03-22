import * as React from 'react';
import {useState,useEffect} from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Add from './Add';
import Home from './Home';
import Display from './Display';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainPageMore = createBottomTabNavigator({
    
    screenOptions:{
      animation:'shift'
    },
    screens: {
      Home:
      {
        screen:Home,
          options:{
            headerShown:false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="home-outline" size={24} color='black'/>
            );
          }
          },
      },
      Display: 
      {
        screen:Display,
        
        options:{
          headerShown:false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="desktop" size={24} color='black'/>
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
      }
      
     
    },
  });


const RootStack = createNativeStackNavigator({
    
  screens: {
    // Login:{
    //     screen:LoginScreen,
    //     options:{
    //       headerShown:false,
    //       navigationBarColor:'black',
    //       navigationBarHidden:true,
    //     }
    // },
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
