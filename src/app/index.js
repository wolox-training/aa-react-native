import React from 'react';
import { Dimensions } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HeaderBackground from './components/HeaderBackground';
import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';

import { white } from '../constants/colors';
import * as Routes from '../constants/routes';

const AppNavigator = createStackNavigator({
    [Routes.BookList]: {
    screen: BookList
    }, 
    [Routes.BookDetail]: {
      screen: BookDetail
    }
  }, {
    defaultNavigationOptions: {
      headerStyle: {height: Dimensions.get('window').height * 0.1514, width: '100%', backgroundColor: 'transparent'},
      headerBackground: <HeaderBackground/>,
      headerTitleStyle: { color: white, fontSize: 17, fontWeight: "bold"},
    }
  }
);

export default createAppContainer(AppNavigator);

