import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';
import Dummy from './screens/Dummy';

import * as Routes from '../constants/routes';
import * as NavigationOptions from '../config/navigationOptions';
import LoginContainer from './screens/Login';


const AppNavigator = createStackNavigator({
    [Routes.Login]: {
      screen: LoginContainer,
      navigationOptions: NavigationOptions.loginNavigationOptions
    },
    [Routes.Home]: {
      screen: createBottomTabNavigator({
        [Routes.BookList]: {
          screen: BookList,
          navigationOptions: NavigationOptions.bookListNavigationOptions
        },
        [Routes.Dummy]: {
          screen: Dummy,
          navigationOptions: NavigationOptions.dummyNavigationOptions
        }
      }),
      navigationOptions: NavigationOptions.childTabsNavigationOptions
    }, 
    [Routes.BookDetail]: {
      screen: BookDetail,
      navigationOptions: NavigationOptions.bookDetailNavigationOptions
    }
  }, {
    defaultNavigationOptions: NavigationOptions.defaultNavigationOptions
  }
);

export default createAppContainer(AppNavigator);

