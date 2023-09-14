import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StreamPage from '../../pages/stream_page';
import Router from './route';

const { Navigator, Screen } = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName='Router'>
                <Screen name='Router' component={Router}></Screen>
                <Screen name='Stream' component={StreamPage}></Screen>
            </Navigator>
        </NavigationContainer>
    );
}