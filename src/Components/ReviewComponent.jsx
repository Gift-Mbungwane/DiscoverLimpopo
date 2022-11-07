import React from 'react';
import { View, Image, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';



export default function ReviewComponent({navigation, route}) {
  return (
        <>
            <View style={{width:"80%", height:"100%", flexDirection:"row"}}>
                <View style={{width:"20%", height:"30%", alignItems:"center",}}>
                     <Image source={require('../assets/images/John-Doe.jpg')} style={{width:34, height:34, borderRadius:34}} />
                </View>
                <View style={{width:"80%", height:"100%", flexDirection:"column"}}>
                    <View style={{marginVertical:"2%", flexDirection:"row", width:"100%", height:"20%"}}>
                        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", fontWeight:"bold" }}>Name Surname</Text>
                        <View style={{flexDirection:"row", marginHorizontal:"5%", marginVertical:"1%", height:"100%"}}>
                        <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                        <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                        <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                        <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                        <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                        </View>

                    </View>
                    <View style={{width:"100%", height:"70%"}}>
                        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(51, 51, 51)",}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Nullam feugiat, nulla a varius ullamcorper,
                         risus risus hendrerit ipsum, et vulputate enim elit sit amet neque.
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}