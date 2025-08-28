import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet, ImageSourcePropType} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';


interface HomeCardProps {
    image: ImageSourcePropType;//string[];
    //onPress: () => void;
    state: string;
    name: string;
    price: string;
    //likes: number;  
}

const HomeCard: React.FC<HomeCardProps> = ({
    image,
    //onPress,
    state,
    name,
    price,
}) => {
    return(
        <TouchableOpacity style={styles.container}>
            <View>
                <Image style={styles.img} source={image} />
            </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>${price}</Text>
            <View style={{flexDirection: 'row'}} >
                <Ionicons name='location' style={{ top: hp('0.5%') }}/>
                <Text style={styles.state}>{state}</Text>
            </View>
        </TouchableOpacity>
    );
}

export {HomeCard}

const styles = StyleSheet.create({
    container: {
        width: wp('45%'),
        height: hp('35%'),
        borderRadius: 10,
        backgroundColor: '#e7e4e4ff',
        gap: 5,
        padding: 10,
        margin: 5
    },
    img: {
        width: wp('39%'),
        height: hp('20%'),
        borderRadius: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: '600',
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
    },
    state: {
        fontSize: 16,
        fontWeight: '300',
    }
});