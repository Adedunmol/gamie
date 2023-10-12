import { View, Text, Pressable,Image } from 'react-native'
import React from 'react'

const LoginOption = ({icon,text,background,onPress}) => {
  return (
    <Pressable onPress={onPress} style={{justifyContent:'center',alignItems:'center',gap:12,height:50,flexDirection:'row',borderRadius:4,paddingHorizontal:24,paddingVertical:10,backgroundColor:background}}>
    <Image source={icon}/>
<Text style={{fontSize:16,fontWeight:'500',lineHeight:24,color:'white'}}>{text}</Text>
</Pressable>
  )
}

export default LoginOption