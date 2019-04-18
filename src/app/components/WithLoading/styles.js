import { StyleSheet } from 'react-native';

import { SMALL } from '../../../constants/fontSizes';
import { backgroundColor, blue } from '../../../constants/colors';
import { SPACING_VERY_SMALL } from '../../../constants/dimensions';

export default StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        alignItems: 'center'
    },
    text: {
        fontSize: SMALL,
        color: blue,
        marginTop: SPACING_VERY_SMALL
    }
});

