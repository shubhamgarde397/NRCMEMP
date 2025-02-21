import {View,Button, TouchableOpacity,Text,StyleSheet, TextInput, FlatList} from 'react-native';
import {  useState } from 'react';
import {store} from '../util/http'
import TitleScreen from './TitleScreen';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';
import { AntDesign } from "@expo/vector-icons";

function LoginScreen(){
    const navigation = useNavigation();

const [username,setUserName] =useState('');
const [password,setPassword] =useState('');


function setUserNameF(data){
    setUserName(data);
}

function setPasswordF(data){
    setPassword(data);
}



function Login(){
    let data={
    "username":username,
    "password":password,
    "method":"login",
    "todayDate":"2025-01-10",
    "website":"nrcm_m"
}

    store(data)
        .then(res=>{
            if(res['Login']){
            navigation.navigate(
                'Main',
                {screen:'Add'},
                {params:{userid:res['nrcmid']}});

            }
            else{
                alert('Failed')
            }
        })
    
}

    return (
<View style={styles.screen}>
    <TitleScreen/>

        <View style={styles.innerView}>
            <TextInput onChangeText={setUserNameF} keyboardType='name-phone-pad' value={username} onChange={setUserNameF} style={styles.text} placeholder='Username'/>
            <TextInput onChangeText={setPasswordF} keyboardType='visible-password' value={password} placeholder='Password' style={styles.text}/>
        </View>
        <View style={styles.button}>
            <PrimaryButton onPress={Login} option={'login'}>Login</PrimaryButton>
            
            <Text style={{fontWeight:'bold',textAlign:'center'}}>New User? Please contact Admin to Register.</Text>
        </View>
</View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    button:{
        marginBottom:100,
        alignItems:'stretch',
        alignSelf:'center',
        width:'50%'
    },
    innerView:{
        marginHorizontal:40,
        marginVertical:40,
        // padding:80
    },
    innerViewT:{
        backgroundColor:'wheat'
    },
    text:{
        borderColor:'#ad1414',
        fontSize:15,
        // paddingBottom:0,
        width:'50%',
        alignSelf:'center',
        borderBottomColor:'orange',
        borderBottomWidth:2,
        fontWeight:'bold'
    },
    screen:{
        paddingTop:45,
        backgroundColor:'wheat',
        flex:1
    }
    
})