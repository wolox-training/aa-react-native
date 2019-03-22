import { StyleSheet } from 'react-native';
import { white, black, darkGray, gray} from '../../../constants/colors';

export default StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: white,
        borderRadius: 5,
        opacity: 1,
        shadowColor: black,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2
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

    },
    rent: {

    }
});

