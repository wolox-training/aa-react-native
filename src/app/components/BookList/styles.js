import { StyleSheet } from 'react-native';

import { backgroundColor } from '../../../constants/colors';
import { SPACING_SMALL } from '../../../constants/dimensions';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      paddingTop: SPACING_SMALL
    }
  });