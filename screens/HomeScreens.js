import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


const ScreenContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);




export const Home = ({navigation}) => (
 <ScreenContainer>
   <Text>Master List Screen</Text>
   <TouchableOpacity
   onPress={()=> navigation.push("Details", { name : "React native by me"})}>
      <Text style={styles.warna}>React Native by Me </Text>
   </TouchableOpacity>
   <TouchableOpacity
   onPress={()=> navigation.push("Details", { name : "Reacts Native school"})}>
      <Text style={styles.warna}>React Native School</Text>
   </TouchableOpacity>
   <TouchableOpacity
   onPress={()=> alert("todo!")}><Text style={styles.warna}>Drawer</Text>
   </TouchableOpacity>
   
 </ScreenContainer>
);

export const Details = ({route}) => (
  <ScreenContainer>
     <Text>Details Screen</Text>
      {route.params.name && <Text>{route.params.name}</Text>}
   </ScreenContainer>
  );

export const Profile = () => (
  <ScreenContainer>
    <Text>Profil Screen</Text>
    <TouchableOpacity
   onPress={()=> alert("todo!")}><Text style={styles.warna}>Drawer</Text>
   </TouchableOpacity>
   <TouchableOpacity
   onPress={()=> alert("todo!")}><Text style={styles.warna}>Sign Out</Text>
   </TouchableOpacity>
    
  </ScreenContainer>
 );


export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <TouchableOpacity
      onPress={()=> alert("todo!")}><Text style={styles.warna}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=> alert("todo!")}><Text style={styles.warna}>React Native School</Text>
    </TouchableOpacity>

  </ScreenContainer>
 );

 export const Search2 = () => (
  <ScreenContainer>
     <Text>Search2 Screen</Text>
   </ScreenContainer>
  );



export const Splash = () => (
  <ScreenContainer>
     <Text>Loading...</Text>
   </ScreenContainer>
  );



export const SignIn = ({ navigation }) => {
    return(
    <View style={styles.container}>
      <Text>Sign In Screens</Text>
      <TouchableOpacity
        onPress={()=> alert("todo!")}><Text style={styles.warna}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.push("CreateAccount")}>
        <Text style={styles.warna}>Create Account</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Separator:{
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical:0,
    borderRadius: 5
  },
  warna: {
    color:'#007AFF'
  }
});
