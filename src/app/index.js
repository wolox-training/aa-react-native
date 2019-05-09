import React, { PureComponent } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';
import Profile from './screens/Profile';
import Search from './screens/Search';

import * as Routes from '../constants/routes';
import * as NavigationOptions from '../config/navigationOptions';
import LoginContainer from './screens/Login';
import InitialLoading from './screens/InitialLoading';
import AuthService from '../services/AuthService';

const StackNavigator = createStackNavigator({
    [Routes.InitialLoading]:{
      screen: InitialLoading,
      navigationOptions: NavigationOptions.noHeaderNavigationOptions
    },
    [Routes.Login]: {
      screen: LoginContainer,
      navigationOptions: NavigationOptions.noHeaderNavigationOptions
    },
    [Routes.Home]: {
      screen: createBottomTabNavigator({
        [Routes.BookList]: {
          screen: BookList,
          navigationOptions: NavigationOptions.bookListNavigationOptions
        },
        [Routes.Profile]: {
          screen: Profile,
          navigationOptions: NavigationOptions.profileNavigationOptions
        }
      }),
      navigationOptions: NavigationOptions.childTabsNavigationOptions
    }, 
    [Routes.BookDetail]: {
      screen: BookDetail,
      navigationOptions: NavigationOptions.bookDetailNavigationOptions
    },
    [Routes.Search]: {
      screen: Search,
      navigationOptions: NavigationOptions.searchNavigationOptions
    }
  }, {
    defaultNavigationOptions: NavigationOptions.defaultNavigationOptions
  }
);

const AppNavigator = createAppContainer(StackNavigator);

class App extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    AuthService.authSetup(dispatch)
  }

  render() {
    return (
      <AppNavigator/>
    );
  }
}

export default connect()(App);

