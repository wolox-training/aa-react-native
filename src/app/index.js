import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, getActiveChildNavigationOptions } from 'react-navigation';

import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';

import * as Routes from '../constants/routes';
import { defaultNavigationOptions, bookDetailNavigationOptions, bookListNavigationOptions, dummyNavigationOptions, childTabsNavigationOptions } from '../config/navigationOptions';

// TODO: remove Dummy is just for test.

function Dummy () {
  return (
    <Text>Dummy</Text>
  )
};

const AppNavigator = createStackNavigator({
    [Routes.Home]: {
      screen: createBottomTabNavigator({
        [Routes.BookList]: {
          screen: BookList,
          navigationOptions: bookListNavigationOptions
        },
        [Routes.Dummy]: {
          screen: Dummy,
          navigationOptions: dummyNavigationOptions
        }
      }),
      navigationOptions: childTabsNavigationOptions
    }, 
    [Routes.BookDetail]: {
      screen: BookDetail,
      navigationOptions: bookDetailNavigationOptions
    },
    [Routes.Dummy]: {
      screen: Dummy,
      navigationOptions: dummyNavigationOptions
    }
  }, {
    defaultNavigationOptions: defaultNavigationOptions
  }
);

export default createAppContainer(AppNavigator);

