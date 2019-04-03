import React from 'react';
import { getActiveChildNavigationOptions } from 'react-navigation';

import libraryImage from '../app/assets/ic_library.png';
import libraryActiveImage from '../app/assets/ic_library_active.png';
import dummyActiveImage from '../app/assets/ic_settings_active.png';
import dummyImage from '../app/assets/ic_settings.png';
import HeaderBackground from '../app/components/HeaderBackground';
import BackButton from '../app/components/BackButton';
import { HEADER_HEIGHT } from '../constants/platform';
import { white } from '../constants/colors';
import { MEDIUM, BOLD } from '../constants/fontSizes';
import { LIBRARY, BOOK_DETAIL, DUMMY } from '../constants/titles';
import TabBarIcon from '../app/components/TabBarIcon';

export const defaultNavigationOptions = {
    headerStyle: {height: HEADER_HEIGHT, width: '100%', backgroundColor: 'transparent'},
    headerBackground: <HeaderBackground/>,
    headerTitleStyle: { color: white, fontSize: MEDIUM, fontWeight: BOLD}
};

export const bookDetailNavigationOptions = {
    title: BOOK_DETAIL,
    headerLeft: <BackButton/>
};

export const bookListNavigationOptions = {
    title: LIBRARY,
    tabBarLabel: LIBRARY,
    tabBarIcon: ({focused}) => <TabBarIcon focused={focused}  inactiveIcon={libraryImage} activeIcon={libraryActiveImage}/>
  };

  export const dummyNavigationOptions = {
      title: DUMMY,
      tabBarLabel: DUMMY,
      tabBarIcon: ({focused}) => <TabBarIcon focused={focused}  inactiveIcon={dummyImage} activeIcon={dummyActiveImage}/>
  }

  export const childTabsNavigationOptions = ({ navigation, screenProps }) =>
 getActiveChildNavigationOptions(navigation, screenProps);

