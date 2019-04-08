import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';
import Dummy from './screens/Dummy';

import * as Routes from '../constants/routes';
import { defaultNavigationOptions, bookDetailNavigationOptions, bookListNavigationOptions, dummyNavigationOptions, childTabsNavigationOptions, loginNavigationOptions } from '../config/navigationOptions';
import LoginContainer from './screens/Login';


const AppNavigator = createStackNavigator({
    [Routes.Login]: {
      screen: LoginContainer,
      navigationOptions: loginNavigationOptions
    },
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
    }
  }, {
    defaultNavigationOptions: defaultNavigationOptions
  }
);

export default createAppContainer(AppNavigator);

