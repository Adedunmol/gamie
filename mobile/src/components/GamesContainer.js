import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Medal } from './images'

const GamesContainer = ({name,icon}) => {
  return (
    <View style={styles.container}>
     <View style={{flexDirection:"row",gap:10}}>
    <Image source={icon} style={{width:48,height:48,borderRadius:2}}/>
    <View style={{gap:5}}>
        <Text style={{color:'white',fontSize:15,fontWeight:'500',lineHeight:22.5,letterSpacing:-0.3}}>{name}</Text>
        <View style={{flexDirection:'row',gap:4}}>
            <Image style={{height:14,width:14}} source={Medal} />
            <Text style={{color:'#BABABB',fontSize:14,fontWeight:'500',lineHeight:14,}}>Winner</Text>
        </View>
    </View>
     </View>

     <Pressable style={styles.xpButton}>
      <Text style={{fontSize:14,fontWeight:'500',lineHeight:16,textAlign:'center',color:'white',justifyContent:'center'}}>+40 XP</Text>
     </Pressable>
    </View>
  )
}

export default GamesContainer

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:"center",
        flexDirection:'row',
        padding:10,
        backgroundColor:'#ffffff0a',
        marginBottom:1
    },
    xpButton:{
        paddingVertical:4,
        paddingHorizontal:8,
        gap:8,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:16,
        backgroundColor:'#5C2FBA'
    }
})