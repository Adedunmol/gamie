
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../screens/HomeScreen';
import FirstOption from '../screens/SignUpOptions/FirstOption';
import SecondOption from '../screens/SignUpOptions/SecondOption';


const Tab = createMaterialTopTabNavigator();
const GamesNavigator = () => {
  return (
    <Tab.Navigator sceneContainerStyle={{backgroundColor:'black',flex:1,}} screenOptions={{
       

    }}>
      <Tab.Screen name="Wallet" component={FirstOption} />
      <Tab.Screen name="Email" component={SecondOption} />
    </Tab.Navigator>
  )
}

export default GamesNavigator