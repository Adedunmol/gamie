import { View, Text, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import GameBox from '../../components/GameBox';
import { ApexLogo, Call, Clash, Game, Nakara, Over, Sims } from '../../components/images';

const BuyScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ paddingTop: 42, padding: 16, backgroundColor: 'black', flex: 1 }}>
            <Text style={{ color: 'white', fontWeight: '800', lineHeight: 24, fontSize: 20,marginLeft:23}}>Marketplace</Text>

            <View style={{ top: 24, flexDirection: 'row', gap: 24, borderBottomWidth: 1, borderBlockColor: '#65656666', }}>
                <Pressable onPress={() => navigation.navigate('buy')} style={{ gap: 4,marginLeft:23}}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '500', lineHeight: 21, letterSpacing: -0.12 }}>Buy</Text>
                    <View style={{ height: 3, width: 20, borderRadius: 10, backgroundColor: '#7B61FF' }} />

                </Pressable>

                <Pressable onPress={() => navigation.navigate('sell')}>
                    <Text style={{ color: 'white' }}>Sell</Text>
                </Pressable>
            </View>
            <ScrollView style={{ gap: 16, top: 60 }}>
                <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center' }}>
                    <GameBox icon={Game} title={"2 pads"} price={"0.002 SOL"} />
                    <GameBox icon={Game} title={"2 pads"} price={"0.002 SOL"} />
                </View>

                <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center' }}>
                <GameBox icon={Game} title={"2 pads"} price={"0.002 SOL"} />
                <GameBox icon={Game} title={"2 pads"} price={"0.002 SOL"} />
                </View>
                <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center' }}>
                <GameBox icon={Game} title={"2 pads"} price={"0.002 SOL"} />
                <GameBox icon={Game} title={"2 pads"} price={"0.002 SOL"} />
                </View>
                <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center' }}>
                <GameBox icon={Game} title={"2 pads"} price={"0.002 SOL"} />
                <GameBox icon={Game} title={"2 pads"} price={"0.002 SOL"} />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default BuyScreen