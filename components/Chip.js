import {View,Text,StyleSheet,Pressable} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function Chip({children,onPress,option,value,name}){
function pressHandler(data){
    onPress(value)
}

let options=[];
switch (option) {
    case 'ant':
        options=<AntDesign name={name} size={15} />
        break;

    case 'ion':
        options=<Ionicons name={name} size={15} color='black'/>
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

export default Chip;

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