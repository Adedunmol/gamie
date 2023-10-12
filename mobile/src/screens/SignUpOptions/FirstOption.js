import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Meta, Phantom, Solflare } from '../../components/images'
import LoginComponent from '../../components/LoginComponent'

const FirstOption = () => {
    return (
        <View style={{ top: 130, alignItems: 'center', justifyContent: 'center' ,marginHorizontal:20}}>
            <Text style={{ color: 'white', marginBottom: 24, fontSize: 20, fontWeight: '800', lineHeight: 24 }}>Connect your wallet to sign in.</Text>


<LoginComponent icon={Phantom} text={"Phantom"}/>
<LoginComponent icon={Meta} text={"Metamask"}/>
<LoginComponent icon={Solflare} text={"Solflare"}/>

<Pressable style={{marginTop:20}}>
    <Text style={{color:'white',fontSize:16,fontWeight:'400',lineHeight:24}}>New user? <Text style={{color:'white',fontSize:16,fontWeight:'500',lineHeight:24,textDecorationLine:'underline'}}>Sign Up</Text></Text>
</Pressable>
        </View>
    )
}

export default FirstOption

const styles = StyleSheet.create({})