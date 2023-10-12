import { Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Phantom } from './images'

const LoginComponent = ({icon,text}) => {
  return (
    <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10, paddingHorizontal: 16, height: 50,backgroundColor:'#ffffff14',width:'100%',borderRadius:4,justifyContent:'center',marginBottom:12 }}>
    <Image source={icon}/>
    <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', lineHeight: 24,textAlign:'center' }}>Sign in with {text}</Text>
</Pressable>
  )
}

export default LoginComponent