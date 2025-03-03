import { View,FlatList, Text,TextInput,StyleSheet, Button,TouchableOpacity, ScrollView  } from 'react-native';
import TitleScreen from './TitleScreen';
import {useState} from 'react';
import {display} from '../util/http'
import TruckItem from './TruckItem';
import LRNO from './LRNO';

function HomeSnippet({params,value}){
    let data=[]

     switch (value) {
        case '4':
            data=<LRNO></LRNO>
        break;
     }

    return (

<View style={styles.outer}>
 
  
    <View style={styles.screen}>
        {data}
    </View>

</View>
    )
}

export default HomeSnippet;

const styles=StyleSheet.create({
    alertText:{
        color:'red',
        display:'flex',
        fontWeight:'bold',
        justifyContent:'center',
        textAlign:'center',
        fontSize:20
    },
    textInput:{
        backgroundColor:'wheat',
        width:200
    },
    truckContainer:{
        flex:5
    },
    truckItem:{
        padding:5,
        margin:8,
        borderRadius:6,
        backgroundColor:'purple',
        height:200
    },
    truckText:{
        color:'black'
    },
    outer:{
        flex:1,
        flexDirection:'column',
        // paddingTop:40,
        backgroundColor:'wheat'
        
    },
    innerU:{
        flex:10,
        color:'black'
    },
    innerD:{
        paddingBottom:5,
        paddingHorizontal:16,
        flex:1,
        flexDirection:'row',
        backgroundColor:'blue',
    },
    button:{
        flex:1,
        paddingHorizontal:15,
          color:'red'
    }

})