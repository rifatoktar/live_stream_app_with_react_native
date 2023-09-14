import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function StreamerDetail() {
    return (
        <TouchableOpacity>
            <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
            <Image source={require('../assets/images/woman2.png')} style={{ width: 50, height: 50 }} resizeMode="cover" />
            <View style={{ width: 16 }}></View>
            <View style={{
                flexDirection: 'column',
                justifyContent: 'flex-start', alignSelf: 'flex-start'
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.streamerName}>Favory</Text>
                    <View style={{ width: 16 }}></View>
                    <View style={{ height: 20, width: 50, backgroundColor: '#E93558', borderRadius: 2, justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={styles.liveIcon}></View>
                            <View style={{ width: 5 }}></View>
                            <Text style={styles.liveText}>Live</Text>
                        </View>
                    </View>
                    <View style={{ width: 60 }}></View>
                    <Text style={styles.counter}>12.320</Text>
                    <Text style={styles.counter}> • </Text>
                    <Text style={styles.counter}>00:20:15</Text>
                </View>
                <View style={{ height: 5 }}></View>
                <Text style={styles.counter}>Just Chatting</Text>
                <View style={{ height: 5 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.tag1}>
                        <Text style={styles.tag1Text}>
                            Action
                        </Text>
                    </View>
                    <View style={{ width: 5 }}></View>
                    <View style={styles.tag2}>
                        <Text style={styles.tag2Text}>
                            Violence
                        </Text>
                    </View>
                    <View style={{ width: 5 }}></View>
                    <View style={styles.tag3}>
                        <Text style={styles.tag3Text}>
                            English
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    streamerName: {
        fontFamily: 'Rubik-SemiBold',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    liveIcon: {
        height: 10,
        width: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        alignSelf: 'center'
    },
    liveText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 14,
        fontWeight: '400',
        color: 'white'
    },
    counter: {
        fontFamily: 'Rubik-Regular',
        fontSize: 14,
        fontWeight: '400',
        color: 'white',
        opacity: 0.5,
        left: 5
    },
    tag1: {
        height: 20,
        width: 50,
        borderRadius: 10,
        backgroundColor: '#535157',
        justifyContent: 'center',
    },
    tag1Text: {
        fontFamily: 'Rubik-Regular',
        fontSize: 12,
        fontWeight: '400',
        color: 'white',
        alignSelf: 'center'
    },
    tag2: {
        height: 20,
        width: 60,
        borderRadius: 10,
        backgroundColor: '#535157',
        justifyContent: 'center',
    },
    tag2Text: {
        fontFamily: 'Rubik-Regular',
        fontSize: 12,
        fontWeight: '400',
        color: 'white',
        alignSelf: 'center'
    },
    tag3: {
        height: 20,
        width: 60,
        borderRadius: 10,
        backgroundColor: '#535157',
        justifyContent: 'center',
    },
    tag3Text: {
        fontFamily: 'Rubik-Regular',
        fontSize: 12,
        fontWeight: '400',
        color: 'white',
        alignSelf: 'center'
    },
})