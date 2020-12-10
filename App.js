import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import {createDrawerNavigator} from '@react-navigation/drawer';
 
import {AuthContext} from './screens/context';
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
const Drawer = createDrawerNavigator();


const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
<HomeStack.Navigator>
  <HomeStack.Screen name="Home" component={Home}/>
  <HomeStack.Screen name="Details" component={Details} 
  options={({ route }) => ({title : route.params.name}) }/>
</HomeStack.Navigator>
);

const SearchStack = createStackNavigator();
const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search}/>
    <SearchStack.Screen name="Search2" component={Search2}/>
  </SearchStack.Navigator>
  );

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile}/>
  </ProfileStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
<Tabs.Navigator>
  <Tabs.Screen name="Home" component={HomeStackScreen} />
  <Tabs.Screen name="Search" component={SearchStackScreen} />
</Tabs.Navigator>
);

export default () => {
  const [isLoading, setISLoading] = React.useState(true);
  const [userToken, setuserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return{
      signIn: () => {
        setISLoading(false);
        setuserToken('asdf');
      },
      signUp: () => {
        setISLoading(false);
        setuserToken('asdf');
      },
      signOut: () => {
        setISLoading(false);
        setuserToken(null);
      }
    };
  }, [])

  React.useEffect(()=> {
    setTimeout(() => {
      setISLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return(
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {userToken ? (
        <Drawer.Navigator initialRouteName="Profile">
         <Drawer.Screen name="Home" component={TabsScreen}/>
         <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
        </Drawer.Navigator>
      ):(
      <AuthStack.Navigator>
        <AuthStack.Screen 
          name="SignIn" 
          component={SignIn} 
          options={{title :'Sign In'}} />
        <AuthStack.Screen 
          name="CreateAccount" 
          component={CreateAccount}
          options={{title :'Create Account'}} />
      </AuthStack.Navigator>)}           
    </NavigationContainer>
    </AuthContext.Provider>
  );
}
