import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Clone} from './images'

const LeaderScore = ({text,name,xp}) => {
  return (
    <Pressable style={{ padding: 10, gap: 10, alignItems: "center", borderRadius: 6, backgroundColor: '#1c1c1d80', flexDirection: 'row', justifyContent: 'space-between',marginBottom:20}}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',gap:8 }}>
            <View style={{flexDirection:'row',gap:4,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:24,fontWeight:'500',letterSpacing:-0.48}}>{text}</Text>
            <Image style={{width:48,height:48,borderRadius:100,}} source={Clone} />
            </View>
           
            <Text style={{ color: 'white',fontSize:15,fontWeight:'500',letterSpacing:-0.3,lineHeight:22.5 }}>{name}</Text>
          </View>

          <Pressable style={{
            paddingVertical: 4,
            paddingHorizontal: 8,
            gap: 8,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            backgroundColor: '#5C2FBA'
          }}>
            <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 16, textAlign: 'center', color: 'white', justifyContent: 'center' }}>{xp} XP</Text>
          </Pressable>
        </Pressable>
  )
}

export default LeaderScore