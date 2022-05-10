import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import FormSuccessScreen from '../Component/FormSuccess'
// import FormSuccess from '../Component/FormSuccess'
import FormErrorScreen from '../Component/FormError'

const SignUpScreen = ({ navigation }) => {
    function SignUpData() {
        return (
            <View>
                <View>
                    {console.log(name, pass, email, conPass, phoneNum)}
                </View>
                <View>
                    {navigation.navigate('Home')}
                </View>
            </View>
        )
    }

    const Validat_form = () => {
        var Input_form = [name, pass, email, conPass, phoneNum];
        var Pass_match = pass == conPass;

        if (Input_form.includes('') || Input_form.includes(undefined))
            return setdisformerror(true);
        if (!Pass_match)  return setdisformerror(true)
        if (Pass_match) return setdisformsuccess(true)

    }

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [conPass, setconPass] = useState('')
    const [phoneNum, setphoneNum] = useState('')
    const [disformerror, setdisformerror] = useState('')
    const [disformsuccess, setdisformsuccess] = useState('')


    return (
        <View style={styles.mainView}>
            <View style={styles.topView}>
                <Image
                    style={styles.logo}
                    source={require('../Assests/images/logo.png')}
                />
            </View>
            <View style={styles.bottomView}>

                <View>
                    <Text style={styles.bottomText}>Create New </Text>
                    <TextInput placeholder='Name*' onChangeText={(text) => { setName(text) }} placeholderTextColor={'#ccc'} style={styles.textEmail}></TextInput>
                    <TextInput placeholder='Email*' onChangeText={(text) => { setEmail(text) }} placeholderTextColor={'#ccc'} style={styles.textEmail}></TextInput>
                    <TextInput placeholder='Phone Number*' onChangeText={(text) => { setphoneNum(text) }} placeholderTextColor={'#ccc'} style={styles.textEmail} keyboardType={'number-pad'}></TextInput>
                    <TextInput placeholder='Passward*' onChangeText={(text) => { setPass(text) }} placeholderTextColor={'#ccc'} style={styles.textEmail}></TextInput>
                    <TextInput placeholder=' Confirm Passward*' onChangeText={(text) => { setconPass(text) }} placeholderTextColor={'#ccc'} style={styles.textEmail}></TextInput>
                    <TouchableOpacity onPress={() => Validat_form()}>
                        <Text style={styles.submitButton} >Submit</Text>
                    </TouchableOpacity>
                </View>

            </View>
            {
                disformerror == true ?
                    <FormErrorScreen />
                    :
                    null
            }
           {
               disformsuccess == true ?
               <FormSuccessScreen navigation={navigation} />
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
        height: '20%',
        backgroundColor: '#fff',

    },
    bottomView: {
        width: '100%',
        height: '100%',
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
        marginLeft: 100,
        // marginTop: 25,
        marginBottom: 10,
        marginVertical: 20,

    },
    textEmail: {
        borderWidth: 2,
        borderColor: '#fff',
        color: '#ccc',
        height: 50,
        marginHorizontal: 25,
        marginTop: 10,
        paddingLeft: 20,
        borderRadius: 10
    },
    submitButton: {
        borderWidth: 2,
        borderColor: '#ccc',
        backgroundColor: '#ccc',
        marginHorizontal: 25,
        // marginVertical: 40,
        marginTop: 30,
        height: 50,
        color: '#000',
        paddingLeft: 140,
        paddingTop: 8,
        fontSize: 25,
        borderRadius: 10,

    }
})
export default SignUpScreen;