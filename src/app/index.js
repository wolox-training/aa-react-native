import React from 'react';
import { Dimensions } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HeaderBackground from './components/HeaderBackground';
import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';

import { white } from '../constants/colors';
import { MEDIUM } from '../constants/fontSizes';
import { SPACING_BIG } from '../constants/dimensions';
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
      headerStyle: {height: Dimensions.get('window').height * 0.15, width: '100%', backgroundColor: 'transparent'},
      headerBackground: <HeaderBackground/>,
      headerTitleStyle: { color: white, fontSize: MEDIUM, fontWeight: "bold", marginLeft: SPACING_BIG}
    }
  }
);

export default createAppContainer(AppNavigator);

