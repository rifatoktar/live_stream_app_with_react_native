import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

import Home from '../../tabs/home_tab';
import Search from '../../tabs/search_tab';
import Drops from '../../tabs/drops_tab';
import Profile from '../../tabs/profile_tab';

export default function Router() {

    const { icon } = styles;

    return (
        <Navigator screenOptions={screenOptions}>
            <Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) => focused ? <Image style={icon} source={require('../../assets/icons/video-fill.png')} /> : <Image style={icon} source={require('../../assets/icons/video.png')} />
            }} />
            <Screen name='Search' component={Search} options={{
                tabBarIcon: ({ focused }) => focused ? <Image style={icon} source={require('../../assets/icons/search.png')} /> : <Image style={icon} source={require('../../assets/icons/search.png')} />
            }} />
            <Screen name='Drops' component={Drops} options={{
                tabBarIcon: ({ focused }) => focused ? <Image style={icon} source={require('../../assets/icons/gift-fill.png')} /> : <Image style={icon} source={require('../../assets/icons/gift.png')} />
            }} />
            <Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({ focused }) => focused ? <Image style={icon} source={require('../../assets/icons/profile-fill.png')} /> : <Image style={icon} source={require('../../assets/icons/profile.png')} />
            }} />
        </Navigator>
    );
}

const styles = {
    icon: {
        height: 24,
        width: 24,
    }
}

const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'absolute',
        height: 70,
        backgroundColor: '#272727'
    }
}
