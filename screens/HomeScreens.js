import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ActivityIndicator} from 'react-native';
import {AuthContext} from './context';

const ScreenContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);


export const Splash = () => (
  <ScreenContainer>
     <ActivityIndicator size='large' color='#800000' />
   </ScreenContainer>
  );

export const Home = ({navigation}) => (
 <ScreenContainer>
   <Text>Master List Screen</Text>
   <TouchableOpacity
    onPress={()=> navigation.push("Details", { name : "React Native by me"})}>
      <Text style={styles.textcolor}>React Native by Me </Text>
   </TouchableOpacity>
   <TouchableOpacity
    onPress={()=> navigation.push("Details", { name : "React Native Example"})}>
      <Text style={styles.textcolor}>React Native Example </Text>
   </TouchableOpacity>
   <TouchableOpacity
    onPress={()=> navigation.toggleDrawer()}>
     <Text style={styles.textcolor}>Drawer</Text>
   </TouchableOpacity> 
 </ScreenContainer>
);

export const Details = ({route}) => (
  <ScreenContainer>
     <Text>Details Screen</Text>
      {route.params.name && <Text>{route.params.name}</Text>}
   </ScreenContainer>
  );
  
export const Profile = ({navigation}) => {
  const { signOut } = React.useContext(AuthContext);

  return(
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <TouchableOpacity
     onPress={()=> navigation.toggleDrawer()}><Text style={styles.textcolor}>Drawer</Text>
     </TouchableOpacity>
     <TouchableOpacity
     onPress={()=> signOut()}><Text style={styles.textcolor}>Sign Out</Text>
     </TouchableOpacity>
      
    </ScreenContainer>
   );
};


export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <TouchableOpacity
      onPress={()=> navigation.push("Search2")}>
        <Text style={styles.textcolor}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=> navigation.navigate("Home", {
        screen :"Details", 
        params : { name : "React Native Example"} })}>
          <Text style={styles.textcolor}>React Native Example</Text>
    </TouchableOpacity>

  </ScreenContainer>
 );

 export const Search2 = () => (
  <ScreenContainer>
     <Text>Search2 Screen</Text>
   </ScreenContainer>
  );

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

    return(
    <View style={styles.container}>
      <Text>Sign In Screens</Text>
      <TouchableOpacity
        onPress={()=> signIn()}><Text style={styles.textcolor}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.push("CreateAccount")}>
        <Text style={styles.textcolor}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

    return(
    <View style={styles.container}>
      <Text>Create Account Screens</Text>
      <TouchableOpacity
        onPress={()=> signUp()}>
          <Text style={styles.textcolor}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Separator:{
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical:0,
    borderRadius: 5
  },
  textcolor: {
    color:'#007AFF'
  }
});
