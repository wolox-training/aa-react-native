import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Routes from '../constants/routes';
import BookList from './screens/BookList';
import Dummy from './screens/Dummy';


const AppNavigator = createStackNavigator({
  [Routes.BookList]: {
   screen: BookList
  }, 
  [Routes.Dummy]: {
    screen: Dummy
  }
  }, {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);

