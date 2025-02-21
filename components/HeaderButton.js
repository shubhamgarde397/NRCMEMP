import {View,Text,StyleSheet,Pressable} from 'react-native';
import Blink from './Blink';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

function HeaderButton({children,onPress,blinkerTF,show}){


    const [expanded, setExpanded] = useState(false);
     

function pressHandler(){
    setExpanded(!expanded), [expanded]
    onPress()
}
let blinker=[]
if(show==='true'){
    if(blinkerTF){
        blinker=<Blink duration={400}>
                    <AntDesign name="exclamationcircle" size={25} color='red' style={styles.blinkerStyle}/>
                </Blink>
    }else{
        
        blinker=<View>
                    <AntDesign name="check" size={25} color='green' style={styles.blinkerStyle}/>
                </View>
    }
}
    return (
        
            <View style={styles.buttonOuter}>
                <Pressable onPress={pressHandler} android_ripple={{color:'#FFD6A1'}} style={({pressed})=> pressed? [styles.buttonInner,styles.pressed] :styles.buttonInner}>
                    
                <Text style={styles.buttonText}>
                    {children}
                    {blinker}
                    <View style={{alignContent:'right',textAlign:'right'}}>
                <AntDesign name={expanded ? "caretup" : "caretdown"}/>
                </View>    
                </Text>
                
                
                    
                </Pressable>
            </View>
        
    )
}

export default HeaderButton;

const styles = StyleSheet.create({
    blinkerStyle:{
        marginHorizontal:30
    },
    buttonOuter:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
    buttonText:{
        color:'black',
        backgroundColor:'wheat',
        elevation:10,
        borderRadius:28,
        textAlign:'center',
        fontSize:32,
        fontWeight:'bold'
    },
    pressed:{
        opacity:0.75
    },
    notify:{
        color:'red',
        textAlign:'right',
        textAlignVertical:'center',
        width:20,
        height:20,
        borderRadius:100,
        backgroundColor:'red',
        marginHorizontal:10
    }    
})