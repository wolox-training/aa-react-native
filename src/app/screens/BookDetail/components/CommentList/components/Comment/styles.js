import { StyleSheet } from 'react-native';

import { lightDark, gray, white } from '../../../../../../../constants/colors';
import { SMALL, BOLD } from '../../../../../../../constants/fontSizes';
import { SPACING_SMALL, MEDIUM_IMAGE_DIM, SPACING_MEDIUM } from '../../../../../../../constants/dimensions';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: SPACING_SMALL,
        paddingHorizontal: SPACING_SMALL,
        backgroundColor: white
    },
    username: {
        fontSize: SMALL,
        color: lightDark,
        fontWeight: BOLD
    },
    comment: {
        fontSize: SPACING_SMALL,
        color: gray
    },
    image: {
        width: MEDIUM_IMAGE_DIM,
        height: MEDIUM_IMAGE_DIM,
        borderRadius: MEDIUM_IMAGE_DIM / 2,
        marginTop: SPACING_MEDIUM,
        marginRight: SPACING_MEDIUM
    },
    textContainer: {
        flex: 1,
        marginTop: SPACING_SMALL
    }
});

