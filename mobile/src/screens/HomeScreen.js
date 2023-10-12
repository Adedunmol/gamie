import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { Apex, Cyber, GTA, Profile, Repeat, UpArrow } from '../components/images'
import { SafeAreaView } from 'react-native'
import GamesContainer from '../components/GamesContainer'
import GamesContainerRounded from '../components/GamesContainerRounded'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 20, paddingTop: 45,flex:1,backgroundColor:'black' }}>
      <View style={{ gap: 40 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#65656666',fontSize:16,fontWeight:'500',lineHeight:24}}>Hello,<Text style={{color:'white',}}>Adedamolajoke</Text></Text>
          <Image style={{ width: 30, height: 30 }} source={Profile} />
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontWeight: '400', fontSize: 14, lineHeight: 16 }}>Total Points</Text>
          <Text style={{ fontSize: 40, fontWeight: '600', color: 'white', letterSpacing: -0.8 }}>2460 XP</Text>
          <Text style={{ fontSize: 12, fontWeight: '500', letterSpacing: -0.24, color: '#f5f5f5a8' }}>1000 = 1SOL</Text>
        </View>
        {/**withdraw and convert  button*/}
        <View style={{ marginBottom: 32, flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Pressable
            style={{
              paddingHorizontal: 24,
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 4,
              borderRadius: 3,
              borderWidth: 1,
              borderColor: '#5C2FBA'
            }}>
            <Image style={{ width: 16, height: 16 }} source={UpArrow} />
            <Text style={{
              color: '#5C2FBA',
              fontSize: 14,
              lineHeight: 14,
              fontWeight: '500'
            }}>Withdraw</Text>
          </Pressable>

          <Pressable
            style={{
              paddingHorizontal: 24,
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 4,
              backgroundColor: '#5C2FBA',
              borderRadius: 3,
            }}>
            <Image style={{ width: 16, height: 16 }} source={Repeat} />
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                lineHeight: 14,
                fontWeight: '500'
              }}
            >Convert</Text>
          </Pressable>
        </View>
      </View>
      {/**Refferals button */}

      <View style={{ backgroundColor: '#ffffff0a', paddingHorizontal: 10, paddingVertical: 20, gap: 10, borderRadius: 6, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#F5F5F5' }}>Referrals</Text>
          <Pressable style={{
            paddingVertical: 4,
            paddingHorizontal: 8,
            gap: 8,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            backgroundColor: '#5C2FBA'
          }}>
            <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 16, textAlign: 'center', color: 'white', justifyContent: 'center' }}>100 XP</Text>
          </Pressable>
        </View>
        {/**completed button */}
        <View style={{ gap: 6, }}>
          <Text style={{ color: '#BBB', fontSize: 14, fontWeight: '400', lineHeight: 18 }}>2/5 completed</Text>
          <View style={{ borderRadius: 100, height: 4, backgroundColor: '#65656666' }}>
            <View style={{ borderRadius: 100, height: 4, backgroundColor: '#31B03E', width: '30%' }} />
          </View>
        </View>
      </View>
      <Text style={{ color: '#F5F5F5', fontSize: 18, fontWeight: "600", letterSpacing: -0.36, marginTop: 32, marginBottom: 20 }}>Recently Played</Text>
      <ScrollView>
        <GamesContainerRounded icon={Cyber} name={"Cyberpunk 77"} />
        <GamesContainer icon={Apex} name={"Apex legends"} />
        <GamesContainer icon={GTA} name={"GTA V"} />
        <GamesContainer icon={Apex} name={"Apex legends"} />
        <GamesContainer icon={Cyber} name={"Cyberpunk 77"} />
        <GamesContainer icon={GTA} name={"GTA V"} />
      </ScrollView>
      <StatusBar style='light'/>
    </SafeAreaView>
  )
}

export default HomeScreen