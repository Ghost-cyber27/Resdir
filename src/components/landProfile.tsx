import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet, ImageSourcePropType} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface LandCardProps {
    image: ImageSourcePropType;//string[];
    //onPress: () => void;
    //id: string;
    name: string; 
}

const LandCard: React.FC<LandCardProps> = ({
    image,
    //onPress,
    name,
}) => {
    return(
        <TouchableOpacity style={styles.container} >
            <View>
                <Image style={styles.img} source={image} />
            </View>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    );
}

export {LandCard}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        padding: 10,
        alignItems: 'center'
    },
    img: {
        width: wp('20%'),
        height: hp('10%'),
        borderRadius: 50,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
    },
    
});