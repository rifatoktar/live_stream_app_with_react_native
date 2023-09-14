import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Spacer } from "@react-native-material/core";

export default function SuggestedLiveCard2() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.video}>
                    <Image source={require('../../assets/images/starfield.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} resizeMode="cover" />
                    <View style={{ flexDirection: 'row', padding: 10, bottom: 40 }}>
                        <View style={styles.liveIcon}></View>
                        <Text style={styles.live}>
                            Live
                        </Text>
                        <Spacer />
                        <Text style={styles.audinceCount}>
                        10.120
                        </Text>
                    </View>
                </View>
                <View style={{ height: 10 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                        <Image source={require('../../assets/images/woman1.png')} style={{ width: 50, height: 50 }} resizeMode="cover" />
                        <View style={{ width: 10 }}></View>
                        <View style={{ flexDirection: 'column', height: 70 }}>
                            <Text style={styles.streamerNick}>
                            Crebuny
                            </Text>
                            <Text style={styles.game}>
                            Starfiled
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={styles.tag1}>
                                    <Text style={styles.tag1Text}>
                                        Action
                                    </Text>
                                </View>
                                <View style={styles.tag2}>
                                    <Text style={styles.tag2Text}>
                                    Adventure
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    video: {
        height: 140,
        width: 200,
        backgroundColor: 'red',
        borderRadius: 10
    },
    streamerNick: {
        fontFamily: 'Rubik-SemiBold',
        fontSize: 15,
        fontWeight: '400',
        color: 'white'
    },
    game: {
        fontFamily: 'Rubik-SemiBold',
        fontSize: 12,
        fontWeight: '400',
        color: 'white',
        opacity: 0.5
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
    unFollow: {
        backgroundColor: 'transparent',
        elevation: 0,
        top: 15
    },
    unFollowText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 15,
        fontWeight: '400',
        color: '#E93558',
        alignSelf: 'center'
    },
    live: {
        fontFamily: 'Rubik-Regular',
        fontSize: 15,
        fontWeight: '400',
        color: '#E93558',
        alignSelf: 'center',
        left: 5
    },
    liveIcon: {
        height: 15,
        width: 15,
        backgroundColor: '#E93558',
        borderRadius: 20,
        top: 5,
    },
    audinceCount: {
        fontFamily: 'Rubik-Regular',
        fontSize: 15,
        fontWeight: '400',
        color: 'white',
        alignSelf: 'center'
    }
});