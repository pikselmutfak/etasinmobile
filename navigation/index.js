import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PageA from '../views/PageA';
import PageB from '../views/PageB';
import Landing from '../views/Landing';
import Left from '../views/Left';

export const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{
          title: 'Kayıt',
        }}
      />
      <Stack.Screen
        name="PageA"
        component={PageA}
        options={{
          title: 'Temel Bilgiler',
          headerLeft: () => <Left />,
        }}
      />
      <Stack.Screen
        name="PageB"
        component={PageB}
        options={{
          title: 'Araç Bilgileri',
          headerLeft: () => <Left />,
        }}
      />
    </Stack.Navigator>
  );
};
