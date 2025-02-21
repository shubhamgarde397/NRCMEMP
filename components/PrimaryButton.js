import {View,Text,StyleSheet,Pressable} from 'react-native';
import { useState } from 'react';
import { AntDesign } from "@expo/vector-icons";

function PrimaryButton({children,onPress,option}){
function pressHandler(data){
    console.log();
    
    onPress()
}

let options=[];
switch (option) {
    case 'login':
        options=<AntDesign style={{marginLeft:10}} name="lock" size={25} />
        break;

    case 'addTruck':
        options=<AntDesign style={{marginLeft:10}} name="upload" size={20} />
        break;
    case 'phone':
        option = <AntDesign name="phone" size={25} color='red'/>
        break;
}
    return (
        
            <View style={styles.buttonOuter}>
                <Pressable onPress={pressHandler} android_ripple={{color:'#640233'}} style={({pressed})=> pressed? [styles.buttonInner,styles.pressed] :styles.buttonInner}>
                <Text style={styles.buttonText}>
                    {children} {options}
                </Text>
                </Pressable>
            </View>
        
    )
}
// 8399:arkum 1300
// 8399:
// 8399:

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuter:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
    buttonInner:{
        backgroundColor:'#72063c',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        
    },
    buttonText:{
        color:'wheat',
        textAlign:'center'
    },
    pressed:{
        opacity:0.75
    }
    
})