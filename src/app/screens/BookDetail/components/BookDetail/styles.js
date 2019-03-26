import { StyleSheet } from 'react-native';

import { white, darkGray, gray, skyBlue } from '../../../../../constants/colors';
import { BOOK_DETAIL_BUTTOM_TEXT, BOOK_DETAIL_TITLE, BOOK_DETAIL_TEXT } from '../../../../../constants/fontSizes';
import * as Dimensions from '../../../../../constants/dimensions';
import { containerShadow } from '../../../../../constants/shadows';

const button = {
    width: '100%',
    height: Dimensions.BOOK_DETAIL_BUTTON_HEIGHT,
    borderRadius: Dimensions.BOOK_DETAIL_BUTTON_RADIUS,
    alignItems: 'center',
    justifyContent: 'center'
};

export default StyleSheet.create({
    container: {
        marginHorizontal: Dimensions.BOOK_DETAIL_CONTAINER_MARGIN_HORIZONTAL, 
        marginTop: Dimensions.BOOK_DETAIL_CONTAINER_MARGIN_TOP, 
        marginBottom: Dimensions.BOOK_DETAIL_CONTAINER_MARGIN_BOTTOM,
        paddingTop: Dimensions.BOOK_DETAIL_CONTAINER_PADDING_TOP, 
        paddingBottom: Dimensions.BOOK_DETAIL_CONTAINER_PADDING_BOTTOM, 
        paddingHorizontal: Dimensions.BOOK_DETAIL_CONTAINER_PADDING_HORIZONTAL,
        backgroundColor: white,
        borderRadius: Dimensions.BOOK_DETAIL_CONTAINER_RADIUS,
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
        width: Dimensions.BOOK_DETAIL_IMAGE_WIDTH, 
        height: Dimensions.BOOK_DETAIL_IMAGE_HEIGHT,
        marginRight: Dimensions.BOOK_DETAIL_IMAGE_MARGIN_RIGHT
    },
    title: {
        fontSize: BOOK_DETAIL_TITLE,
        color: darkGray,
        fontWeight: "bold"
    },
    text: {
        fontSize: BOOK_DETAIL_TEXT,
        color: gray,
    },
    addToWishList: {
        ...button,
        borderWidth: Dimensions.BOOK_DETAIL_ADD_TO_WISH_LIST_BORDER_WIDTH,
        borderColor: skyBlue,
        marginBottom: Dimensions.BOOK_DETAIL_ADD_TO_WISH_LIST_MARGIN_BOTTOM
    },
    rent: {
        ...button,
        backgroundColor: skyBlue,
    },
    bookContainer: {
        flexDirection: 'row'
    },
    addToWishListText: {
        fontSize: BOOK_DETAIL_BUTTOM_TEXT,
        color: skyBlue
    },
    rentText: {
        fontSize: BOOK_DETAIL_BUTTOM_TEXT,
        color: white
    },
    buttonsContainer: {
        paddingTop: Dimensions.BOOK_DETAIL_BUTTONS_CONTAINER_PADDING_TOP,
        alignItems: 'center'
    }
});

