import { StyleSheet } from 'react-native';

import { backgroundColor, red } from '../../../constants/colors';
import { EXTRA_SMALL } from '../../../constants/fontSizes';
import { SPACING_SMALL } from '../../../constants/dimensions';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      paddingTop: SPACING_SMALL
    },
    errorMessage: {
      fontSize: EXTRA_SMALL,
      color: red
    }
  });
  