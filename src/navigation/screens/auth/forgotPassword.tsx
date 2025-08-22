import { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
export function ForgotPassword(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [seePass, setSeePass] = useState<boolean>(true);
    return(
        <View>
            <View style={styles.backButtonView}>
                <TouchableOpacity style={styles.backButton}>
                    <AntDesign name="caretleft" size={24} color="white"/>
                </TouchableOpacity>
            </View>
            <View style={styles.headerView}>
                <Text style={styles.header}>Forgot Password</Text>
            </View>
            <View style={styles.textInputView}>
                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="black" />
                    <TextInput 
                    placeholder='Enter Your Email' 
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)} 
                    style={styles.textInput}
                    />
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



const styles =StyleSheet.create({
    container: {
        flex: 1,
    },
    backButtonView: {
        margin:10,
        top: hp('5%'),
        marginBottom: hp('5%')
    },
    backButton: {
        width: wp('20%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius: 50
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
});