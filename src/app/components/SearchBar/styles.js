import { StyleSheet } from 'react-native';
import { SPACING_VERY_SMALL, SPACING_BIG, RADIUS_BIG } from '../../../constants/dimensions';

export default StyleSheet.create({
    container: {
        backgroundColor: 'transparent', 
        flex: 1, 
        marginHorizontal: SPACING_VERY_SMALL,  
        borderBottomColor: 'transparent', 
        borderTopColor: 'transparent',
        borderRadius: RADIUS_BIG
    },
    inputContainer: {
        backgroundColor: "white", 
        height: SPACING_BIG,
        borderRadius: RADIUS_BIG
    }
});

