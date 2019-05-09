import { StyleSheet } from 'react-native';

import { MEDIUM, BOLD } from '../../../../../constants/fontSizes';
import { darkGray, white } from '../../../../../constants/colors';
import { SPACING_MEDIUM, SPACING_VERY_SMALL } from '../../../../../constants/dimensions';


export default StyleSheet.create({
    container: {
        flex:1,
        height: '100%',
        alignItems: 'center',
        backgroundColor: white,
        padding: SPACING_VERY_SMALL,
        marginHorizontal: SPACING_MEDIUM,
        marginVertical: SPACING_VERY_SMALL
    },
    text: {
        fontSize: MEDIUM,
        color: darkGray,
        fontWeight: BOLD,
        marginVertical: SPACING_MEDIUM
    },
    icon: {
        flex: 1,
        marginVertical: SPACING_VERY_SMALL,
    }
});
