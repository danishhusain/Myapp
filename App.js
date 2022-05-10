import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import HomeScreens from './screens/Home';
import FormSuccessScreen from './Component/FormSuccess';
import FormErrorScreen from './Component/FormError'
import Danish from './screens/Danish';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="Danish" component={Danish} />
        <Stack.Screen name="Success" component={FormSuccessScreen} />
        <Stack.Screen name="Error" component={FormErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function StartScreen({ navigation }) {
  return (
    <View style={styles.mainView}>

      <View style={styles.topView}>
        <Image
          style={styles.logo}
          source={require('./Assests/images/logo.png')}
        />
        
      </View>
      <View style={styles.bottomView}>
        <View>
          <Image
            style={styles.tshirtlogo}
            source={require('./Assests/images/tshirt3.png')}
          />
          <Text style={styles.bottomText}>React Native is a framework built by Facebook engineers and based on ReactJS.</Text> 
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.submitButton} >SignIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.submitButton} >SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center'
  },
  topView: {
    width: '100%',
    height: '30%',
    backgroundColor: '#fff',

  },
  bottomView: {
    width: '100%',
    height: '70%',
    color: 'red',
    backgroundColor: '#000',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  logo: {
    width: '50%',
    height: '50%',
    marginLeft: 100,
    marginTop: 30,
  },
  tshirtlogo: {
    width: '50%',
    height: '50%',
    marginLeft: 100,
    marginTop: 25,
  },
  submitButton: {
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#000',
    color: '#ccc',
    marginHorizontal: 25,
    display: 'flex',
    marginTop: 12,
    height: 50,
    paddingLeft: 140,
    paddingTop: 8,
    fontSize: 25,
    borderRadius: 10,

  },
  bottomText: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 55,
    marginRight: 30,
    marginTop: 12,
    marginBottom:0
  },
  iconText: {
    marginLeft:200,
    
  }
});

