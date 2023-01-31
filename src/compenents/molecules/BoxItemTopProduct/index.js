import { StyleSheet, Text,Image, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Gap } from '../..'
import { IC_Love } from '../../../res'

const BoxItemTopProduct = ({bgColor,icon,text,price,onPress}) => {
  return (
    <TouchableOpacity style={styles.container(bgColor)} onPress={onPress}>
        <View style={{top:-40}}>
            <View>
                <Image source={icon} style={styles.image}/>
                <Gap/>
                <Text style={styles.text}>{text}</Text>
            </View>
            <Gap height={20}/>
            <View style={styles.price}>
                <Text style={styles.wrapperButtom}>{price}</Text>
                <TouchableOpacity>
                    <IC_Love/>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default BoxItemTopProduct

const styles = StyleSheet.create({
    container : bgColor => ({
        height:160,
        width:160,
        backgroundColor:bgColor,
        borderRadius:12,
        marginHorizontal:16,
        marginVertical:40
    }),
    text:{
        paddingLeft:10,
        fontSize:16,
        fontFamily:'Poppins-Medium'
    },
    price:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    wrapperButtom:{
        fontSize:18,
        fontFamily:'Poppins-Medium',
    },
    image:{
        height:110,
        width:110,
        resizeMode: 'contain',
        marginLeft:20
    }
})