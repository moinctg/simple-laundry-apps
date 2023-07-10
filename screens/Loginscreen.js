import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Loginscreen() {
    const [email ,setEmail] = useState("");
    const [loading,setLoding] = useState(false);
    const [password ,setPassword] = useState("");
    const navigation = useNavigation();

  return (
    <KeyboardAvoidingView>
    <View>
    <Text style={{ fontSize:20, color:"#662d91",fontWeight:"bold"}}>Sign In </Text>
    <Text style={{fontSize:18, marginTop:8,fontWeight:"600"}}>Sign In Your Account </Text>
    </View>
    <View style={{flexDirection:"row",alignItems:"center"}}>
    <MaterialCommunityIcons name="email-outline" size={24} color="black" />
    <TextInput 
    placeholder='Email' value='email' onChangeText= {(text) => setEmail(text)} placeholderTextColor={"black"} 
    style={{ borderWidth:1 ,borderBottomColor:"gray",width:300,marginVertical:10 }}/>
        <View>

        </View>
    </View>


    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({})