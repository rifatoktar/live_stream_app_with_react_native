import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

export default function DonateMessage() {

    return (
        <TouchableOpacity style={{top: 5}}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 20, width: 20, borderRadius: 20, backgroundColor: '#E93558', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../assets/icons/donate.png')} style={{ width: 10, height: 10 }} />
                </View>
                <View style={{width: 5}}></View>
                <Text style={{fontSize: 12, fontFamily: 'Rubik-Regular', fontWeight: '600', color: 'white', left: 5}}>ThEFurry donated $ 50</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appbar: {
        elevation: 0,
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        fontFamily: 'BeVietnamPro_700Bold',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    },
    streamerName: {
        fontFamily: 'Rubik-SemiBold',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    iButton: {
        height: 24,
        width: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
});