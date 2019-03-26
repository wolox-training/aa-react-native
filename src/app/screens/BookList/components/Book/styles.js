import { StyleSheet } from 'react-native';

import { white, darkGray, gray, black } from '../../../../../constants/colors';
import { BOOK_NAME, BOOK_AUTHOR} from '../../../../../constants/fontSizes';
import * as Dimensions from '../../../../../constants/dimensions';
import { containerShadow } from '../../../../../constants/shadows';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: Dimensions.BOOK_CONTAINER_MARGIN_HORIZONTAL, 
    marginBottom: Dimensions.BOOK_CONTAINER_MARGIN_BOTTOM,
    paddingVertical: Dimensions.BOOK_CONTAINER_PADDING_VERTICAL, 
    paddingRight: Dimensions.BOOK_CONTAINER_PADDING_RIGHT,
    backgroundColor: white,
    borderRadius: Dimensions.BOOK_CONTAINER_RADIUS,
    ...containerShadow
  },
  name: {
    fontSize: BOOK_NAME,
    color: darkGray,
    fontWeight: "bold"
  },
  author: {
    fontSize: BOOK_AUTHOR,
    color: gray,
  },
  image: {
    width: Dimensions.BOOK_IMAGE_WIDTH, 
    height: Dimensions.BOOK_IMAGE_HEIGHT,
    marginLeft: Dimensions.BOOK_IMAGE_MARGIN_LEFT,
    marginRight: Dimensions.BOOK_IMAGE_MARGIN_RIGHT
  },
  bookContainer : {
    flex: 1
  }
});

