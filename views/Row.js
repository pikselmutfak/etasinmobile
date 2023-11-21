import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Row = ({item, index, onPress}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        if (index === 0) {
          navigate('PageA');
        } else if (index === 5) {
          navigate('PageB');
        }
      }}>
      <View
        style={{
          height: 50,
          paddingLeft: 10,
          paddingRight: 8,
          borderTopWidth: index > 0 ? 1 : 0,
          borderTopColor: '#dddddd',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>{item.title}</Text>
          {item.title !== '' && (
            <Text
              style={{
                fontSize: 10,
                color: 'gray',
              }}>
              {item.text}
            </Text>
          )}
        </View>
        <View>
          <Text>></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
