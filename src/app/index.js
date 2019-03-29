import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';


import * as Routes from '../constants/routes';
import { defaultNavigationOptions } from '../config/navigationOptions';


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

