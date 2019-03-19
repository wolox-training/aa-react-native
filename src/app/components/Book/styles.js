import {StyleSheet} from 'react-native';
import {black, grey} from '../../../constants/colors'


export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  name: {
      fontSize: 17,
      color: black,
      textAlign: 'left'
    },
    author: {
      fontSize: 15,
      color: grey,
      textAlign: 'left'
    },
    image: {
        width: 40,
        heigth: 60 
    }
});