import {StyleSheet} from 'react-native';
import {white, black, grey} from '../../../constants/colors'


export default StyleSheet.create({
  container: {
    flex: 0,
    height: 90,
    width: 335,
    marginHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 15,
    backgroundColor: white,
    borderRadius: 5,
    marginBottom: 10,
    opacity: 1,
    shadowColor: black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1
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
        height: 60,
        marginLeft: 30,
        marginRight: 20,
        opacity: 1
    }
});

