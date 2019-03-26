import { StyleSheet } from 'react-native';

import { white, darkGray, gray, black } from '../../../../../constants/colors';
import { BOOK_NAME, BOOK_AUTHOR} from '../../../../../constants/fontSizes';
import { BOOK_CONTAINER_MARGIN_HORIZONTAL, BOOK_CONTAINER_MARGIN_BOTTOM, BOOK_CONTAINER_PADDING_VERTICAL, BOOK_CONTAINER_PADDING_RIGHT, 
  BOOK_CONTAINER_RADIUS, BOOK_IMAGE_WIDTH, BOOK_IMAGE_HEIGHT, BOOK_IMAGE_MARGIN_LEFT, BOOK_IMAGE_MARGIN_RIGHT } from '../../../../../constants/dimensions';
import { containerShadow } from '../../../../../constants/shadows';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: BOOK_CONTAINER_MARGIN_HORIZONTAL, 
    marginBottom: BOOK_CONTAINER_MARGIN_BOTTOM,
    paddingVertical: BOOK_CONTAINER_PADDING_VERTICAL, 
    paddingRight: BOOK_CONTAINER_PADDING_RIGHT,
    backgroundColor: white,
    borderRadius: BOOK_CONTAINER_RADIUS,
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
    width: BOOK_IMAGE_WIDTH, 
    height: BOOK_IMAGE_HEIGHT,
    marginLeft: BOOK_IMAGE_MARGIN_LEFT,
    marginRight: BOOK_IMAGE_MARGIN_RIGHT
  },
  bookContainer : {
    flex: 1
  }
});

