import { StyleSheet } from 'react-native';

import { white, black, darkGray, gray, skyBlue } from '../../../../../constants/colors';
import * as FontSize from '../../../../../constants/fontSizes';
import * as Dimensions from '../../../../../constants/dimensions';
import * as Margins from '../../../../../constants/margins';
import * as Paddings from '../../../../../constants/paddings';
import * as Shadows from '../../../../../constants/shadows';

const button = {
    ...Dimensions.bookDetailButton,
    borderRadius: Dimensions.bookDetailButtonRadius,
    alignItems: 'center',
    justifyContent: 'center'
};

export default StyleSheet.create({
    container: {
        ...Margins.bookDetailContainer,
        ...Paddings.bookDetailContainer,
        backgroundColor: white,
        borderRadius: Dimensions.bookDetailContainerRadius,
        ...Shadows.container
    },
    infoContainer: {
        flex: 1,  
        flexWrap: 'wrap'
    },
    dataContainer: {
        ...Dimensions.bookDetailDataContainer, 
        justifyContent: 'flex-end'
    },
    image: {
        ...Dimensions.bookDetailImage,
        ...Margins.bookDetailImage
    },
    title: {
        fontSize: FontSize.bookDetailTitle,
        color: darkGray,
        fontWeight: "bold"
    },
    text: {
        fontSize: FontSize.bookDetailText,
        color: gray,
    },
    addToWishList: {
        ...button,
        borderWidth: Dimensions.bookDetailAddToWishListBorderWidth,
        borderColor: skyBlue,
        ...Margins.bookDetailAddToWishList
    },
    rent: {
        ...button,
        backgroundColor: skyBlue,
    },
    bookContainer: {
        flexDirection: 'row'
    },
    addToWishListText: {
        ...FontSize.bookDetailButtonText,
        color: skyBlue
    },
    rentText: {
        ...FontSize.bookDetailButtonText,
        color: white
    },
    buttonsContainer: {
        ...Paddings.bookDetailButtonsContainer,
        alignItems: 'center'
    }
});

