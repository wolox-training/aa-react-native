import { StyleSheet } from 'react-native';

import { gray, black, backgroundColor } from '../../../constants/colors';
import { BOLD, SMALL } from '../../../constants/fontSizes';
import { SPACING_MEDIUM, SPACING_SMALL, SPACING_EXTRA_BIG, PLACE_HOLDER_DIM } from '../../../constants/dimensions';

const text = {
    color: gray,
    fontSize: SMALL,
};

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: backgroundColor
    },
    image: {
        marginBottom: SPACING_MEDIUM,
        marginTop: SPACING_EXTRA_BIG,
        height: PLACE_HOLDER_DIM,
        width: PLACE_HOLDER_DIM
    },
    text,
    title:{
        color: black,
        fontWeight: BOLD,
        marginBottom: SPACING_SMALL
    }
});

