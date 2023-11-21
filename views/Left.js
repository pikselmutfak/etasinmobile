import React from 'react';

import {Text, View, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import left from '../assets/left.png'

const Left = ({item, index}) => {
  const {goBack} = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        goBack()
      }}>
      <View
        style={{
          height: 24,
          width: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Image source={left} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Left;
