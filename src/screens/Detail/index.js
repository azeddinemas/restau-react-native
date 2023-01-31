import { Image, StatusBar, StyleSheet, Text, useColorScheme, View ,SafeAreaView,ScrollView} from 'react-native'
import React,{useState} from 'react'
import { BoxRelatedItems, Button, Counter, Gap, Header } from '../../compenents';
import { IL_Cauliflawer_PNG, IL_Grapes_PNG, IL_Greentea_PNG, IL_Tomato_PNG } from '../../res';

const Detail = ({route,navigation}) => {
    const dataParams = route.params;
    const bgColor = route.params.bgColor
    const isDarkMode = useColorScheme() === 'dark'
    const [totalItem, setTotalItem] = useState(1);

    const dataRelatedItems = [
        {
          name: 'Grapes',
          icon: IL_Grapes_PNG,
          bgColor: 'rgba(227,206,243,0.5)',
          price: 1.53,
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Tometo',
          icon: IL_Tomato_PNG,
          bgColor: 'rgba(255, 234, 232, 0.5)',
          price: 1.53,
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Drinks',
          icon: IL_Greentea_PNG,
          bgColor: 'rgba(187, 208, 136, 0.5)',
          price: 1.53,
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Cauliflower',
          icon: IL_Cauliflawer_PNG,
          bgColor: 'rgba(140, 250, 145,0.5)',
          price: 1.53,
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Grapes',
          icon: IL_Grapes_PNG,
          bgColor: 'rgba(227,206,243,0.5)',
          price: 1.53,
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Tometo',
          icon: IL_Tomato_PNG,
          bgColor: 'rgba(255, 234, 232, 0.5)',
          price: 1.53,
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'Drinks',
          icon: IL_Greentea_PNG,
          bgColor: 'rgba(187, 208, 136, 0.5)',
          price: 1.53,
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
      ];
    const onCounterChange = value => {
        setTotalItem(value);
      };
  return (
    <SafeAreaView style={styles.flex1(bgColor)}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
        <View>
            <Header onPress={()=>navigation.goBack()}/>
           <View style={styles.wrapperImage} >
                <Image source={dataParams.icon} style={styles.image}/> 
            </View>
            <View style={styles.content}>
                <View style={styles.wrapperTopContent}>
                    <View style={styles.rowTopContent}>
                        <Text style={styles.name}>{dataParams.name}</Text>
                        <Counter onValueChange={onCounterChange}/>
                    </View>
                    <Text style={styles.price}>{dataParams.price} / kg</Text>
                </View>
                <Text style={styles.desc}>{dataParams.desc}</Text>

                <View style={styles.wrapperRelatedItems}>
                    <Text style={styles.titleRelatedItems}>Related Items</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.wrapperBoxRelatedItems}>
                            {dataRelatedItems.map((item, index) => {
                                return (
                                    <BoxRelatedItems
                                    key={index}
                                    image={item.icon}
                                    name={item.name}
                                    price={item.price}
                                    bgColor={item.bgColor}
                                    />
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
                <Gap height={50}/>
                <Button text="Add to cart"/>
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
        alignItems:'center',
    },
    image:{
        width:150,
        height:150,
        resizeMode:'contain'
    },
    content:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FFFFFF',
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
    },
    price:{
        fontFamily:'Poppins-Regular',
        fontSize:12,
        color:'#00000'
    },
    desc:{
        paddingHorizontal:20
    },
    wrapperRelatedItems:{
        marginTop:25,
    },
    titleRelatedItems:{
        fontFamily:'Poppins-SemiBold',
        fontSize:14,
        color: '#0FA956',
        paddingHorizontal:20
    },
    wrapperBoxRelatedItems:{
        flexDirection:'row',
        marginTop:20,
        paddingLeft:20,
    }
})