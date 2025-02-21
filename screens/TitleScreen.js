import {View, Text,StyleSheet} from 'react-native';
import { AntDesign } from "@expo/vector-icons";

function TitleScreen(){
    return(
        <View>
        <Text style={styles.header}>Nitin Roadways </Text></View>

    );
}
 
export default TitleScreen;

const styles = StyleSheet.create({
    header:{
        color:'wheat',
        backgroundColor:'#ad1414',
        fontWeight:'bold',
        fontSize:40,
        borderBottomWidth:3,
        textAlign:'center'
    }
    
})