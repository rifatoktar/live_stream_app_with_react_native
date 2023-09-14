import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Spacer } from "@react-native-material/core";

export default function HomeFollowingCard() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.video}>
                    <Image source={require('../../assets/images/gta5.jpg')} style={{ width: '100%', height: '100%', borderRadius: 10 }} resizeMode="cover" />
                    <View style={{flexDirection: 'row', padding: 10, bottom: 40 }}>
                        <View style={styles.liveIcon}></View>
                    <Text style={styles.live}>
                        Live
                    </Text>
                    <Spacer />
                    <Text style={styles.audinceCount}>
                    12.320
                    </Text>
                    </View>
                </View>
                <View style={{ height: 10 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                        <Image source={require('../../assets/images/man1.png')} style={{ width: 50, height: 50 }} resizeMode="cover" />
                        <View style={{ width: 10 }}></View>
                        <View style={{ flexDirection: 'column', height: 70 }}>
                            <Text style={styles.streamerNick}>
                                Funni
                            </Text>
                            <Text style={styles.game}>
                                Grand Theft Auto 5
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={styles.tag1}>
                                    <Text style={styles.tag1Text}>
                                        Action
                                    </Text>
                                </View>
                                <View style={styles.tag2}>
                                    <Text style={styles.tag2Text}>
                                        Violence
                                    </Text>
                                </View>
                                <View style={styles.tag3}>
                                    <Text style={styles.tag3Text}>
                                        English
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Spacer />
                        <TouchableOpacity style={styles.unFollow}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                            <Image source={require('../../assets/icons/cross.png')} style={{ width: 24, height: 24, borderRadius: 10 }} />
                            <View style={{width: 5}}></View>
                            <Text style={styles.unFollowText}>
                                Unfollow
                            </Text>
                            </View>
                        </TouchableOpacity>
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
        height: 100,
        width: '100%',
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