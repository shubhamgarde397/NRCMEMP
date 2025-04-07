import {View,Button,Image, TouchableOpacity,Text,StyleSheet, TextInput, FlatList, Platform, PermissionsAndroid} from 'react-native';
import {  useState } from 'react';
import {store} from '../util/http'
import {storeImg} from '../util/http'
import TitleScreen from './TitleScreen';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { launchCamera } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

function LoginScreen(){
    const navigation = useNavigation();

const [username,setUserName] =useState('');
const [password,setPassword] =useState('');

const [image, setImage] = useState('https://truckdriverdocuments.s3.ap-south-1.amazonaws.com/papa/testing.jfif');

const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
        mediaType:'camera',
        maxHeight:550,
        maxWidth:300,
        base64:true,
        
    })
    if (!result.canceled) {
      let temp={
        'method':'tp',
        'tablename':'',
        'base64':result.assets[0].base64,
        'name':'testing123',
        "todayDate":"2025-01-10",
        "website":"nrcm_m"
      }


      storeImg(temp)
        .then(res=>{
            alert(res)
            
        })


    }
  };



function setUserNameF(data){
    setUserName(data.replace(/ /g,''));
}

function setPasswordF(data){
    setPassword(data.replace(/ /g,''));
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
                storeData({'userid':res['nrcmid'],'username':res['displayName']})

            navigation.navigate(
                'Main',
                {screen:'Display'},
                {params:{userid:res['nrcmid']}});

            }
            else{
                alert('Failed')
            }
        })
    
}


const storeData = async (value) => {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('userData', jsonValue);
  };
    return (
<View style={styles.screen}>
    <TitleScreen/>
        {/* <Button title="Camera" onPress={pickImage} />
          <Image style={{width: 50, height: 50}} source={{uri: 'https://truckdriverdocuments.s3.ap-south-1.amazonaws.com/papa/testing123.png'}} resizeMode={'cover'}/> */}
          

        <View style={styles.innerView}>
            <TextInput onChangeText={setUserNameF} keyboardType='name-phone-pad' value={username} style={styles.text} placeholder='Username'/>
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
    image: {
        width: 200,
        height: 200,
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
        // paddingTop:45,
        backgroundColor:'wheat',
        flex:1
    }
    
})