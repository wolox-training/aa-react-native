import React from 'react';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';

import * as Routes from '../constants/routes';
import { defaultNavigationOptions } from '../config/navigationOptions';

// TODO: remove Dummy is just for test.

const TabNavigator = createBottomTabNavigator({
  [Routes.BookList]: {
    screen: BookList
  },
  [Routes.Dummy]: {
    screen: BookList
  }
});

const AppNavigator = createStackNavigator({
    [Routes.BookList]: {
    screen: BookList
    }, 
    [Routes.BookDetail]: {
      screen: BookDetail
    }
  }, {
    defaultNavigationOptions: defaultNavigationOptions
  }
);

export default createAppContainer(AppNavigator);

