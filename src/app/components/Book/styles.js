import {StyleSheet} from 'react-native';
import {black, grey} from '../../../constants/colors'


export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15
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
        heigth: 60,
        marginLeft: 30,
        marginRight: 20
    }
});