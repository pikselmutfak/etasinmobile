import React from 'react';

import {View, Text, Image, ScrollView} from 'react-native';

import profile from '../assets/profile.png';
import Button from './Button';

import Input from './Input';

const PageA = () => {
  return (
    <ScrollView>
    <View style={{
        margin: 10,
        borderRadius: 8,
        height: 900
    }}>
      <View style={{
        backgroundColor: 'white',
        paddingBottom: 10
      }}>
        <View style={{
            marginVertical: 10,
            alignItems: 'center'
        }}>
            <Image source={profile} style={{
                tintColor: 'green',
                width: 90,
                height: 90
            }} />
        </View>
        <View style={{
            alignItems: 'center'
        }}>
            <Button type='outline' title="Fotoğraf Ekle" />
        </View>
        <View style={{
            marginTop: 10
        }}>
            <Input title="Ad" />
            <Input title="Soyad" />
            <Input title="Doğum Tarihi" />
            <Input title="E-Posta" keyboardType="email" />
        </View>
        <View style={{
                marginTop: 10,
                alignItems: 'center'
            }}>
                <Button disabled title="İleri" />
            </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default PageA;
