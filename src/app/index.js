import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import * as Routes from '../constants/routes';
import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';


const AppNavigator = createStackNavigator({
  [Routes.BookList]: {
   screen: BookList
  }, 
  [Routes.BookDetail]: {
    screen: BookDetail
  }
  }, {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);

