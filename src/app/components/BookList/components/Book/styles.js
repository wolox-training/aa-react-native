import { StyleSheet } from 'react-native';

import { white, darkGray, gray } from '../../../../../constants/colors';
import { SMALL, MEDIUM, BOLD} from '../../../../../constants/fontSizes';
import { SPACING_MEDIUM, SPACING_BIG, SMALL_IMAGE_HEIGHT, SMALL_IMAGE_WIDTH, RADIUS_SMALL, SPACING_VERY_SMALL, SPACING_SMALL } from '../../../../../constants/dimensions';
import { containerShadow } from '../../../../../constants/shadows';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: SPACING_MEDIUM, 
    marginBottom: SPACING_VERY_SMALL,
    paddingVertical: SPACING_SMALL, 
    paddingRight: SPACING_VERY_SMALL,
    backgroundColor: white,
    borderRadius: RADIUS_SMALL,
    ...containerShadow
  },
  name: {
    fontSize: MEDIUM,
    color: darkGray,
    fontWeight: BOLD
  },
  author: {
    fontSize: SMALL,
    color: gray,
  },
  image: {
    width: SMALL_IMAGE_WIDTH, 
    height: SMALL_IMAGE_HEIGHT,
    marginLeft: SPACING_BIG,
    marginRight: SPACING_MEDIUM
  },
  bookContainer : {
    flex: 1
  }
});

