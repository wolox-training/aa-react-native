import { StyleSheet } from 'react-native';

import { backgroundColor } from '../../../constants/colors';
import { SPACING_SMALL } from '../../../constants/dimensions';

const container = {
  backgroundColor: backgroundColor,
  paddingTop: SPACING_SMALL
};

export default StyleSheet.create({
    container,
    noList:{
      flex: 1,
    }
  });