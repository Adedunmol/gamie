import { Image, Pressable, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'
import LoginComponent from '../../components/LoginComponent'
import LoginOption from '../../components/LoginOption'
import { Social } from '../../components/images'
import { useNavigation } from '@react-navigation/native'


const SecondOption = () => {
    const navigation =useNavigation();
    return (

        <KeyboardAvoidingView behavior='height' style={{ marginHorizontal: 20,flex:1}}>
            <ScrollView style={{ top: 130,flex:1}}>
                <Text style={{ color: 'white', marginBottom: 24, fontSize: 20, fontWeight: '800', lineHeight: 24,textAlign:'center'}}>Connect your wallet to sign in.</Text>

                <View style={{ gap: 20 }}>
                    <View style={{ gap: 10 }}>
                        <Text style={{ color: 'white' }}>Username</Text>
                        <TextInput placeholder='yello please'
                            placeholderTextColor={"white"}
                            style={{
                                borderWidth: 1,
                                borderColor: '#39393A',
                                width: '100%',
                                paddingVertical: 14,
                                paddingHorizontal: 18,
                                alignSelf: 'center',
                                borderRadius: 4,
                                color: 'white',
                                backgroundColor: '#ffffff14'
                            }}
                        />
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ color: 'white' }}>Username</Text>
                        <View style={{
                            borderWidth: 1,
                            borderColor: '#39393A',
                            width: '100%',
                            paddingVertical: 14,
                            paddingHorizontal: 18,
                            alignSelf: 'center',
                            borderRadius: 4,
                            color: 'white',
                            backgroundColor: '#ffffff14',
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <TextInput placeholder='Enter password'
                                placeholderTextColor={"white"}
                                style={{ color: 'white' }}
                            />
                            <Text style={{ color: '#5C2FBA', textDecorationLine: 'underline', textDecorationColor: '#5C2FBA' }}>Show</Text>
                        </View>


                    </View>
                </View>


                <Pressable style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '400', lineHeight: 24 }}>New user? <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', lineHeight: 24, textDecorationLine: 'underline' }}>Sign Up</Text></Text>
                </Pressable>
            </ScrollView>
           <View 
           style={{ width: '100%', gap: 14,bottom:48 }}>
                <LoginOption onPress={() =>navigation.navigate('welcome') } text={"Sign In"} background={"#5C2FBA"} />
                <LoginOption onPress={() =>navigation.navigate('welcome') } icon={Social} text={"Sign in with Google"} background={"#ffffff14"} />
           </View>
          
        </KeyboardAvoidingView>
    )
}

export default SecondOption

const styles = StyleSheet.create({})