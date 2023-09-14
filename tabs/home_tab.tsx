import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Spacer } from "@react-native-material/core";
import HomeFollowingCard from '../widgets/home_follow_widgets/home_following_card';
import HomeFollowingCard2 from '../widgets/home_follow_widgets/home_following_card';
import { IconButton } from '@react-native-material/core';
import HomeFollowingCard3 from '../widgets/home_follow_widgets/home_following_card3';
import SuggestedLiveCard1 from '../widgets/sugessted_live_widgets/suggested_live_card1';
import SuggestedLiveCard2 from '../widgets/sugessted_live_widgets/suggested_live_card2';
//import { LinearGradient } from 'expo-linear-gradient';

interface HomeTabProps {
  navigation: any;
}

export default function HomeTab(props: HomeTabProps) {

  const [openModal, setOpenModal] = useState(false);
  const { width, height } = Dimensions.get('window');
  const [ViewHeight, setViewHeight] = useState(100);
  const Categories = [{}, {}, {}, {}, {}, {}];

  function openView() {
    const sizeRowHeight = 370;
    const rows = Math.ceil(Categories.length / 4);
    const totalSize = rows * sizeRowHeight;
    const maxSize = height * 0.95;
    if (totalSize >= maxSize) {
      setViewHeight(maxSize);
    }
    else {
      setViewHeight(totalSize);
    }
  }
  function closeView() {
    setViewHeight(100);
  }

  const detail = () => props.navigation.navigate('Stream');

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', bottom: 360, backgroundColor: '#272727', width: '100%', height: 70, justifyContent: 'center' }}>
        <Text style={{ color: '#E93558', left: 16, fontSize: 25, fontFamily: 'Rubik-SemiBold', fontWeight: 'bold', top: 25 }}>StreaMy</Text>
        <Spacer />
        <TouchableOpacity style={{ elevation: 0, backgroundColor: 'transperant', justifyContent: 'center' }}>
          <View style={{ height: 40, width: 90, backgroundColor: '#131313', borderRadius: 10, justifyContent: 'center', alignSelf: 'center', right: 16 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, fontFamily: 'Rubik-SemiBold', color: 'white', left: 8 }}>
                Studio
              </Text>
              <Image source={require('../assets/icons/arrow-right.png')} style={{ width: 15, height: 15, top: 5, left: 16 }}/>
            </View>
          </View>
        </TouchableOpacity>
        <IconButton style={styles.iButton}
          icon={props => <Image source={require('../assets/icons/menu.png')} />}
          {...props} onPress={detail}
        />
      </View>
      <View style={[styles.modalize, { height: ViewHeight }]}>
        <TouchableOpacity style={{ width: '95%', height: '100%', alignSelf: 'center' }} onPress={() => {
          openModal ? closeView() : openView();
          setOpenModal(openModal ? false : true);
        }}>
          {openModal == false && (
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#E93558', alignSelf: 'center', fontWeight: 'bold', fontSize: 15, top: 25 }}>
                See more lives you followed
              </Text>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center', height: 24 }}>
                <Image source={require('../assets/icons/arrow-bottom.png')} style={{ width: 24, height: 24, top: 40 }} resizeMode="contain" />
              </TouchableOpacity>
              <View style={{ height: 80 }}></View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, fontFamily: 'Rubik-SemiBold', color: 'white' }}>Games</Text>
                <Spacer />
                <TouchableOpacity style={{ elevation: 0, backgroundColor: 'transparent', justifyContent: 'center', alignSelf: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 12, fontFamily: 'Rubik-SemiBold', color: '#E93558' }}> See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ height: 20 }}></View>
              <TouchableOpacity style={{ elevation: 0, backgroundColor: 'transperant' }} onPress={detail}>
                <View style={styles.game}>
                  <Image source={require('../assets/images/starfield.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} resizeMode="cover" />
                  <View style={{ flexDirection: 'row', bottom: 70, left: 10 }}>
                    <Text style={styles.gameName}>
                      Starfield
                    </Text>
                    <View style={{ height: 15, width: 30, backgroundColor: '#535157', borderRadius: 2, left: 10, justifyContent: 'center', alignSelf: 'center' }}>
                      <Text style={{ fontSize: 12, fontFamily: 'Rubik-Regular', fontWeight: '500', color: 'white', alignSelf: 'center', justifyContent: 'center' }}>
                        18+
                      </Text>
                    </View>
                    <View style={{ height: 15, width: 40, backgroundColor: '#E93558', borderRadius: 2, left: 20, justifyContent: 'center', alignSelf: 'center' }}>
                      <Text style={{ fontSize: 12, fontFamily: 'Rubik-Regular', fontWeight: '500', color: 'white', alignSelf: 'center', justifyContent: 'center' }}>
                        News
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', bottom: 60, marginHorizontal: 12 }}>
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
                    <Spacer />
                    <Text style={{ fontFamily: 'Rubik-SemiBold', fontSize: 12, color: '#E93558', fontWeight: 'bold' }}>
                      See in lives
                    </Text>
                    <Image source={require('../assets/icons/arrow-right_red.png')} style={{ width: 15, height: 15, left: 5, alignSelf: 'center' }} />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{ height: 20 }}></View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, fontFamily: 'Rubik-SemiBold', color: 'white' }}>Suggested lives</Text>
                <Spacer />
                <TouchableOpacity style={{ elevation: 0, backgroundColor: 'transparent', justifyContent: 'center', alignSelf: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 12, fontFamily: 'Rubik-SemiBold', color: '#E93558' }}> See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ height: 20 }}></View>
              <View style={{ flexDirection: 'row' }}>
                <SuggestedLiveCard1 />
                <SuggestedLiveCard2 />
              </View>
            </View>
          )}
          {openModal && (
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row', marginHorizontal: 10, top: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, fontFamily: 'Rubik-SemiBold', color: 'white' }}>lives you followed</Text>
                <Spacer />
                <IconButton style={styles.sortButton}
                  icon={props => <Image source={require('../assets/icons/sort.png')} />}
                  {...props} onPress={detail} />
              </View>
              <View style={{ height: 30 }}></View>
              <HomeFollowingCard />
              <View style={{ height: 16 }}></View>
              <HomeFollowingCard3 />
              <View style={{ height: 16 }}></View>
              <HomeFollowingCard2 />
              <View style={{ height: 16 }}></View>
              <Text style={{ color: '#E93558', alignSelf: 'center', fontWeight: 'bold', fontSize: 15 }}>
                See more lives you followed
              </Text>
              <TouchableOpacity style={{ width: '100%', alignItems: 'center', top: 5 }}>
                <Image source={require('../assets/icons/arrow-bottom.png')} style={{ width: 24, height: 24, transform: [{ rotate: '180deg' }] }} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    justifyContent: 'center',
  },
  iButton: {
    height: 24,
    width: 24,
    top: 25,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalize: {
    position: "absolute",
    backgroundColor: "#272727",
    top: 100,
    width: '100%',
    alignSelf: 'center',
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 45
  },
  sortButton: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  game: {
    height: 218,
    borderRadius: 10,
  },
  gameName: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 18,
    fontWeight: '500',
    color: 'white'
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
    alignSelf: 'center',
  },
  tag2: {
    height: 20,
    width: 70,
    borderRadius: 10,
    backgroundColor: '#535157',
    justifyContent: 'center',
    left: 10
  },
  tag2Text: {
    fontFamily: 'Rubik-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
    alignSelf: 'center'
  }
}); 
