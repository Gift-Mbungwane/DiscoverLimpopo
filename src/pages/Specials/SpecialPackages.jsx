import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MasonryList from '@react-native-seoul/masonry-list';


const data = [{
  id: 1,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 2,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 3,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 4,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 5,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
}];


export default function SpecialPackages({navigation, route}) {
    

  return (
    <>
    <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
    <View style={{height:130, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
      <View style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
          <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer('', {isScreen: true})}>
          <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Image source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
          </TouchableOpacity>        
      </View>
       <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:34, color:"#FFFFFF", fontWeight:"bold", marginHorizontal:"5%", marginVertical:"-1%", width:"80%"}}>Special Packages</Text>

      </View>
    
      <MasonryList
          style={{ width:"100%", height:"100%"}}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return(
          <>
          <TouchableOpacity activeOpacity={1}
          onPress={() => {navigation.navigate('SpecialPackagesDetails', {item: item})}}
        style={{marginVertical:"2%", marginHorizontal:"4%"}}>
                   <View style={{backgroundColor:"#FFFFFF", height:350, width:"90%", alignSelf:"center", marginVertical:"2%", borderRadius:30 }}>
        <Image source={data[0].image} style={{width:"100%", height:188, borderTopLeftRadius:30, borderTopRightRadius:30}}/>
        <View style={{marginHorizontal:"5%", marginVertical:"2%"}}>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontWeight:"500", color:"#878787", fontSize:14}}>Call for topics for the online tourist guide lecture series </Text>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontWeight:"500", color:"rgb(0,0,0)", fontSize:16, marginVertical:"2%"}}>Department of Tourism calls on all tourist guides to submit themes…</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{color:"rgb(239, 172, 50)", fontFamily:"Plus Jakarta Sans", }}>3 months ago</Text>
            <Text style={{color:"rgb(239, 172, 50)", fontFamily:"Plus Jakarta Sans",}}>discoverlimpopomag.co.za</Text>
                </View>  
        </View>
      </View>
        </TouchableOpacity>
          </>
        )
      }}
      // refreshing={isLoadingNext}
      // onRefresh={() => refetch({first: ITEM_CNT})}
      // onEndReachedThreshold={0.1}
      // onEndReached={() => loadNext(ITEM_CNT)}
      
    />
     
      </SafeAreaView>
      </>
    )
}