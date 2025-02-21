import { View,Select, Text,TextInput,StyleSheet, Button,TouchableOpacity  } from 'react-native';
import TitleScreen from './TitleScreen';
import {useState} from 'react';
import {add} from '../util/http'
import Dropdown from '../components/Dropdown';
import PrimaryButton from '../components/PrimaryButton';

function Add({route}){
    const [truckno,setTruckNo] =useState('TN');
    const [type,setType] =useState('');

    function setTruckNoF(data){
        setTruckNo(data);
    }

    function setTypeF(data){
        setType(data.label);
    }

    function AddF(){  
        let data={
            'truckno':truckno,
            'type':type,
            "method":"addT",
            "todayDate":"2025-01-10",
            "website":"nrcm_m"
        }
    
        add(data).then(res=>{alert(res.Status)})
    }

    return (

<View style={styles.outer}>
 
    <TitleScreen/>
    <View style={styles.innerView}>

        <View style={styles.viewI}>
            <Text style={styles.texth}>Truck No</Text>
            <TextInput autoCapitalize='characters' maxLength={10} keyboardType='default' style={styles.textpo} value={truckno} onChangeText={setTruckNoF}  placeholder='TruckNo'/>
        </View>
                
        
        <View style={styles.viewI}>
            <Text style={styles.texth}>Type of Vehicle</Text>
            <Dropdown data={[
                { value: "Open", label: "Open" },
                { value: "Container", label: "Container" }
                ]}
                onChange={setTypeF}
                style={styles.textD}
                valueTOV={""}
                placeholder="Select Type" />
        </View>
        <PrimaryButton onPress={AddF} option='addTruck'>Add Truck</PrimaryButton>
    </View>


</View>
    )
}

export default Add;

const styles=StyleSheet.create({
    outer:{
        paddingTop:40,
        backgroundColor:'wheat',
        flex:1
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