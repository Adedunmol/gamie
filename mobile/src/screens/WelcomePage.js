import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import Cup from '../../assets/1.png'
import { useNavigation } from '@react-navigation/native';
const WelcomePage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={Cup} style={{ height: 214, width: 203 }} />
            <Text style={styles.HugeText}>Congratulations!</Text>
            <Text style={styles.text}>You have successfully created a Gamie </Text>
            <Text style={styles.text}>account. Cheers to your new adventure!</Text>


            {/* button */}
            <Pressable onPress={() =>navigation.navigate('bottom') } style={styles.ButtonContainer}>
                <Text style={styles.ButtonText}>Welcome to home page</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor:'black'
    },
    HugeText: {
        color: 'white',
        lineHeight: 32,
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 8
    },
    text: {
        color: '#A7A7A780',
        lineHeight: 24,
        fontSize: 16,
        fontWeight: '400'
    },
    ButtonContainer: {
        flex: 1,
        position: 'absolute',
        bottom: 48,
        backgroundColor: '#5C2FBA',
        paddingVertical: 10,
        paddingHorizontal: 24,
        width: '100%',
        borderRadius: 4
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        lineHeight: 24,
        fontSize: 16,
        fontWeight: '500'
    }

})
export default WelcomePage