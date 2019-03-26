import {StyleSheet} from 'react-native';

import {backgroundColor} from '../../../constants/colors';
import * as Paddings from '../../../constants/paddings';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      ...Paddings.bookListContainer
    }
  });
  