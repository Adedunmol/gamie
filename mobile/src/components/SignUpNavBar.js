import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

export const ProfileTabScreen = () => {
    return (
        <ProfileTabNavigator.Navigator tabBarOptions={{
            activeTintColor:"white",
            labelStyle: {
                textTransform: "uppercase",
            },
            inactiveTintColor: "yellow",
            indicatorStyle: {
                height: null,
                top: '10%',
                bottom: '10%',
                width: '45%',
                left: '2.5%',
                borderRadius: 100,
                backgroundColor: "red",
            },
            style: {
                alignSelf: "center",
                width: '50%',
                borderRadius: 100,
                borderColor: "blue",
                backgroundColor: "white",
                elevation: 5, // shadow on Android
                shadowOpacity: .10, // shadow on iOS,
                shadowRadius: 4, // shadow blur on iOS
            },
            tabStyle: {
                borderRadius: 100,
            },
        }}
        swipeEnabled={true}>
     <ProfileTabNavigator.Screen name="Info" component={HomeScreen} />
     <ProfileTabNavigator.Screen name="Photos" component={ProfileScreen} />
   </ProfileTabNavigator.Navigator>
  );
 };