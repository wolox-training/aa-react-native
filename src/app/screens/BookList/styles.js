import { StyleSheet } from 'react-native';

import { backgroundColor, red } from '../../../constants/colors';
import { SMALL } from '../../../constants/fontSizes';
import { SPACING_SMALL, SPACING_MEDIUM } from '../../../constants/dimensions';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      paddingTop: SPACING_SMALL
    },
    errorMessage: {
      fontSize: SMALL,
      color: red,
      textAlign: "center",
      marginTop: SPACING_MEDIUM
    }
  });
  