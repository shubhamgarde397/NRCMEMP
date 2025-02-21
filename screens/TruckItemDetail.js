import {View,TextInput,Button, Text,StyleSheet} from 'react-native';
import { useState } from 'react';
import {update} from '../util/http';
import PrimaryButton from '../components/PrimaryButton';
import Dropdown from '../components/Dropdown';
import PrimaryTextInput from '../components/PrimaryTextInput';
import Blink from '../components/Blink';
import { AntDesign } from "@expo/vector-icons";
function TruckItemDetail(props){

    let blinker=[]
    let contactBlinker=[]
    if(props.data.missArr.toc){
        blinker=<Blink duration={400} >
        <AntDesign name="exclamationcircle" size={20} color='red'/>
    </Blink>
    }
    if(props.data.missArr.contact){
        contactBlinker=<Blink duration={400} >
        <AntDesign name="exclamationcircle" size={20} color='red'/>
    </Blink>
    }

    const [oname,changeName] = useState(props.data.oname)
    const [pan,changePan] = useState(props.data.pan)
    const [length,changeL] = useState(props.data.l)
    const [weight,changeW] = useState(props.data.w)
    const [tov,changeTov] = useState(props.data.toc)
    const [additionalContact,changeC] = useState('')

    const contactOV=[]
    for(let i = 0;i<props.data.contacttb.length;i++){
        contactOV.push(
            <Text style={styles.textc} key={i}>{props.data.contacttb[i]}</Text>
            
        )
    }

    function changeNameF(data){   
        changeName(data);
    }
    function changeLF(data){
        changeL(data);
    }

    function changePanF(data){
            changePan(data);
        }
    
    function changeWF(data){
            changeW(data);
        }
    function changeCF(data){
            changeC(data);
        }
        function changeTovF(data){
            changeTov(data.label);
        }

    function UpdateTruck(){
            let data={
                
            "method":"updateT",
            "todayDate":"2025-01-10",
            "website":"nrcm_m",
            "oid":props.data.oid,
            "tbid":props.data._id,
            "oname":oname,
            "pan":pan,
            "w":weight,
            "l":length,
            "tov":tov,
            "contact":additionalContact,
        }

    update(data).then(res=>{alert(res.Status);})
        
                }

    function DeleteTruck(){
        let data={
                
            "method":"deleteT",
            "todayDate":"2025-01-10",
            "website":"nrcm_m",
            "tbid":props.data._id,
        }

        deleteT(data).then(res=>{alert(res.Status);})
        
    }
return (
    <View style={styles.truckItemDetails}>
        
        <PrimaryTextInput 
            onPress={changeNameF}
            childProps={props.data.missArr.oname}
            nameProps={{autoCapitalize:'words',keyboardType:'default',value:oname,placeholder:'Name',maxLength:20}}>
            Name
        </PrimaryTextInput>

        <PrimaryTextInput 
            onPress={changePanF}
            childProps={props.data.missArr.pan}
            nameProps={{autoCapitalize:'characters',keyboardType:'default',value:pan,placeholder:'PAN',maxLength:10}}>
            PAN
        </PrimaryTextInput>

        <PrimaryTextInput 
            onPress={changeLF}
            childProps={props.data.missArr.l}
            nameProps={{autoCapitalize:'characters',keyboardType:'number-pad',value:length,placeholder:'Length',maxLength:2}}>
            Length
        </PrimaryTextInput>

        <PrimaryTextInput 
            onPress={changeWF}
            childProps={props.data.missArr.w}
            nameProps={{autoCapitalize:'characters',keyboardType:'number-pad',value:weight,placeholder:'Weight',maxLength:2}}>
            Weight
        </PrimaryTextInput>

        <View style={styles.viewI}>

            <Text style={styles.texth}>Type {blinker}</Text>
            <Text style={styles.texth}>{tov}</Text>
            <Dropdown data={[
                { value: "Open", label: "Open" },
                { value: "Container", label: "Container" }
                ]}
                onChange={changeTovF}
                valueTOV={tov}
                placeholder="Select Type" />
        </View>

        <View style={styles.viewI}>

            <Text style={styles.texth}>Contact {contactBlinker}</Text>
            <View style={{width:'40%',marginLeft:0}}>
                {contactOV}
            </View>
            <TextInput maxLength={10} style={styles.textc1} keyboardType='number-pad' value={additionalContact} onChangeText={changeCF}  placeholder='Contact'></TextInput>
        </View>
        <View style={{flexDirection:'row'}}>
        <PrimaryButton onPress={UpdateTruck}>Update</PrimaryButton>
        <PrimaryButton onPress={DeleteTruck}>Delete</PrimaryButton>
        </View>
        
    </View> 
    
    )
}
export default TruckItemDetail;

const styles=StyleSheet.create({
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
        height:325,
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