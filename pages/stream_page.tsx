import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, FlatList, TextInput } from 'react-native';
import { AppBar, IconButton } from '@react-native-material/core';
import StreamerDetail from '../widgets/streamer_detail';
import DonateAndUnfollowSection from '../widgets/donate_and_unfollow_section';
import NormalMessage from '../widgets/normal_message';
import DonateMessage from '../widgets/donate_message';
import { Divider } from '@rneui/themed';

const messages = [NormalMessage, DonateMessage];

export default function StreamPage({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: '#131313' }}>
                <AppBar style={{ top: 40, height: 100, backgroundColor: 'transparent', marginHorizontal: 16 }}
                    leading={
                        <IconButton style={{ height: 24, width: 24, }}
                            icon={props => <Image source={require('../assets/icons/arrow-left.png')} />}
                            onPress={() => navigation.goBack('Router')}
                        />
                    }
                    centerTitle
                    title={
                        <Text style={styles.streamerName}>Favory</Text>
                    }
                    trailing={
                        <IconButton style={styles.iButton}
                            icon={props => <Image source={require('../assets/icons/menu.png')} />}
                        />
                    }
                />
                <StreamerDetail />
                <View style={{ height: 20 }}></View>
                <DonateAndUnfollowSection />
                <View style={{ height: 20 }}></View>
                <View style={{ height: 200, marginHorizontal: 16 }}>
                    <Image source={require('../assets/images/woman-chat.jpg')} style={{ width: '100%', height: '100%', borderRadius: 10 }} resizeMode="cover" />
                </View>
                <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ height: 260, marginHorizontal: 16, borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#272727', padding: 10 }}>
                        <View style={{ height: 200 }}>
                            <FlatList
                                data={messages}
                                renderItem={({ item }) =>
                                    <><NormalMessage />
                                        <DonateMessage /></>
                                }
                            />
                        </View>
                    </View>
                    <View style={{ borderWidth: 2, borderColor: '#535157', height: 50, marginHorizontal: 16, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, flexDirection: 'row' }}>
                        <View style={{ width: 300 }}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Your message..."
                                placeholderTextColor={'white'}
                            />
                        </View>
                        <IconButton style={{ height: 15, width: 15, top: 15 }}
                            icon={props => <Image source={require('../assets/icons/info.png')} />}
                            onPress={() => navigation.goBack('Router')}
                        />
                        <Divider />
                        <IconButton style={{ height: 15, width: 15, top: 15, left: 30 }}
                            icon={props => <Image source={require('../assets/icons/send.png')} />}
                            onPress={() => navigation.goBack('Router')}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
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
    searchInput: {
        margin: 12,
        fontFamily: 'Rubik-Regular',
        fontWeight: '500',
        fontSize: 15,
        color: 'white',
        opacity: 0.5
    }
});