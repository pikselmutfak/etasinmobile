import React from 'react';

import {Text, View, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Button = ({
  title,
  type = 'outline',
  disabled = false
}) => {
  const {goBack} = useNavigation();

  const height = 44

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        goBack()
      }}>
      <View
        style={{
          height,
          width: 130,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: disabled ? '#dddddd' : 'white',
          borderColor: disabled ? 'white' : 'green',
          borderWidth: type === 'outline' ? 1 : 0,
          borderRadius: height/2
        }}>
          <Text style={{
            color: disabled ? 'white' : 'green',
            fontSize: 16
          }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
