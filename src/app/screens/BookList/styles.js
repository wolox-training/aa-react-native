import {StyleSheet} from 'react-native';

import {backgroundColor} from '../../../constants/colors';
import { BOOK_LIST_CONTAINER_PADDING_TOP } from '../../../constants/dimensions';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      paddingTop: BOOK_LIST_CONTAINER_PADDING_TOP
    }
  });
  