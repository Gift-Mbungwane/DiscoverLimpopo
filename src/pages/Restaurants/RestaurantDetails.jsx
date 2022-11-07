import React from 'react';
import { Text, View, KeyboardAvoidingView, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ReviewComponent from '../../Components/ReviewComponent';



export default function RestaurantDetails({navigation, route}) {
  return (
    <>
 <SafeAreaView  >
<ScrollView style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }} showsVerticalScrollIndicator={false}>
<View style={{ height:336, backgroundColor:"grey", borderBottomLeftRadius:30, borderBottomRightRadius:30, width:"100%"}}>
    <Image source={require('../../assets/images/RestaurantDetailBckground.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",  borderBottomLeftRadius:30, borderBottomRightRadius:30}}/>   
<View style={{width:"95%", borderRadius:30, flexDirection:"row", marginVertical:"-73%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
<View>
       <TouchableOpacity activeOpacity={2} onPress={() => navigation.goBack()} style={{backgroundColor:"rgb(239, 172, 50)", borderRadius:30, height:50, width:50, alignSelf:"center", justifyContent:"center"}}>
       <MaterialIcons name='keyboard-arrow-left' size={32} style={{alignSelf:"center",alignContent:"center" ,color:"#FFFFFF", marginHorizontal:"10%"}} />
       </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
    <Image source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
    </TouchableOpacity>        
</View>
</View>

<View style={{width:"100%", marginHorizontal:"4%", marginVertical:"5%" }}>
    <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:34, color:"rgb(0,0,0)", fontWeight:"bold"}}>Grab & Go Rabb Meals</Text>
    <View style={{marginVertical:"4%", flexDirection:"row"}}>
                <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)" }}>5.5</Text>
                <View style={{flexDirection:"row", marginHorizontal:"2%"}}>
                <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
              
                <Entypo name='dot-single' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(239, 172, 50)", justifyContent:"center" }}>300 reviews</Text>
                </View>
    </View>
    <View style={{flexDirection:"row"}}>
            <MaterialIcons name='location-on' size={16}  style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgb(0,0,0)"}}/>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", width:"80%", marginHorizontal:"2%"}}>Columbine Ave &, Golden Hwy, Southgate, Johannesburg, 2082</Text>
    </View>
    <View style={{flexDirection:"row", marginVertical:"2%"}}>
            <MaterialIcons name='location-on' size={16}  style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgb(0,0,0)"}}/>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", width:"80%", marginHorizontal:"2%"}}>064 222 5557</Text>
    </View>
    <View style={{flexDirection:"row"}}>
            <MaterialIcons name='location-on' size={16}  style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgb(0,0,0)"}}/>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(102, 187, 102)", marginHorizontal:"2%"}}>Open</Text>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", }}>09:00 - 19:00</Text>

    </View>
</View>
<TouchableOpacity
                activeOpacity={0.9} 
                onPress={() => {}}
                    style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", borderRadius:30,}}>
                        <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold", fontFamily:"Plus Jakarta Sans", fontSize:14}}>TAKE ME HERE</Text>
</TouchableOpacity>

<View style={{ marginHorizontal:"4%", marginVertical:"5%"}}>
<Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", fontWeight:"bold"}}>About</Text>
<Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"2%", width:"90%" }}>
In a commercial area off Golden Highway, this unassuming hotel is 5 km from Gold Reef City amusement park,
 9 km from Orlando Stadium and 12 km from Johannesburg's Central Business District.
The straightforward rooms have free Wi-Fi, TVs, and tea and coffeemaking facilities, as well as desks.
Amenities include an outdoor pool and complimentary secure parking. Breakfast is also available.
    </Text>
</View>

<Image source={require('../../assets/images/RestoDetails1.jpg')} style={{width:"100%", height:438}}/>
<View style={{width:"80%", alignSelf:"center", marginVertical:"2%"}}>
    <Image source={require('../../assets/images/RestoDetails2.jpg')} style={{width:49, height:49, borderRadius:10, borderColor: 'rgb(239, 172, 50)', borderWidth:1}}/>
</View>
<View style={{width:"100%", marginHorizontal:"4%", marginVertical:"4%"}}>
<Text style={{fontFamily:"Plus Jakarta Sans", fontSize:24, color:"rgb(0,0,0)", fontWeight:"bold"}}>Reviews</Text>

    <View style={{height:110, marginVertical:"4%", marginHorizontal:"-3%"}}>
        <ReviewComponent/>
    </View>
    
</View>
<View>
        <TouchableOpacity
        activeOpacity={0.9} 
            onPress={() => {}}>
    <Text style={{alignSelf:"center", fontSize:14,fontFamily:"Plus Jakarta Sans",  fontWeight:"700", color:'rgb(239, 172, 50)', marginVertical:"-1%"}}>LOAD MORE</Text>                
    </TouchableOpacity>
    <TouchableOpacity
        activeOpacity={0.9} 
        onPress={() => {}}
            style={{alignSelf: "center", borderColor:"rgb(239, 172, 50)", borderWidth:1, width:"90%", height:50, opacity:3 ,justifyContent:"center", marginVertical:"4%", borderRadius:30,}}>
                <Text style={{alignSelf:"center", color:"rgb(239, 172, 50)", fontWeight:"bold", fontFamily:"Plus Jakarta Sans", fontSize:14}}>LEAVE A REVIEW</Text>
        </TouchableOpacity>
</View>
</ScrollView>
</SafeAreaView>
</>
)
}

