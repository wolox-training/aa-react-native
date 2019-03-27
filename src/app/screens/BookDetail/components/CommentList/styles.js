import { StyleSheet } from 'react-native';

import { white } from '../../../../../constants/colors';
import { SPACING_MEDIUM, RADIUS_SMALL, SPACING_SMALL } from '../../../../../constants/dimensions';
import { SMALL } from '../../../../../constants/fontSizes';
import { skyBlue } from '../../../../../constants/colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:SPACING_MEDIUM,
        backgroundColor: white,
        borderRadius: RADIUS_SMALL
    },
    footer: {
        alignItems: 'center',
        paddingVertical: SPACING_SMALL
    },
    footerText: {
        fontSize: SMALL,
        color: skyBlue
    }
  });
  