import { View,FlatList, Text,TextInput,StyleSheet, Button,TouchableOpacity, ScrollView  } from 'react-native';
import TitleScreen from './TitleScreen';
import {useState} from 'react';
import {display} from '../util/http'
import TruckItem from './TruckItem';


function Display({params}){

    const [alertCount,setalertCount] = useState(0);
    const [trucks,setTruck] = useState([]);

    function DisplayF(){
        let data={
            
        "method":"displayT",
        "todayDate":"2025-01-10",
        "website":"nrcm_m"
    }
    
     display(data).then(res=>{
        if(res.Data[0]['arr'].length==0){
            alert('No Trucks!')
            setTruck([]);
        setalertCount(0)
        }else{
            console.log(res.Data[0]['arr']);
            
        setTruck(res.Data[0]['arr']);
        setalertCount(res.Data[1]['alertCount'])
        }
    })
        
    }

    return (

<View style={styles.outer}>
 
   <View style={styles.screen}>
        <TitleScreen/>
    </View>
    <Text style={styles.alertText}>{alertCount} missing entries!</Text>
<FlatList alwaysBounceVertical={false} data={trucks}
 renderItem={truckData=>{
    return (
        <TruckItem data={truckData.item} display='display'/>
    )
 }}
 keyExtractor={(item,index)=>{
    return item._id;
 }}
 />
    
    <Button style={styles.button} onPress={DisplayF} title='Get'></Button>

</View>
    )
}

export default Display;

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