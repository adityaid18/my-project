import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import {createDrawerNavigator} from '@react-navigation/drawer';
 

import {SignIn, 
        CreateAccount,
        Home,
        Search,
        Search2,
        Splash,
        Profile,
        Details,
      } from './screens/HomeScreens';


const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
<HomeStack.Navigator>
  <HomeStack.Screen name="Home" component={Home}/>
  <HomeStack.Screen name="Details" component={Details} 
  options={({ route }) => ({title : route.params.name}) }/>
</HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search}/>
    <SearchStack.Screen name="Search2" component={Search2}/>
  </SearchStack.Navigator>
  );

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile}/>
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
<Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Search" component={SearchStackScreen} />
</Tabs.Navigator>
);

export default () => {
  const [isLoading, setISLoading] = React.useState(true);

  React.useEffect(()=> {
    setTimeout(() => {
      setISLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  
  return(
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={TabsScreen}/>
          <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
        </Drawer.Navigator>
      
      {/* <AuthStack.Navigator>
        <AuthStack.Screen 
          name="SignIn" 
          component={SignIn} 
          options={{title :'Sign In'}} />
        <AuthS tack.Screen 
          name="CreateAccount" 
          component={CreateAccount}
          options={{title :'Create Account'}} />
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
}
