{/* <TextInput style={[
                    styles.textpo,
                    props.data.onameTF ?
                    { backgroundColor: 'red' } 
                    : { backgroundColor: 'white' }]} 
                editable={props.data.onameTF} value={oname} onChangeText={changeNameF}  placeholder='Name'></TextInput> */}


import {View,StyleSheet} from 'react-native';
import { useState } from 'react';
import TruckItemDetail from './TruckItemDetail'
import HeaderButton from '../components/HeaderButton'
function TruckItem(props){
    const [showView,changeView] = useState(false)
    let Div=[]
    let Display=[]
    if(showView){
        Div=<TruckItemDetail data={props.data} />
    }
    switch (props.display) {
        case 'display':
            Display=<HeaderButton onPress={changeViewF} show='true' blinkerTF={props.data.tf}>{props.data.truckno}</HeaderButton>    
        break;
        
    }
        
    
    function changeViewF(){
        changeView(!showView)
    }
        
    
    
return (
    <View style={styles.truckItem}>
        
        {/* <HeaderButton onPress={changeViewF} blinkerTF={props.data.tf}>{props.data.truckno}</HeaderButton> */}
        {Display}
        {Div}
        
    </View> 
    
    )
}
export default TruckItem;

const styles=StyleSheet.create({
    notification:{

    },
    truckItem:{
        padding:5,
        margin:10,
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
    }
})