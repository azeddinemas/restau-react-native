import { StyleSheet, View,Image,Text } from 'react-native'
import React from 'react'
import Get from "../../res/images/Illustrations/il_getStarted.png";
import { Button, Gap } from '../../compenents';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Image source={Get} style={styles.image}/>
      <View style={styles.wrapperSlogan}>
          <Text style={styles.textSlogan}>Shop Your Daily</Text>
          <Text style={styles.textSlogan}>Necessary</Text>
      </View>
      <Gap height={90}/>
      <Button onPress={() => navigation.replace('MainApp')}/>
    </View>
  )
}

export default GetStarted;

const styles = StyleSheet.create({
    screen:{flex:1,paddingHorizontal:20, justifyContent:'center'},
    image : {height:255,width:'100%',resizeMode:'stretch'},
    wrapperSlogan:{marginTop:51},
    textSlogan:{fontSize:30,color:'#0FA956',textAlign:'center',fontFamily: 'Poppins-SemiBold'}
})