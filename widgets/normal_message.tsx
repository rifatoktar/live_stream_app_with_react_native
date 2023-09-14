import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function NormalMessage() {
    return (
        <TouchableOpacity style={{top: 5}}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 20, width: 20, borderRadius: 20, backgroundColor: 'white' }}><Text style={{fontSize: 12, fontFamily: 'Rubik-Regular', fontWeight: '600', color: 'black', left: 5}}>R</Text>
                </View>
                <View style={{width: 5}}></View>
                <Text style={{fontSize: 12, fontFamily: 'Rubik-Regular', fontWeight: '600', color: 'white', left: 5}}>Reillly : Your so funny o7</Text>
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