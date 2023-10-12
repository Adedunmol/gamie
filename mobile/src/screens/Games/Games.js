import { View, Text, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import GameBox from '../../components/GameBox';
import { ApexLogo, Call, Clash, Nakara, Over, Sims } from '../../components/images';

const Games = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ paddingTop: 42, padding: 16, backgroundColor: 'black', flex: 1 }}>
            <Text style={{ color: 'white', fontWeight: '800', lineHeight: 24, fontSize: 20,marginLeft:23}}>Games</Text>

            <View style={{ top: 24, flexDirection: 'row', gap: 24, borderBottomWidth: 1, borderBlockColor: '#65656666', }}>
                <Pressable onPress={() => navigation.navigate('games')} style={{ gap: 4,marginLeft:23}}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '500', lineHeight: 21, letterSpacing: -0.12 }}>Games</Text>
                    <View style={{ height: 3, width: 48, borderRadius: 10, backgroundColor: '#7B61FF' }} />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('leaderboard')}>
                    <Text style={{ color: 'white' }}>Leaderboard</Text>
                </Pressable>
            </View>
            <ScrollView style={{ gap: 16, top: 60 }}>
                <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center' }}>
                    <GameBox icon={Clash} title={"Clash of clans"} price={"Free"} />
                    <GameBox icon={Call} title={"Call of duty"} price={"Free"} />
                </View>

                <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center' }}>
                    <GameBox icon={ApexLogo} title={"Apex legends"} price={"Free"} />
                    <GameBox icon={Over} title={"Overwatch"} price={"Free"} />
                </View>
                <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center' }}>
                    <GameBox icon={Nakara} title={"Nakara"} price={"Free"} />
                    <GameBox icon={Sims} title={"The Sims"} price={"Free"} />
                </View>
                <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center' }}>
                    <GameBox icon={Clash} title={"Clash of clans"} price={"Free"} />
                    <GameBox icon={Clash} title={"Clash of clans"} price={"Free"} />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Games