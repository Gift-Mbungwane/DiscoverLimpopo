import React from 'react';
import { Text, View, KeyboardAvoidingView, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ReviewComponent from '../../Components/ReviewComponent';


export default function AccomodationComponent({navigation, route}) {
  return (
    <SafeAreaView>
        <ScrollView >
    <View style={{width:"100%", alignSelf:"center"}}>
    <View style={{ width:"90%", height:275, borderRadius:30, flexDirection:"column" ,backgroundColor:"grey", marginHorizontal:"2%", marginVertical:"2%", alignSelf:"center"}}> 
            <Image source={require("../../assets/images/Accomodation.jpg")} style={{borderTopRightRadius:30, borderTopLeftRadius:30 ,width:"100%", height:120}}/>
    <View style={{width:"100%", height:155, flexDirection:"row", backgroundColor:"#FFFFFF", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
      <View style={{width:"80%", height:120 }}>
        <View>
          <Text style={{fontSize:16, fontWeight:"bold", marginHorizontal:"5%", marginVertical:"5%", color:"rgb(0,0,0)" }}>Opens in new window Flying Falcon</Text>
          <View style={{marginHorizontal:"6%", marginVertical:"-4%", flexDirection:"row"}}>
                <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:12, color:"rgb(0,0,0)" }}>5.5</Text>
                <View style={{flexDirection:"row", marginVertical:"2%", marginHorizontal:"2%"}}>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                </View>
          </View>
          <Text style={{fontSize:14, width:"100%", marginHorizontal:"5%", marginVertical:"3%", color:"rgb(0,0,0)" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse…
        </Text>
        <View style={{flexDirection:"row", width:"80%", marginHorizontal:"5%" }}>
          <View style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, borderWidth:1, justifyContent:"center", width:70 }}> 
          <MaterialIcons name='pool' size={24} color={'rgb(239, 172, 50)'}/>
          <Text style={{color:"rgb(239, 172, 50)"}}>pool</Text></View>
        </View>
        </View>
      </View>
      <View style={{width:"20%", height:100}}>
      <Image source={require("../../assets/images/discover-logo.png")} style={{width:40, height:40, alignSelf:"flex-start"}}/>

        </View>  
    </View>
    </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}