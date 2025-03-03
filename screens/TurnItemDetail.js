import {View, Text,StyleSheet,Pressable} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import {Linking} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
function TurnItemDetail(props){
  
function makecall(data){

    // Linking.openURL(`tel:${data}`)
}
    const contactOV=[]
    for(let i = 0;i<props.data.contacttb.length;i++){
        contactOV.push(
            <Text style={styles.textc} key={i}>
                <Pressable 
                onPress={()=>{Linking.openURL(`tel:+91${props.data.contacttb[i]}`)}} 
                android_ripple={{color:'#640233'}} 
                >
                     <Text style={styles.buttonText}>{props.data.contacttb[i]} <AntDesign name="phone" size={25} color='red'/></Text>
                </Pressable>
            </Text>
        )
    }
     
return (
    <View style={styles.truckItemDetails}>

        <View style={styles.viewI}>

            <Text style={styles.texth}>Contact</Text>
            <View style={{width:'100%',marginLeft:0,paddingVertical:10}}>
                {contactOV}
                </View>
        </View>
    </View> 
    )
}
export default TurnItemDetail;

const styles=StyleSheet.create({
    buttonText:{
        color:'black',
        textAlign:'center',
        fontSize:20
    },
    pressed:{
        opacity:0.75
    },
    truckItemDetails:{
        backgroundColor:'wheat',
        borderRadius:20
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
        fontWeight:'bold'
    },
    textc:{
        paddingVertical:20,
        backgroundColor:'wheat',
        width:'80%',
        color:'black',
        textAlign:'right'
    }
})