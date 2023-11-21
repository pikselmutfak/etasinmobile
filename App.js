import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {HomeNavigation} from './navigation';

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
};

export default App;
