import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';

import * as Routes from '../constants/routes';
import { defaultNavigationOptions, bookDetailNavigationOptions, bookListNavigationOptions } from '../config/navigationOptions';

// TODO: remove Dummy is just for test.

function Dummy () {
  return (
    <Text>Dummy</Text>
  )
};

const TabNavigator = createBottomTabNavigator({
  [Routes.BookList]: {
    screen: BookList
  },
  [Routes.Dummy]: {
    screen: Dummy
  }
});

const AppNavigator = createStackNavigator({
    [Routes.BookList]: {
      screen: TabNavigator,
      navigationOptions: bookListNavigationOptions
    }, 
    [Routes.BookDetail]: {
      screen: BookDetail,
      navigationOptions: bookDetailNavigationOptions
    },
    [Routes.Dummy]: {
      screen: Dummy
    }
  }, {
    defaultNavigationOptions: defaultNavigationOptions
  }
);

export default createAppContainer(AppNavigator);

