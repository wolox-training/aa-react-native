import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import BookList from './screens/BookList';
import Dummy from './screens/Dummy';


const AppNavigator = createStackNavigator({
  BookList: {
   screen: BookList
  }, 
  Dummy: {
    screen: Dummy
  }
  }, {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);

