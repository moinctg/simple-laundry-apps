
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Alert, Pressable, Image, TextInput, Platform, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import * as Location from 'expo-location';
import Carousel from '../components/Carousel';
import Service from '../components/Service';
import DressItem from '../components/DressItem';
import { useSelector,useDispatch } from 'react-redux';
import { getProduct } from '../ProductReducer';


const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const insets = useSafeAreaInsets();
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "we are loading your location"
  );
  const [locationServiceEnabled, setlocationServiceEnabled] = useState(false);
  useEffect(() => {
    checkLocationEnabled();
    getCureentLocation();
  }
    , [])
  const checkLocationEnabled = async () => {

    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert("Location services not enabled",
        "please enable the location services",

        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
    else {
      setlocationServiceEnabled(enabled);
    }
  }

  const getCureentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission is denied",
        "allow the app to use location services",

        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }



    const { coords } = await Location.getCurrentPositionAsync();
    // console.log(coords)

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        longitude,
        latitude,
      });

      // console.log(response)
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode} `;
        setdisplayCurrentAddress(address);
      }
    }
  };

  const product = useSelector((state) => state.product.product);
  console.log("products array",product)
  const dispatch = useDispatch();
 
  useEffect ( () => {
    if (product.length >0) return;
    const fetchProducts = () => {
      services.map((service) => dispatch(getProduct(service)));
    };
    fetchProducts();

  },[])
    // console.log(product)
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];



  return (
    <ScrollView style={{ flex: 1, paddingTop: insets.top, backgroundColor: "#F0F0F0" }}>



      {/* location and profile  */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Entypo name="location" size={30} color="#E32636" />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>
        <Pressable style={{ marginLeft: "auto", marginRight: 15 }}>
          <Image style={{ width: 35, height: 35, borderRadius: 20 }}
            source={{ uri: "https://lh3.googleusercontent.com/ogw/AGvuzYb3BqoF3VVOZ4TaqMQzyoAIzj_d1KfkDiNfXMmbRg=s32-c-mo", }} />
        </Pressable>
      </View>

      {/* Search Bar  */}
      <View style=
        {{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 0.8,
          borderColor: "#C0C0C0"
        }}>
        <TextInput placeholder='Serach Item' ></TextInput>
        <Feather name="search" size={18} color="#fd5c63" />
      </View>

      {/* Carousel Image  */}
      <Carousel />
      {/* Service components   */}
      <Service />
      {/* Render all products  */}
      {
        product.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}
    </ScrollView>




  )
}

export default HomeScreen

const styles = StyleSheet.create({})