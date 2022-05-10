import { NavigationContainer } from '@react-navigation/native'
import React, { useState, useEffect, } from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity, Modal } from 'react-native'
import FormErrorScreen from '../Component/FormError'
import FormSuccessScreen from '../Component/FormSuccess'

const SignInScreen = ({ navigation }) => {

    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [disformerror, setdisformerror] = useState('')
    const [disformsuccess, setdisformsuccess] = useState('')
    // function SignInData() {
    //     return (
    //         <View>
    //             <View>
    //                 {console.log(email, pass)}
    //             </View>
    //             <View>
    //                 {navigation.navigate('Home')}

    //             </View>
    //         </View>
    //     )
    // }
    function Validate_form() {
       const Input_form = [email,pass]
       if(Input_form.includes('')||Input_form.includes(undefined))
       return setdisformerror(true)

       if(Input_form.includes(email,pass)){

        setdisformsuccess(true)
       }
    

    }
    return (
        <View style={styles.mainView}>

            <View style={styles.topView}>
                <Image
                    style={styles.logo}
                    source={require('../Assests/images/logo.png')}
                />
            </View>

            <View style={styles.bottomView}>
                <Text style={styles.bottomText}>Welcome Back</Text>
                <View>
                    <TextInput placeholder='Email' placeholderTextColor={'#ccc'} style={styles.textEmailPassward} onChangeText={(text) => { setemail(text) }} />

                    <TextInput placeholder='passward' placeholderTextColor={'#ccc'} style={styles.textEmailPassward} onChangeText={(text) => { setpass(text) }} secureTextEntry={true} />
                    <TouchableOpacity onPress={() => { Validate_form() }}>
                        <Text style={styles.submitButton} >Submit</Text>
                    </TouchableOpacity>
                </View>

            </View>
            {
                disformerror == true?
                <FormErrorScreen navigation={navigation}/>
                :
                null
            }
            {
                disformsuccess == true?
                <FormSuccessScreen navigation={navigation}/>
                :
                null
            }
        </View>
    )
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
        height: '40%',
        backgroundColor: '#fff',

    },
    bottomView: {
        width: '100%',
        height: '60%',
        color: 'red',
        backgroundColor: '#000',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    logo: {
        width: '50%',
        height: '50%',
        marginLeft: 100,
        marginTop: 25,
    },
    bottomText: {
        color: '#fff',
        fontSize: 45,
        fontWeight: 'bold',
        marginLeft: 53,
        marginTop: 15,
        marginBottom: 45
    },
    textEmailPassward: {
        borderWidth: 2,
        borderColor: '#fff',
        color: '#ccc',
        marginHorizontal: 25,
        marginVertical: 12,
        paddingLeft: 20,
        borderRadius: 10,
        height: 50,
    },
    submitButton: {
        borderWidth: 2,
        borderColor: '#ccc',
        backgroundColor: '#ccc',
        marginHorizontal: 25,
        //   marginTop:15,
        marginVertical: 12,
        height: 50,
        color: '#000',
        paddingLeft: 140,
        paddingTop: 8,
        fontSize: 25,
        borderRadius: 10,

    }
})
export default SignInScreen;