import { StyleSheet } from 'react-native';
import { white, darkGray, grey, black } from '../../../../../constants/colors';


export default StyleSheet.create({
  container: {
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
    shadowRadius: 1,
    elevation: 2
  },
  name: {
      fontSize: 17,
      color: darkGray,
      fontWeight: "bold"
    },
    author: {
      fontSize: 15,
      color: grey,
    },
    image: {
        width: 40,
        height: 60,
        marginLeft: 30,
        marginRight: 20
    }
});

