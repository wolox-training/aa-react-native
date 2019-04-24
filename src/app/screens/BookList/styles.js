import { StyleSheet } from 'react-native';

import { red } from '../../../constants/colors';
import { SMALL } from '../../../constants/fontSizes';
import { SPACING_MEDIUM } from '../../../constants/dimensions';

export default StyleSheet.create({
    errorMessage: {
      fontSize: SMALL,
      color: red,
      textAlign: "center",
      marginTop: SPACING_MEDIUM
    }
  });
  