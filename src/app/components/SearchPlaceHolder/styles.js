import { StyleSheet } from 'react-native';

import { gray, black, backgroundColor } from '../../../constants/colors';
import { BOLD, SMALL } from '../../../constants/fontSizes';
import { SPACING_MEDIUM, SPACING_SMALL, SPACING_EXTRA_BIG } from '../../../constants/dimensions';

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
        height: 50,
        width: 50
    },
    text,
    title:{
        ...text,
        color: black,
        fontWeight: BOLD,
        marginBottom: SPACING_SMALL
    }
});

