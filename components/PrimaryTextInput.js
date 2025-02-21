import {View,Text,TextInput,StyleSheet} from 'react-native';
import { useState } from 'react';
import { AntDesign } from "@expo/vector-icons";
import Blink from './Blink';

function PrimaryTextInput({children,onPress,name,nameProps,childProps}){

let blinker=[]
if(childProps){
    blinker=<Blink duration={400} >
    <AntDesign name="exclamationcircle" size={20} color='red'/>
</Blink>
}
    return (
        
            <View style={styles.viewI}>
                <Text style={styles.texth}>{children} {blinker}</Text>
                
                <TextInput 
                autoCapitalize={nameProps.autoCapitalize} 
                keyboardType={nameProps.keyboardType}
                style={styles.textpo} 
                value={nameProps.value} 
                onChangeText={onPress}  
                maxLength={nameProps.maxLength}
                placeholder={nameProps.placeholder}>
                </TextInput>
                
            </View>
        
    )
}

export default PrimaryTextInput;

const styles = StyleSheet.create({
    viewI:{
        padding:5,
        flexDirection:'row',
        width:'100%',
        // justifyContent:'space-between'
    },
    textpo:{
        paddingBottom:0,
        backgroundColor:'#FFD6A1',
        width:'80%',
        color:'black',
        borderColor:'wheat',
        borderWidth:1
    },
    texth:{
        paddingBottom:1,
        marginTop:10,
        width:'20%',
        fontWeight:'bold'
    }
})