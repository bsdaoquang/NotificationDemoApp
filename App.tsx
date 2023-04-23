import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {requestUserPermission} from './src/utils/notificationHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/screens/HomeScreen';
import HomeNavigator from './src/navigator/HomeNavigator';

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    requestUserPermission();
  }, []);

  return <HomeNavigator />;
};

export default App;

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    color: '#676767',
    fontWeight: 'bold',
  },
});
