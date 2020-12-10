import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


const ScreenContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);


export const Splash = () => (
  <ScreenContainer>
     <Text>Loading...</Text>
   </ScreenContainer>
  );

export const Home = ({navigation}) => (
 <ScreenContainer>
   <Text>Master List Screen</Text>
   <TouchableOpacity
    onPress={()=> navigation.push("Details", { name : "React native by me"})}>
      <Text style={styles.textcolor}>React Native by Me </Text>
   </TouchableOpacity>
   <TouchableOpacity
    onPress={()=> navigation.push("Details", { name : "React Native School"})}>
      <Text style={styles.textcolor}>React Native School</Text>
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

export const Profile = ({navigation}) => (
  <ScreenContainer>
    <Text>Profil Screen</Text>
    <TouchableOpacity
   onPress={()=> navigation.toggleDrawer()}><Text style={styles.textcolor}>Drawer</Text>
   </TouchableOpacity>
   <TouchableOpacity
   onPress={()=> alert("todo!")}><Text style={styles.textcolor}>Sign Out</Text>
   </TouchableOpacity>
    
  </ScreenContainer>
 );


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
        params : { name : "React Native School"} })}>
          <Text style={styles.textcolor}>React Native School</Text>
    </TouchableOpacity>

  </ScreenContainer>
 );

 export const Search2 = () => (
  <ScreenContainer>
     <Text>Search2 Screen</Text>
   </ScreenContainer>
  );

export const SignIn = ({ navigation }) => {
    return(
    <View style={styles.container}>
      <Text>Sign In Screens</Text>
      <TouchableOpacity
        onPress={()=> alert("todo!")}><Text style={styles.textcolor}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.push("CreateAccount")}>
        <Text style={styles.textcolor}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export const CreateAccount = () => {
    return(
    <View style={styles.container}>
      <Text>Create Account Screens</Text>
        <Button title="Sign Up" onPress={()=> alert("todo!")}/> 
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
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
