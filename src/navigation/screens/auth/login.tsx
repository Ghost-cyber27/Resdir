import { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


export function Login(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [seePass, setSeePass] = useState<boolean>(true);
    return(
        <View>
            <View>
                <Image  style={styles.img} source={require('../../../../assets/office_one.jpg')} />
            </View>
            <View style={styles.headerView}>
                <Text style={styles.header}>Let's Sign In</Text>
            </View>
            <View style={styles.textInputView}>
                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="black" />
                    <TextInput 
                    placeholder='Email' 
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)} 
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <AntDesign name="lock" size={24} color="black" />
                    <TextInput 
                    placeholder='Password' 
                    keyboardType='default'
                    onChangeText={(text) => setPass(text)} 
                    style={styles.textInput}
                    secureTextEntry={seePass}
                    />
                    {seePass 
                    ? <TouchableOpacity onPress={() => setSeePass(false)}>
                        <Feather name="eye-off" size={24} color="black" />
                      </TouchableOpacity>
                    : <TouchableOpacity onPress={() => setSeePass(true)}>
                        <Feather name="eye" size={24} color="black" />
                      </TouchableOpacity>}
                </View>
            </View>
            <TouchableOpacity style={styles.textView}>
                <Text style={styles.text}>Forgot Password</Text>
            </TouchableOpacity>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 5, marginBottom: 5 }}><Text>------------------------OR------------------------</Text></View>
                <TouchableOpacity style={styles.goolgeButton}>
                    <AntDesign name="google" size={24} color="white" />
                </TouchableOpacity>
                <View style={styles.regView}>
                    <Text style={styles.regText}>Don't have an account, 
                        <Text style={{ color: 'blue', fontWeight: '500' }}> Register</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        width: wp('100%'),
        height: hp('20%')
    },
    headerView: {
        margin: 5
    },
    header: {
        fontSize: 30,
        fontWeight: '500'
    },
    textInputView: {
        margin: 5,
        padding: 10,
        gap: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        width: '100%',
    },
    textInput: {
        flex: 1,
        height: hp('10%'),
        fontSize: 16
    },
    textView: {
        margin: 5,
        left: wp('5%')
    },
    text: {
        fontSize: 16,
        fontWeight: '300'
    },
    buttonView: {
        margin: 10,
        alignItems: 'center'
    },
    button: {
        width: wp('70%'),
        height: hp('8%'),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    goolgeButton: {
        width: wp('70%'),
        height: hp('8%'),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    regView: {
        marginTop: hp('2%')
    },
    regText: {
        fontSize: 16
    }
});