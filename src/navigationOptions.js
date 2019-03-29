import HeaderBackground from './components/HeaderBackground';
import { HEADER_HEIGHT } from '../constants/platform';
import { white } from '../constants/colors';
import { MEDIUM } from '../constants/fontSizes';
import { SPACING_BIG } from '../constants/dimensions';

export const defaultNavigationOptions = {
    headerStyle: {height: HEADER_HEIGHT, width: '100%', backgroundColor: 'transparent'},
    headerBackground: <HeaderBackground/>,
    headerTitleStyle: { color: white, fontSize: MEDIUM, fontWeight: "bold", marginLeft: SPACING_BIG}
};