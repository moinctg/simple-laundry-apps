import { StyleSheet, Text, View, SafeAreaView, Alert, Pressable,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons'; 

import * as Location from 'expo-location';

const HomeScreen = () => {
    const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
        "we are loading your location"
      );
    const [locationServiceEnabled,setlocationServiceEnabled] = useState(false);
    useEffect( () => {
        checkLocationEnabled();
        getCureentLocation();
    }
        ,[])
    const checkLocationEnabled = async() =>{

        let enabled = await Location.hasServicesEnabledAsync();
        if(!enabled){
            Alert.alert("Location services not enabled", 
             "please enable the location services",
            
            [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable:false}
              );
        }
        else {
            setlocationServiceEnabled(enabled);
        }
    }

    const getCureentLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();

        if(status !== "granted") {
            Alert.alert("Permission is denied", 
             "allow the app to use location services",
            
            [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable:false}
              );
        }

      
    
    const {coords} = await Location.getCurrentPositionAsync();
    console.log(coords)

    if(coords){
        const {latitude,longitude} = coords;

        let response = await Location.reverseGeocodeAsync({
            longitude,
            latitude,
        });

        console.log(response)
        for (let item of response){
            let address = `${item.name} ${item.city} ${item.postalCode} ` ;
            setdisplayCurrentAddress(address);
        }
    }

}

    
  return (
    <SafeAreaView>
        {/* location and profile  */}
        <View style ={{ flexDirection:"row",alignItems:"center",padding:10 }}>
        <Entypo name="location" size={30} color="#E32636" />
      <View>
        <Text style={{ fontSize:18,fontWeight:"600"}}>Home</Text>
      <Text>{displayCurrentAddress}</Text>
      </View>
      <Pressable style={{marginLeft:"auto", marginRight:8}}>
        <Image  style= {{ width:35, height:35 ,borderRadius:15}} 
        source ={{ uri: "https://lh3.googleusercontent.com/ogw/AGvuzYb3BqoF3VVOZ4TaqMQzyoAIzj_d1KfkDiNfXMmbRg=s32-c-mo", }}/>
      </Pressable>
      </View> 

      {/* Search Bar  */}
      

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})