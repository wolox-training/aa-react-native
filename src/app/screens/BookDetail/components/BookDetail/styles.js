import { StyleSheet } from 'react-native';
import { white, black, darkGray, gray, skyBlue } from '../../../../../constants/colors';

export default StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
        paddingTop: 15,
        paddingBottom: 22,
        backgroundColor: white,
        borderRadius: 5,
        opacity: 1,
        shadowColor: black,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2
    },
    image: {
        width: 70,
        height: 105,
        marginLeft: 30,
        marginRight: 20
    },
    title: {
        fontSize: 24,
        color: darkGray,
        fontWeight: "bold"
    },
    text: {
        fontSize: 15,
        color: gray,
    },
    addToWishList: {
        width: 275,
        height: 44,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: skyBlue,
        marginBottom: 10
    },
    rent: {
        width: 275,
        height: 44,
        borderRadius: 100,
        backgroundColor: skyBlue,
        alignItems: 'center',
        justifyContent: 'center'

    },
    bookContainer: {
        flexDirection: 'row'
    },
    addToWishListText: {
        fontSize: 15,
        color: skyBlue
    },
    rentText: {
        fontSize: 15,
        color: white
    },
    buttonsContainer: {
        paddingTop: 30,
        paddingBottom: 22,
        alignItems: 'center'
    }
});

