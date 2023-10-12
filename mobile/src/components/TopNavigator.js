
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../screens/HomeScreen';
import FirstOption from '../screens/SignUpOptions/FirstOption';
import SecondOption from '../screens/SignUpOptions/SecondOption';


const Tab = createMaterialTopTabNavigator();
const TopNavigator = () => {
  return (
    <Tab.Navigator sceneContainerStyle={{backgroundColor:'black',flex:1,}} screenOptions={{
        tabBarIndicatorStyle:{width:0},
        tabBarStyle:{
          top:70,
          borderRadius:100,
          marginHorizontal:10,
          padding:6,
          borderWidth:2,
          borderColor:'#ffffff14',
          backgroundColor:'black'
        },
        tabBarActiveTintColor:"white",
        tabBarPressOpacity:0

    }}>
      <Tab.Screen name="Wallet" component={FirstOption} />
      <Tab.Screen name="Email" component={SecondOption} />
    </Tab.Navigator>
  )
}

export default TopNavigator