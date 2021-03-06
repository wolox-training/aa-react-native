import React from 'react';
import { getActiveChildNavigationOptions } from 'react-navigation';

import libraryIcon from '../app/assets/ic_library.png';
import libraryActiveIcon from '../app/assets/ic_library_active.png';
import settingsIcon from '../app/assets/ic_settings.png';
import settingsActiveIcon from '../app/assets/ic_settings_active.png';
import HeaderBackground from '../app/components/HeaderBackground';
import BackButton from '../app/components/BackButton';
import { HEADER_HEIGHT } from '../constants/platform';
import { white } from '../constants/colors';
import { MEDIUM, BOLD } from '../constants/fontSizes';
import { LIBRARY, BOOK_DETAIL, PROFILE } from '../constants/titles';
import TabBarIcon from '../app/components/TabBarIcon';
import SearchButton from '../app/components/SearchButton';
import SearchBar from '../app/components/SearchBar';

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

export const profileNavigationOptions = {
      title: PROFILE,
      tabBarLabel: PROFILE,
      tabBarIcon: ({focused}) => <TabBarIcon focused={focused}  inactiveIcon={settingsIcon} activeIcon={settingsActiveIcon}/>
}

export const childTabsNavigationOptions = ({ navigation, screenProps }) =>
 getActiveChildNavigationOptions(navigation, screenProps);

export const noHeaderNavigationOptions = {
    headerMode: 'none',
    header: null
};

export const searchNavigationOptions = {
    headerTitle: <SearchBar/>   
};
