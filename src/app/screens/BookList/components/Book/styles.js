import { StyleSheet } from 'react-native';

import { white, darkGray, gray, black } from '../../../../../constants/colors';
import * as FontSize from '../../../../../constants/fontSizes';
import * as Dimensions from '../../../../../constants/dimensions';
import * as Margins from '../../../../../constants/margins';
import * as Paddings from '../../../../../constants/paddings';
import * as Shadows from '../../../../../constants/shadows';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    ...Margins.bookContainer,
    ...Paddings.bookContainer,
    backgroundColor: white,
    borderRadius: Dimensions.bookContainerRadius,
    ...Shadows.container
  },
  name: {
    fontSize: FontSize.bookName,
    color: darkGray,
    fontWeight: "bold"
  },
  author: {
    fontSize: FontSize.bookAuthor,
    color: gray,
  },
  image: {
      ...Dimensions.bookImage,
      ...Margins.bookImage
  }
});

