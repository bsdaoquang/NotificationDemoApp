import {View, Text, Button} from 'react-native';
import React from 'react';
import {globalStyle} from '../styles/globalStyles';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={globalStyle.container}>
      <Text>HomeScreen</Text>

      <Button
        title="Setting"
        onPress={() => navigation.navigate('SettingScreen')}
      />
    </View>
  );
};

export default HomeScreen;
