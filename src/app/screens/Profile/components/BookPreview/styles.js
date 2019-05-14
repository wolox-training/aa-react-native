import { StyleSheet } from 'react-native';

import { SMALL, MEDIUM, BOLD } from '../../../../../constants/fontSizes';
import { darkGray, gray, white } from '../../../../../constants/colors';
import { SPACING_MEDIUM, BIG_IMAGE_HEIGHT, BIG_IMAGE_WIDTH, SPACING_VERY_SMALL, SPACING_SMALL } from '../../../../../constants/dimensions';


export default StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: white,
        padding: SPACING_VERY_SMALL,
        margin: SPACING_MEDIUM,
        marginTop: SPACING_VERY_SMALL
    },
    name: {
        fontSize: MEDIUM,
        color: darkGray,
        fontWeight: BOLD,
        marginVertical: SPACING_SMALL
    },
    author: {
        fontSize: SMALL,
        color: gray,
        marginBottom: SPACING_SMALL
    },
    image: {
        width: BIG_IMAGE_WIDTH, 
        height: BIG_IMAGE_HEIGHT,
        marginVertical: SPACING_VERY_SMALL,
    }
});
