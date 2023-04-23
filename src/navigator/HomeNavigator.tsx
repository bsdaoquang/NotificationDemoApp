import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import linking from '../../linking';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer linking={linking}>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen name="SettingScreen" component={SettingScreen} />
        <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
