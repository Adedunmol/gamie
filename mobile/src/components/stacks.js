import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Games from '../screens/Games/Games';
import Leaderboard from '../screens/Games/leaderboard';

import Buyscreen from '../screens/Marketplace/buyscreen';
import SellScreen from '../screens/Marketplace/sellScreen';
import BottomTab from './BottomTabs';
import WelcomePage from '../screens/WelcomePage';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="signup" component={SignUpScreen}/>
      <Stack.Screen name="bottom" component={BottomTab}/>
      <Stack.Screen name="buy" component={Buyscreen} />
      <Stack.Screen name="games" component={Games} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="leaderboard" component={Leaderboard} />
      <Stack.Screen name="sell" component={SellScreen} />
      <Stack.Screen name="welcome" component={WelcomePage} />

    </Stack.Navigator>
  );
}
export default Stacks;