import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { Image } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import { Basket, Basket_dark, Controller, Controller_dark, Home, Home_dark, Person, Person_dark } from './images';
import Games from '../screens/Games/Games';
import BuyScreen from '../screens/Marketplace/buyscreen';
import { ProfileTabScreen } from './SignUpNavBar';
import ProfileScreen from '../screens/ProfileScreen';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {alignItems: 'center',backgroundColor:'black',paddingVertical:6,height:78},
                tabBarHideOnKeyboard: true,
                tabBarShowLabel:false,
                
            }}
        >
            <Tab.Screen
                options={{
                    tabBarInactiveTintColor: "#7B7588",
                    tabBarActiveTintColor: "#6922D1",
                    tabBarIcon: ({ focused, color }) => (
                        <Image source={
                            focused
                                ? Home
                                : Home_dark
                        }


                            style={{ width: 20, height: 20 }} />
                    )
                }}
                name="Home" component={HomeScreen} />


            <Tab.Screen
                options={{
                    tabBarActiveTintColor: "#6922D1",
                    tabBarInactiveTintColor: "#7B7588",
                    
                    tabBarIcon: ({ focused, color }) => (
                        <Image source={
                            focused
                                ? Controller
                                : Controller_dark
                        }


                        style={{ width: 20, height: 20 }} />
                    )
                }}


                name="Level" component={Games} />
            <Tab.Screen

                options={{
                    tabBarActiveTintColor: "#6922D1",
                    tabBarInactiveTintColor: "#7B7588",
                    tabBarIcon: ({ focused, color }) => (
                        <Image source={
                            focused
                                ? Basket
                                : Basket_dark
                        }


                        style={{ width: 20, height: 20 }} />
                    )
                }}


                name="buy" component={BuyScreen} />


            <Tab.Screen

                options={{
                    tabBarActiveTintColor: "#6922D1",
                    tabBarInactiveTintColor: "#7B7588",
                    tabBarIcon: ({ focused, color }) => (
                        <Image source={
                            focused
                                ? Person
                                : Person_dark
                        }


                        style={{ width: 20, height: 20 }} />
                    )
                }}


                name="profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default BottomTab;