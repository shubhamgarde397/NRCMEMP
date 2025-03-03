import { View,Select, Text,TextInput,StyleSheet, Button,TouchableOpacity,FlatList  } from 'react-native';
import TitleScreen from './TitleScreen';
import {useState,useEffect} from 'react';
import {add} from '../util/http'
import Dropdown from '../components/Dropdown';
import PrimaryButton from '../components/PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TruckItem from './TruckItem';
import {display} from '../util/http'

function LRNO({route}){
    const [lrnos,setLR] =useState([]);
    const [username,setUsername] = useState('');
    const [userid,setUserid] = useState('');

    useEffect(() => {get()}, [])

   get = async () => {
    const jsonValue = await AsyncStorage.getItem('userData');
    console.log(jsonValue);
    
    setUsername(jsonValue.username);
    setUserid(jsonValue.userid);
   }

   function getEmptyLRNOF(){
 let data={
            
        "method":"displayemptyLR",
        "todayDate":"2025-01-10",
        "website":"nrcm_m"
    }
    
     display(data).then(res=>{
        if(res.Data[0]['arr'].length==0){
            alert('No LR!')
            setLR([]);
        }else{
            setLR(res.Data[0]['arr']);
        }
    })
        
    }

    return (

<View style={styles.outer}>
 
    <Text>LRNO</Text>
   
    <FlatList alwaysBounceVertical={false} data={lrnos}
 renderItem={truckData=>{
    return (
        <TruckItem data={truckData.item} display='display'/>
    )
 }}
 keyExtractor={(item,index)=>{
    return item._id;
 }}
 />



   <Button onPress={getEmptyLRNOF} title='Get'></Button>


</View>
    )
}

export default LRNO;

const styles=StyleSheet.create({
  
    innerView:{
        marginHorizontal:40,
        marginTop:20,
        backgroundColor:'wheat'
    },
    viewI:{
        padding:5,
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    
    texth:{
        paddingBottom:1,
        marginTop:10,
        width:'20%',
        fontWeight:'bold',

    },
    textpo:{
        paddingBottom:5,
        width:'50%',
        color:'black',
        borderColor:'#FFD6A1',
        borderRadius:5,
        backgroundColor:'#FFD6A1',
        borderWidth:1,
        marginHorizontal:40
    },
    textD:{
        backgroundColor:'#FFD6A1',
        borderRadius:20
    }
})