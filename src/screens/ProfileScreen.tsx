import {View, Text} from 'react-native';
import React from 'react';
import {globalStyle} from '../styles/globalStyles';

const ProfileScreen = ({route, navigation}: any) => {
  console.log(route.params);

  return (
    <View style={globalStyle.container}>
      <Text>Profile screen</Text>
    </View>
  );
};

export default ProfileScreen;
