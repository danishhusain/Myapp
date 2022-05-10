import { NavigationContainer } from '@react-navigation/native';
import { Button } from '@rneui/base';
import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

const HomeScreens = ({ navigation }) => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require('../Assests/images/logo.png')}
      />
      <Button title="Danish" onPress={() => navigation.navigate("Danish")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mystyle: {
    color: 'black',
  },
  logo: {
    width: '50%',
    height: '50%',
    marginLeft: 100,
    marginTop: 25,
},
});
export default HomeScreens;
