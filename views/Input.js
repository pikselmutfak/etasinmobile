import React from 'react';

import {TextInput, View, Text} from 'react-native';

const Input = ({title, autoCapitalize = 'words', onChange, value, keyboardType}) => {
  return (
    <View style={{
        marginTop: 10
    }}>
      <Text style={{
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 4
      }}>{title}</Text>
      <TextInput 
        autoComplete='off'
        autoCapitalize={autoCapitalize} 
        keyboardType={keyboardType}
        placeholder={title} 
        onChange={onChange}
        value={value}
        style={{
            marginTop: 4,
            padding: 12,
            paddingLeft: 4,
            borderWidth: 1,
            borderColor: '#dddddd',
            borderRadius: 6
        }}
    />
    </View>
  );
};

export default Input;
