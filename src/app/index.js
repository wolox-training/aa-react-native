import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';

import * as Routes from '../constants/routes';
import { defaultNavigationOptions, bookDetailNavigationOptions, bookListNavigationOptions } from '../config/navigationOptions';


const AppNavigator = createStackNavigator({
    [Routes.BookList]: {
      screen: BookList,
      navigationOptions: bookListNavigationOptions
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

