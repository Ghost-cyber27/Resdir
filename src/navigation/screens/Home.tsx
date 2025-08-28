import React, {useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HomeCard } from '../../components/homeCard';
import { LandCard } from '../../components/landProfile';

//top bar containing profile image(left), notification(right), logo image(center)...Done
//header text welcoming the user...Done
//filter button which leads to a model...Done
//top landowners(proprietors)...Done
//flatlist of houses...Done
//data retrieved specific to the user's state

export function Home() {
    const landData = [
        {id: '1', name: 'Mr Lee', img: require('../../../assets/home_one.jpg')},
        {id: '2', name: 'Sonita', img: require('../../../assets/home_two.jpg')},
        {id: '3', name: 'Alicia', img: require('../../../assets/home_three.jpg')},
        {id: '4', name: 'Megan', img: require('../../../assets/office_one.jpg')},
        {id: '5', name: 'brenda', img: require('../../../assets/office_two.jpg')},
    ];
    const data = [
        {id: '1', name: 'Apartment', img: require('../../../assets/home_one.jpg'), price: '200,000', state: 'kaduna'},
        {id: '2', name: 'Complec', img: require('../../../assets/home_two.jpg'), price: '150,000', state: 'Abuja'},
        {id: '3', name: 'Bungalow', img: require('../../../assets/home_three.jpg'), price: '250,000', state: 'Kano'},
        {id: '4', name: 'Office 1', img: require('../../../assets/office_one.jpg'), price: '700,000', state: 'Lagos'},
        {id: '5', name: 'Office 2', img: require('../../../assets/office_two.jpg'), price: '2,000,000', state: 'Janlingo'},
        {id: '6', name: 'Apartment', img: require('../../../assets/home_one.jpg'), price: '200,000', state: 'kaduna'},
        {id: '7', name: 'Complec', img: require('../../../assets/home_two.jpg'), price: '150,000', state: 'Abuja'},
        {id: '8', name: 'Bungalow', img: require('../../../assets/home_three.jpg'), price: '250,000', state: 'Kano'},
        {id: '9', name: 'Office 1', img: require('../../../assets/office_one.jpg'), price: '700,000', state: 'Lagos'},
        {id: '10', name: 'Office 2', img: require('../../../assets/office_two.jpg'), price: '2,000,000', state: 'Janlingo'},
    ];
  return (
    <View style={styles.container}>
        <View>{/*flatList of top landowners */}</View>
        <View>
            {/*flatlist of houses */}
            <FlatList
                data={data}
                renderItem={({item}) => 
                <HomeCard 
                image={item.img} 
                name={item.name} 
                price={item.price} 
                state={item.state} 
                key={item.id} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
                horizontal={false}
                style={{height: 'auto', margin: 5}}
                ListHeaderComponent={
              <>
                <View style={styles.topBar}>
                    {/*Top bar */}
                    <TouchableOpacity onPress={() => alert('Profile Page')} >
                        <Image style={styles.profilePic} source={require('../../../assets/icon.png')} />
                    </TouchableOpacity>
                    <Image  style={styles.logo} source={require("../../../assets/logo.png")} />
                    <Ionicons  onPress={() => alert('Notification Page')} style={styles.notification} name='notifications-circle' size={50} color='black' />
                </View>
                <View style={styles.header}>
                    {/*Header */}
                    <Text style={styles.headerText}>Hey, <Text style={{ color:'green'}} >Jonathan!</Text></Text>
                    <Text style={styles.headerText}>Let's start exploring</Text>
                </View>
                <View style={styles.filterView}>
                    {/*Filter button */}
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>FILTER</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={landData}
                    renderItem={({item}) => <LandCard name={item.name} image={item.img} />}
                    horizontal
                />
              </>
            }
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar: {
        flexDirection: "row",
        marginTop: hp('5%'),
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    profilePic: {
        width: wp('15%'),
        height: hp('8%'),
        borderRadius: 50,
        right: wp(' 15%')
    },
    logo: {
        width: wp('30%'),
        height: hp('8%'),
    },
    notification: {
        left: wp(' 17%')
    },
    header: {
        padding: 10
    },
    headerText: {
        fontSize: 24,
        fontWeight: '500'
    },
    filterView: {
        padding: 5,
        alignItems: 'center',
    },
    filterButton: {
        width: wp('95%'),
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 10,
        borderWidth: 2
    },
    filterText: {
        fontSize: 24,
        fontWeight: '500'
    },
});