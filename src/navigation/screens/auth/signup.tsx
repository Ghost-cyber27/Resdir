import { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
//full name, email, state, password, agree to terms and condition

export function SignUp(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [seePass, setSeePass] = useState<boolean>(true);
    return(
        <View>
            <View style={styles.backButtonView}>
                {/*back button */}
                <TouchableOpacity style={styles.backButton}>
                    <AntDesign name="caretleft" size={24} color="white"/>
                </TouchableOpacity>
            </View>
            <View style={styles.headerView}>
                <Text style={styles.header}>Let's Sign Up</Text>
            </View>
            <View style={styles.textInputView}>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color="black" />
                    <TextInput 
                    placeholder='Full Name' 
                    keyboardType='default'
                    onChangeText={(text) => setEmail(text)} 
                    style={styles.textInput}
                    />
                </View>
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
                    <FontAwesome5 name="city" size={24} color="black" />
                    <TextInput 
                    placeholder='State' 
                    keyboardType='default'
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
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <View style={styles.regView}>
                    <Text style={styles.regText}>Already have an account, 
                        <Text style={{ color: 'blue', fontWeight: '500' }}> Sign In</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
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
        margin: 5,
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