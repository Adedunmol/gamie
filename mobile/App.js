import { StatusBar, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stacks from './src/components/stacks'
export const App = () => {
  return (
    <NavigationContainer>
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <Stacks />
        <StatusBar style='light'/>
      </View>
    </NavigationContainer>
  )
}


export default App