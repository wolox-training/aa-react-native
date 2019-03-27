import { StyleSheet } from 'react-native';

import { white } from '../../../../../constants/colors';
import { SPACING_MEDIUM, RADIUS_SMALL } from '../../../../../constants/dimensions';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:SPACING_MEDIUM,
        backgroundColor: white,
        borderRadius: RADIUS_SMALL
    }
  });
  