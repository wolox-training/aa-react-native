import React from 'react';
import HeaderBackground from '../app/components/HeaderBackground';
import BackButton from '../app/components/BackButton';
import { HEADER_HEIGHT } from '../constants/platform';
import { white } from '../constants/colors';
import { MEDIUM, BOLD } from '../constants/fontSizes';
import { LIBRARY, BOOK_DETAIL } from '../constants/titles';

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
    title: LIBRARY
  };

