import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import * as Routes from '../constants/routes';
import BookList from './screens/BookList';
import BookDetail from './components/BookDetail';

class Test extends Component {
  render() {
    return (
      <View>
        <BookDetail title= {'TitleTest'} author={'AuthorTest'} year={'2009'} type={'Novela'}/>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  [Routes.BookList]: {
   screen: BookList
  }, 
  [Routes.Dummy]: {
    screen: Test
  }
  }, {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);

