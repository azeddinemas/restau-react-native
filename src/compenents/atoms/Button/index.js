import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({onPress,text}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0FA956',
    height:50,
    width:259,
    borderRadius:20,
    justifyContent:'center',
    alignSelf:'center'
  },
  text :{
    fontSize:18,
    fontFamily:'Poppins-Medium',
    color:'#FFFF',
    textAlign:"center"
  }
})