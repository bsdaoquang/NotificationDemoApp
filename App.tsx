import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {requestUserPermission} from './src/utils/notificationHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    requestUserPermission();
  }, []);

  // const getFcmToken = async () => {
  //   const token = await AsyncStorage.getItem('fcmToken');

  //   if (token) {
  //     setToken(token);
  //   }
  // };

  return (
    <View style={[styles.conntainer]}>
      <Text style={[styles.title]}>Notification App</Text>
    </View>
  );
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
