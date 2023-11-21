import React from 'react';

import {View, FlatList} from 'react-native';

import Row from './Row';
import Button from './Button';
import {listA as list} from '../data/api';

const Landing = () => {
  return (
    <View>
      <View
        style={{
          margin: 10,
          backgroundColor: 'white',
          borderRadius: 8,
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowColor: 'black',
          shadowOpacity: 0.4,
          shadowRadius: 1,
        }}>
        <FlatList
          data={list}
          renderItem={({item, index}) => <Row item={item} index={index} />}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Button disabled title="Bitti" />
      </View>
    </View>
  );
};

export default Landing;
