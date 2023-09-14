import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Spacer } from "@react-native-material/core";
import { Divider } from '@rneui/themed';

export default function DonateAndUnfollowSection() {
    return (

        <View style={styles.container}>
            <TouchableOpacity style={{ width: 70 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', left: 10, top: 3 }}>
                    <Image source={require('../assets/icons/donate.png')} style={{ width: 15, height: 15, top: 8 }} resizeMode="cover" />
                    <View style={{ width: 5 }}></View>
                    <Text style={styles.streamerName}>Donate</Text>
                </View>
            </TouchableOpacity>
            <Divider width={5} color={'white'} />
            <Spacer />
            <TouchableOpacity style={{ width: 70 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', left: 10, top: 3 }}>
                    <Image source={require('../assets/icons/cross.png')} style={{ width: 15, height: 15, top: 8 }} resizeMode="cover" />
                    <View style={{ width: 5 }}></View>
                    <Text style={styles.unFollow}>Unfollow</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderWidth: 1,
        borderColor: '#535157',
        backgroundColor: 'transparent',
        borderRadius: 10,
        marginHorizontal: 16,
        paddingRight: 20,
        flexDirection: 'row'
    },
    streamerName: {
        fontFamily: 'Rubik-Regular',
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
        top: 5
    },
    unFollow: {
        fontFamily: 'Rubik-Regular',
        fontSize: 15,
        fontWeight: '600',
        color: '#E93558',
        top: 5
    }
});