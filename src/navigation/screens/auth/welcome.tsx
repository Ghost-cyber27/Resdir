import { useState } from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export function Welcome(){
    const [page, setPage] = useState<string>("1");

    if (page === "1") {
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../../assets/logo.png')} />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>Find the best place</Text>
                    <Text style={styles.text}>To stay at a <Text style={{ fontWeight: 'bold', color: 'green' }}>Good Price</Text></Text>
                </View>
                <View style={styles.imageView}>
                    <Image style={styles.img} source={require('../../../../assets/home_one.jpg')} />
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('2')}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else if(page === "2"){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../../assets/logo.png')} />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>Sell fast you Property</Text>
                    <Text style={styles.text}>In just one <Text style={{ fontWeight: 'bold', color: 'green' }}>Click</Text></Text>
                </View>
                <View style={styles.imageView}>
                    <Image style={styles.img} source={require('../../../../assets/home_two.jpg')} />
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('3')}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else if(page === "3"){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../../assets/logo.png')} />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>Find the perfect choice</Text>
                    <Text style={styles.text}>For your future <Text style={{ fontWeight: 'bold', color: 'green' }}>Home</Text></Text>
                </View>
                <View style={styles.imageView}>
                    <Image style={styles.img} source={require('../../../../assets/home_one.jpg')} />
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Authenticate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        marginTop: hp('10%'),
        alignItems: 'center'
    },
    logo: {
        width: wp('35%'),
        height: hp('9%'),
    },
    textView: {
        padding: wp('5%'),
        marginTop: hp('2%')
    },
    text: {
        fontSize: 24,
    },
    imageView: {
        alignItems: 'center'
    },
    img: {
        width: wp('90%'),
        height: hp('50%'),
        borderRadius: 10
    },
    buttonView: {
        alignItems: 'center'
    },
    button:{
        width: wp('80%'),
        height: hp('10%'),
        backgroundColor: 'green',
        marginTop: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    }
});