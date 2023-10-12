import { StyleSheet, Text, View, Pressable,SafeAreaView} from 'react-native'
import React from 'react'

const index = () => {
    return (
        <SafeAreaView style={{top:40,margin:16}}>
            <Text style={{color:'white'}}>Games</Text>
            <View style={{ flexDirection: 'row',gap:24,borderBottomWidth:2,borderBlockColor:'white',marginTop:50}}>
                <Pressable>
                    <Text style={{ color: 'white' }}>Games</Text>
                </Pressable>

                <Pressable>
                    <Text style={{ color: 'white' }}>Games</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({})