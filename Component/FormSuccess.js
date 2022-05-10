import React, { useState,useEffect } from 'react';
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';


const FormSuccessScreen = ({navigation}) => {
  const [visible,setVisible] = useState(visible)
  

  function ToggleOverlay() {
    console.log("this is text")
    setVisible(!!visible)
    navigation.navigate("Home")
  }

  return (
    <View>
      <Overlay isVisible={visible} >
        <Text style={styles.textPrimary}>Success</Text>
        <Text style={styles.textSecondary}>
          Welcome to the App
          </Text>
        <Button
          title="Ok"
          onPress={()=>ToggleOverlay()}
        />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 30,
    color: "green",
    fontWeight:'bold',
  },
  textSecondary: {
    marginBottom: 20,
    marginHorizontal: 80,
    textAlign: 'center',
    fontSize: 17,
  },
});

export default FormSuccessScreen;