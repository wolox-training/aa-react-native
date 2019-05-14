import { StyleSheet } from 'react-native';

import { backgroundColor, darkGray } from '../../../constants/colors';
import { MEDIUM, BOLD } from '../../../constants/fontSizes';
import { SPACING_SMALL } from '../../../constants/dimensions';

export default StyleSheet.create({
    container: {
        flex: 1,    
        backgroundColor: backgroundColor,
    },
    slide: {
        flex: 1,
        height: '100%'  
    },
    contentContainer: {
        justifyContent: 'center'
    },
    text: {
        fontSize: MEDIUM,
        color: darkGray,
        fontWeight: BOLD,
        margin: SPACING_SMALL
    },
});
