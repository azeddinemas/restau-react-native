import { Image, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Header } from '../../compenents';
import { SafeAreaView } from 'react-native-safe-area-context';

const Detail = ({route,navigation}) => {
    const dataParams=route.params;
    const bgColor = route.params.bgColor;
    const isDarkMode= useColorScheme()==='dark'
  return (
    <SafeAreaView style={styles.flex1(bgColor)}>
      <StatusBar barStyle={isDarkMode?'light-content':'dark-content'}/>
      <View>
          <Header onPress={()=>navigation.goBack()}/>
          <View style={styles.wrapperImage}>
              <Image source={dataParams.icon} style={styles.image}/>
          </View>
          <View style={styles.content}>
              <View style={styles.wrapperTopContent}>
                <View style={styles.rowTopContent}>
                  <Text style={styles.name}>{dataParams.name}</Text>
                </View>
              </View>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({
    flex1: bgColor=>({
        flex:1,
        backgroundColor:bgColor
    }),
    wrapperImage:{
        justifyContent:'center',
        alignItems:'center,'
    },
    image:{
        width:150,
        height:150,
        resizeMode:'contain'
    },
    content:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FFFFF',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        marginTop:30,
        paddingTop:34
    },
    wrapperTopContent:{
        marginBottom:28,
        paddingHorizontal:20
    },
    rowTopContent:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    name:{
        fontFamily:'Poppins-SemiBold',
        fontSize:20
    }
})