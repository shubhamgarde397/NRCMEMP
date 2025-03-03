import { View,FlatList, Text,TextInput,StyleSheet, Button,TouchableOpacity, ScrollView  } from 'react-native';
import TitleScreen from './TitleScreen';
import {useState} from 'react';

import Chip from '../components/Chip';
import HomeSnippet from './HomeSnippet';


function Home({params}){

    const [viewParam,setViewParam] = useState('0');
    
    function caller(data){
        setViewParam(String(data))
    }

    return (

<View style={styles.outer}>
 
   <View>
        <TitleScreen/>
    </View>

    <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
            <Chip onPress={caller} option={'ion'} name={'apps-outline'} value={'1'}>Balance</Chip>
        </View>

        <View style={{flex:1}}>
            <Chip  onPress={caller} option={'ion'} name={'build-outline'} value={'2'}>Settings</Chip>
        </View>

        <View style={{flex:1}}>
            <Chip onPress={caller} option={'ion'} name={'search-outline'} value={'3'}>Find</Chip>
        </View>

        
    </View>
    <View style={{flexDirection:'row',border:1,borderWidth:1,borderBottomColor:'black'}}>
        <View style={{flex:1}}>
            <Chip onPress={caller} option={'ion'} name={'book-outline'} value={'4'}>LRNO</Chip>
        </View>

        <View style={{flex:1}}>
            <Chip onPress={caller} option={'ion'} name={'accessibility-outline'} value={'5'}>Account</Chip>
        </View>
    </View>

    <View style={{flex:5}}>
       <HomeSnippet value={viewParam}></HomeSnippet>
    </View>
{/* lrno
    balance hire
    account settings
    find data
*/}
    
    

</View>
    )
}

export default Home;

const styles=StyleSheet.create({
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