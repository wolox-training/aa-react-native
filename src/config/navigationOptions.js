import React from 'react';
import { getActiveChildNavigationOptions } from 'react-navigation';
import { SearchBar } from 'react-native-elements';

import libraryIcon from '../app/assets/ic_library.png';
import libraryActiveIcon from '../app/assets/ic_library_active.png';
import settingsIcon from '../app/assets/ic_settings.png';
import settingsActiveIcon from '../app/assets/ic_settings_active.png';
import HeaderBackground from '../app/components/HeaderBackground';
import BackButton from '../app/components/BackButton';
import { HEADER_HEIGHT } from '../constants/platform';
import { white } from '../constants/colors';
import { MEDIUM, BOLD } from '../constants/fontSizes';
import { LIBRARY, BOOK_DETAIL, DUMMY } from '../constants/titles';
import TabBarIcon from '../app/components/TabBarIcon';
import SearchButton from '../app/components/SearchButton';

export const defaultNavigationOptions = {
    headerStyle: {height: HEADER_HEIGHT, width: '100%', backgroundColor: 'transparent'},
    headerBackground: <HeaderBackground/>,
    headerTitleStyle: { color: white, fontSize: MEDIUM, fontWeight: BOLD},
    headerLeft: null
};

export const bookDetailNavigationOptions = {
    title: BOOK_DETAIL,
    headerLeft: <BackButton/>
};

export const bookListNavigationOptions = {
    title: LIBRARY,
    tabBarLabel: LIBRARY,
    tabBarIcon: ({focused}) => <TabBarIcon focused={focused}  inactiveIcon={libraryIcon} activeIcon={libraryActiveIcon}/>,
    headerRight: <SearchButton/>
  };

/*export const dummyNavigationOptions = {
      title: DUMMY,
      tabBarLabel: DUMMY,
      tabBarIcon: ({focused}) => <TabBarIcon focused={focused}  inactiveIcon={settingsIcon} activeIcon={settingsActiveIcon}/>
}*/

export const childTabsNavigationOptions = ({ navigation, screenProps }) =>
 getActiveChildNavigationOptions(navigation, screenProps);

export const noHeaderNavigationOptions = {
    headerMode: 'none',
    header: null
};

export const dummyNavigationOptions = {
    headerTitle:  <SearchBar
                round
                lightTheme
                cancelButtonTitle="Cancel"
                containerStyle={{backgroundColor: "transparent", flex: 1, marginHorizontal: 10,  borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
                inputContainerStyle={{backgroundColor: "white", height: 30, borderColor: "transparent", borderWidth: 0}}
             />        
}
