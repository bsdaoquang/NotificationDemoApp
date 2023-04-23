import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from '../styles/globalStyles';

const SettingScreen = ({navigation}: any) => {
  return (
    <View style={globalStyle.container}>
      <Text>Setting screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Text>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
