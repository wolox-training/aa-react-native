import { StyleSheet } from 'react-native';
import {EXTRA_LARGE, BOLD, SMALL } from '../../../constants/fontSizes';
import { white, lightGray } from '../../../constants/colors';
import { SPACING_MEDIUM, RADIUS_BIG, BUTTON_HEIGHT, SPACING_EXTRA_BIG, RADIUS_SMALL, BORDER_WIDTH } from '../../../constants/dimensions';
import { textShadow } from '../../../constants/shadows';

const text = {
    fontSize: SMALL,
    fontWeight: BOLD,
    color: white
}

export default  styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: SPACING_EXTRA_BIG
    },
    title: {
        ...text,
        ...textShadow,
        fontSize: EXTRA_LARGE
    },
    input: {
        width: '100%',
        height: BUTTON_HEIGHT, 
        backgroundColor: 'transparent',
        marginBottom: SPACING_MEDIUM,
        borderRadius: RADIUS_SMALL,
        borderColor: white,
        borderBottomWidth: BORDER_WIDTH,
        ...text
    },
    button: {
        width: '100%',
        height: BUTTON_HEIGHT,
        borderRadius: RADIUS_BIG,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: BORDER_WIDTH,
        borderColor: white,
        backgroundColor: 'transparent'
    },
    buttonText: {
        ...text
    }
});


export const commonProps = { style: styles.input, numberOfLines: 1, placeholderTextColor: lightGray };



