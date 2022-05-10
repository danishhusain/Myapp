import React, { useState,useEffect } from 'react';
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

// FormErrorScreen
const FormErrorScreen = () => {
  const [visible,setVisible] = useState(visible)

  // function Textaa() {
  //   <View>
  //     <View>
  //       {console.log("this is text")}
  //     </View>
  //     <View>
  //     {navigation.navigate('Home')}
  //     </View>
  //   </View>
  // }
  const ToggleOverlay=()=>{
     setVisible(!!visible)
  }
  
  return (
    <View>
      <Overlay isVisible={visible} >
        
        <Text style={styles.textPrimary}>Failed</Text>
        <Text style={styles.textSecondary}>
          Please try again
        </Text>
        <Button onPress={()=>ToggleOverlay()} title='Ok'>Close</Button>
        {/* <Button
          title="Start Building"
          onPress={Textaa}
        /> */}
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
    color: "red",
    fontWeight:'bold',
  },
  textSecondary: {
    marginBottom: 20,
    marginHorizontal: 80,
    textAlign: 'center',
    fontSize: 17,
  },
});

export default  FormErrorScreen;