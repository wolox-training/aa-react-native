import { StyleSheet } from 'react-native';

import { white, darkGray, gray, skyBlue } from '../../../../../constants/colors';
import { SMALL, LARGE } from '../../../../../constants/fontSizes';
import { BUTTON_HEIGHT, SPACING_MEDIUM, SPACING_BIG, RADIUS_SMALL, RADIUS_BIG, SPACING_VERY_SMALL, BIG_IMAGE_WIDTH, BIG_IMAGE_HEIGHT, SPACING_SMALL, BORDER_WIDTH} from '../../../../../constants/dimensions';
import { containerShadow } from '../../../../../constants/shadows';

const button = {
    width: '100%',
    height: BUTTON_HEIGHT,
    borderRadius: RADIUS_BIG,
    alignItems: 'center',
    justifyContent: 'center'
};

export default StyleSheet.create({
    container: {
        marginHorizontal: SPACING_MEDIUM, 
        marginTop: SPACING_MEDIUM, 
        marginBottom: SPACING_VERY_SMALL,
        paddingTop: SPACING_SMALL, 
        paddingBottom: SPACING_MEDIUM, 
        paddingHorizontal: SPACING_BIG,
        backgroundColor: white,
        borderRadius: RADIUS_SMALL,
        ...containerShadow
    },
    infoContainer: {
        flex: 1,  
        flexWrap: 'wrap'
    },
    dataContainer: {
        flex: 1, 
        justifyContent: 'flex-end'
    },
    image: {
        width: BIG_IMAGE_WIDTH, 
        height: BIG_IMAGE_HEIGHT,
        marginRight: SPACING_MEDIUM
    },
    title: {
        fontSize: LARGE,
        color: darkGray,
        fontWeight: "bold"
    },
    text: {
        fontSize: SMALL,
        color: gray,
    },
    addToWishList: {
        ...button,
        borderWidth: BORDER_WIDTH,
        borderColor: skyBlue,
        marginBottom: SPACING_VERY_SMALL
    },
    rent: {
        ...button,
        backgroundColor: skyBlue,
    },
    bookContainer: {
        flexDirection: 'row'
    },
    addToWishListText: {
        fontSize: SMALL,
        color: skyBlue,
        fontWeight: "bold"
    },
    rentText: {
        fontSize: SMALL,
        color: white,
        fontWeight: "bold"
    },
    buttonsContainer: {
        paddingTop: SPACING_BIG,
        alignItems: 'center'
    }
});

