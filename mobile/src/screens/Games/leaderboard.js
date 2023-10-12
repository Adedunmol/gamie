import { Pressable, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ApexLogo, Call, Clash, Clone, Medal, Nakara, Over, Sims } from '../../components/images';
import GameBox from '../../components/GameBox';
import LeaderScore from '../../components/LeaderScore';
import MyLeaderScore from '../../components/MyLeaderScore';

const Leaderboard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ paddingTop: 42, padding: 16, backgroundColor: 'black', flex: 1 }}>
      <Text style={{ color: 'white', fontWeight: '800', lineHeight: 24, fontSize: 20,marginLeft:23 }}>Leaderboard</Text>

      <View style={{ top: 24, flexDirection: 'row', gap: 24, borderBottomWidth: 1, borderBlockColor: '#65656666' }}>
        <Pressable onPress={() => navigation.navigate('games')} style={{ gap: 4,marginLeft:23 }}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: '500', lineHeight: 21, letterSpacing: -0.2 }}>Games</Text>

        </Pressable>

        <Pressable onPress={() => navigation.navigate('leaderboard')}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: '500', lineHeight: 21, letterSpacing: -0.12 }}>Leaderboard</Text>
          <View style={{ height: 3, width: 84, borderRadius: 10, backgroundColor: '#7B61FF' }} />
        </Pressable>
      </View>


      <ScrollView style={{ top: 44, paddingHorizontal: 17, }} showsVerticalScrollIndicator={false}>
        <LeaderScore name={"Adedamolajoke"} text={"🥇"} xp={"7,000"} />
        <LeaderScore name={"Dumzy"} text={"🥈"} xp={"7,000"} />
        <LeaderScore name={"Tee"} text={"🥉"} xp={"7,000"} />
        <MyLeaderScore name={"You"} text={"🥉"} xp={"7,000"} />
        <LeaderScore name={"Adedamola"} text={"🥉"} xp={"7,000"} />
        <LeaderScore name={"Gold"} text={"🥉"} xp={"7,000"} />
        <LeaderScore name={"Adedamola"} text={"🥉"} xp={"7,000"} />
        <LeaderScore name={"Adedamola"} text={"🥉"} xp={"7,000"} />
        <LeaderScore name={"Adedamola"} text={"🥉"} xp={"7,000"} />
        <LeaderScore name={"Adedamola"} text={"🥉"} xp={"7,000"} />
        <LeaderScore name={"Adedamola"} text={"🥉"} xp={"7,000"} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Leaderboard

const styles = StyleSheet.create({})