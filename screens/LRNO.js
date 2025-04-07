import { View,Select, Text,TextInput,StyleSheet, Button,TouchableOpacity,FlatList  } from 'react-native';
import {useState,useEffect} from 'react';;
import PrimaryButton from '../components/PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LRItem from './LRItem';
import {displayMBS} from '../util/http'

function LRNO({route}){
    const [lrnos,setLR] =useState([{"_id": "67f0a974cb4a3c74ca47574b", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN32 CH 3813", "typeOfLoad": "Pipe", "villageDetails": "Kumbhakonam", "weight": "8"}, {"_id": "67f0a976cb4a3c74ca47575c", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN54 S 4618", "typeOfLoad": "Fittings", "villageDetails": "Kumbhakonam", "weight": "6"}, {"_id": "67f0a976cb4a3c74ca47575b", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN58 BA 5305", "typeOfLoad": "Fittings", "villageDetails": "Trichy", "weight": "6"}, {"_id": "67f0a975cb4a3c74ca47575a", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN32 BE 4244", "typeOfLoad": "Fittings", "villageDetails": "Kumbhakonam", "weight": "6"}, {"_id": "67f0a975cb4a3c74ca475756", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN32 BA 9529", "typeOfLoad": "Fittings", "villageDetails": "Pattukottai", "weight": "6"}, {"_id": "67f0a975cb4a3c74ca475755", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN36 BU 9885", "typeOfLoad": "Pipe", "villageDetails": "Erode", "weight": "8"}, {"_id": "67f0a975cb4a3c74ca475754", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN18 BM 8119", "typeOfLoad": "Pipe", "villageDetails": "Thanjavur", "weight": "8"}, {"_id": "67f0a975cb4a3c74ca475753", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN64 AB 9450", "typeOfLoad": "Fittings", "villageDetails": "Trichy", "weight": "6"}, {"_id": "67f0a974cb4a3c74ca475752", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN54 T 5648", "typeOfLoad": "Fittings", "villageDetails": "Trichy", "weight": "6"}, {"_id": "67f0a974cb4a3c74ca475751", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN30 CU 6117", "typeOfLoad": "Pipe", "villageDetails": "Kallakuruchi", "weight": "10"}, {"_id": "67f0a974cb4a3c74ca475750", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN36 BT 8582", "typeOfLoad": "Pipe", "villageDetails": "Erode", "weight": "8"}, {"_id": "67f0a974cb4a3c74ca47574f", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN25 CD 6705", "typeOfLoad": "Pipe", "villageDetails": "Manargudi", "weight": "8"}, {"_id": "67f0a974cb4a3c74ca47574e", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN61 X 8209", "typeOfLoad": "Pipe", "villageDetails": "Thanjavur", "weight": "8"}, {"_id": "67f0a974cb4a3c74ca47574d", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN32 BD 0397", "typeOfLoad": "Pipe", "villageDetails": "Villupuram", "weight": "10"}, {"_id": "67f0a974cb4a3c74ca47574c", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN25 CA 2722", "typeOfLoad": "Fittings", "villageDetails": "Mayavaram", "weight": "6"}, {"_id": "67f0a973cb4a3c74ca475749", "loadingDate": "2025-04-01", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN31 CH 8285", "typeOfLoad": "Pipe", "villageDetails": "Villupuram", "weight": "10"}, {"_id": "67f0ab9b3b0c56f211dedd8d", "loadingDate": "2025-04-04", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN16 J 3479", "typeOfLoad": "Pipe", "villageDetails": "Kallakuruchi", "weight": "10"}, {"_id": "67f0ab9c3b0c56f211dedd8e", "loadingDate": "2025-04-04", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN30 CF 8857", "typeOfLoad": "Pipe", "villageDetails": "Thanjavur", "weight": "8"}, {"_id": "67f0ab9c3b0c56f211dedd8f", "loadingDate": "2025-04-04", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN31 CA 5142", "typeOfLoad": "Fittings", "villageDetails": "Kallakuruchi", "weight": "6"}, {"_id": "67f0ab9c3b0c56f211dedd91", "loadingDate": "2025-04-04", "lrno": 0, "partyDetails": "Sri Ram Traders", "truckName": "TN22 CB 2506", "typeOfLoad": "Fittings", "villageDetails": "Vellore", "weight": "6"}, {"_id": "67f0ab9c3b0c56f211dedd95", "loadingDate": "2025-04-04", "lrno": 0, "partyDetails": "Sri Ram Traders", "truckName": "MH13 CU 9656", "typeOfLoad": "Pipe", "villageDetails": "Kanjipuram", "weight": "8"}, {"_id": "67f0ab9c3b0c56f211dedd97", "loadingDate": "2025-04-04", "lrno": 0, "partyDetails": "Sri Ram Traders", "truckName": "TN16 K 0977", "typeOfLoad": "Fittings", "villageDetails": "Kanjipuram", "weight": "SXL-32"}, {"_id": "67f0ab9d3b0c56f211dedd98", "loadingDate": "2025-04-04", "lrno": 0, "partyDetails": "Shri Vijay PVC Distributors", "truckName": "TN55 CT 7461", "typeOfLoad": "Pipe", "villageDetails": "Thanjavur", "weight": "8"}, {"_id": "67f0ab9d3b0c56f211dedd99", "loadingDate": "2025-04-04", "lrno": 0, "partyDetails": "Tubes and Pipes_Salem", "truckName": "MH12 TV 4207", "typeOfLoad": "Pipe", "villageDetails": "Krishnagiri", "weight": "7"}]);
    const [username,setUsername] = useState('');
    const [userid,setUserid] = useState('');

    useEffect(() => {get()}, [])

   get = async () => {
    const jsonValue = await AsyncStorage.getItem('userData');
    console.log(jsonValue);
    
    setUsername(jsonValue.username);
    setUserid(jsonValue.userid);
   }

   function setTypeF(){}
    

   function getEmptyLRNOF(){
 let data={
            
        "method":"getMonthlyBySeries",
        "todayDate":"2025-01-10",
        "website":"nrcm_m"
    }
    
    displayMBS(data).then(res=>{
        
        if(res.length==0){
            alert('No LR!')
            setLR([]);
        }else{
            console.log(res);
            
            setLR(res['Data']);
        }
    })
                                                                 
    }

        function UpdateTruck(){
                let data={
                    
                "method":"updateLRNOAll",
                "todayDate":"2025-01-10",
                "website":"nrcm_m",
                "tbid":props.data._id,
                "lrno":lrno
            }
    
        updatelrno(data).then(res=>{alert(res.Status);})
            
                    }

    return (

<View style={styles.outer}>
<Button style={styles.button} onPress={getEmptyLRNOF} title='Get'></Button>
<Button style={styles.button} onPress={getEmptyLRNOF} title='Update'></Button>
   
<FlatList alwaysBounceVertical={false} data={lrnos}
 renderItem={truckData=>{
    return (
        <LRItem data={truckData.item}/>
    )
 }}
 keyExtractor={(item,index)=>{
    return item._id;
 }}
 />



</View>
    )
}

export default LRNO;

const styles=StyleSheet.create({
    button:{
        flex:1,
        paddingHorizontal:15,
    },
    outer:{
        // flex:1,
        // flexDirection:'column',
        // paddingTop:40,
        backgroundColor:'wheat'
    },
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