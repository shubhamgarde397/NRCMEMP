import {View,StyleSheet,Text} from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryTextInput from '../components/PrimaryTextInput';

function LRItem(props){
    
    const [loadingDate,Dummy] = useState(props.data.loadingDate)
    const [truckNo,DummyF1] = useState(props.data.truckName)
    const [party,DummyF2] = useState(props.data.partyDetails)
    const [destination,DummyF3] = useState(props.data.villageDetails)
    const [tol,DummyF4] = useState(props.data.typeOfLoad)
    const [lrno,changeLRNO] = useState(props.data.lrno)

    function DummyF(data){   
        Dummy(data)
        DummyF1(data)
        DummyF2(data)
        DummyF3(data)
        DummyF4(data)
    }
    function changeLRNOF(data){
        changeLRNO(data);
    }




return (
    <View style={styles.truckItem}>
        
      
        <View style={styles.truckItemDetails}>
        

       <View style={{padding:5,flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
            <Text style={styles.texthl}>{loadingDate}</Text>
            <Text style={styles.texthl}>{truckNo}</Text>
        </View>

        <View style={{padding:5,flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
            <Text style={styles.texthl}>{party}</Text>
            <Text style={styles.texthl}>{destination}</Text>
        </View>

        <View style={{padding:5,flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
            <PrimaryTextInput 
                onPress={changeLRNOF}
                childProps={props.data.lrno}
                nameProps={{autoCapitalize:'characters',keyboardType:'number-pad',value:lrno,placeholder:'Length',maxLength:5}}>
                LRNO
            </PrimaryTextInput>
        </View>
        
    </View> 
        
    </View> 
    
    )
}
export default LRItem;

const styles=StyleSheet.create({
    notification:{

    },
    truckItem:{
        padding:1,
        margin:1,
        borderRadius:20,
        backgroundColor:'#FFD6A1',
        elevation:10,
        borderColor:'#FFD6A1',
        borderWidth:1
    },
    texti:{
        color:'black',
        backgroundColor:'wheat',
        elevation:10,
        borderRadius:28,
        textAlign:'center',
        fontSize:32,
        fontWeight:'bold'
    },
    truckItemDetails:{
        backgroundColor:'wheat',
        borderRadius:20
        },
    truckItem:{
        padding:5,
        margin:10,
        borderRadius:20,
        backgroundColor:'#FFD6A1',
        elevation:5,
        height:150,
        borderColor:'#FFD6A1',
        borderWidth:1
    },
    texti:{
        color:'black',
        backgroundColor:'wheat',
        elevation:10,
        borderRadius:28,
        textAlign:'center',
        fontSize:32,
        fontWeight:'bold'
    },


    viewI:{
        padding:5,
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    viewIC:{
        padding:5,
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    texth:{
        paddingBottom:1,
        marginTop:10,
        width:'20%',
        fontWeight:'bold'
    },
    texthl:{
        paddingBottom:1,
        marginTop:10,
        width:'50%',
        fontWeight:'bold'
    },
    textc:{
        paddingBottom:0,
        backgroundColor:'#FFD6A1',
        width:'80%',
        color:'black'
    },
    textc1:{
        paddingBottom:0,
        backgroundColor:'#FFD6A1',
        width:'40%',
        color:'black'
    },
    textpo:{
        paddingBottom:0,
        backgroundColor:'#FFD6A1',
        width:'80%',
        color:'black',
        borderColor:'wheat',
        borderWidth:1
    }
})