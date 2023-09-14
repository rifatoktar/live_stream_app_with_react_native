import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, } from 'react-native';

export default function SearchTab() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: '#1e1e1e' }}>
                <View style={{ height: 400 }}></View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={styles.container}>Search Tab Appearance</Text>
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
        fontFamily: 'Rubik-SemiBold',
        fontWeight: '600',
        fontSize: 30,
        color: 'white'
    },
});