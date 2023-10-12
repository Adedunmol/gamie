import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const GameBox = ({ icon, title, price }) => {
    return (
        <Pressable style={{ padding: 20, alignItems: 'flex-start', borderRadius: 12, backgroundColor: '#1c1c1d80',gap:10,width:'48%',marginBottom:16}}>
            <Image style={{ height: 94, borderRadius: 8,width:'100%' }} source={icon} />
            <View>
                <Text style={{ color: 'white',fontSize:14,fontWeight:'600',letterSpacing:-0.28 }}>{title}</Text>
                <Text style={{ color: '#BBBBBB',fontWeight:'400',lineHeight:18,fontSize:12 }}>{price}</Text>
            </View>

        </Pressable>
    )
}

export default GameBox