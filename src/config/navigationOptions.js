import React from 'react';
import { Image } from 'react-native';
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
import { SPACING_MEDIUM } from '../constants/dimensions';

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
    tabBarIcon: ({ focused }) => <Image style={{ width: SPACING_MEDIUM, height: SPACING_MEDIUM }} source={focused ? libraryActiveImage : libraryImage } />
  };

  export const dummyNavigationOptions = {
      title: DUMMY,
      tabBarLabel: DUMMY,
      tabBarIcon: ({ focused }) => <Image style={{ width: SPACING_MEDIUM, height: SPACING_MEDIUM }} source={focused ? dummyActiveImage : dummyImage } />
  }

  export const childTabsNavigationOptions = ({ navigation, screenProps }) =>
 getActiveChildNavigationOptions(navigation, screenProps);

