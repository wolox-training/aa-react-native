import React from 'react';
import HeaderBackground from './app/components/HeaderBackground';
import { HEADER_HEIGHT } from './constants/platform';
import { white } from './constants/colors';
import { MEDIUM, BOLD } from './constants/fontSizes';

export const defaultNavigationOptions = {
    headerStyle: {height: HEADER_HEIGHT, width: '100%', backgroundColor: 'transparent'},
    headerBackground: <HeaderBackground/>,
    headerTitleStyle: { color: white, fontSize: MEDIUM, fontWeight: BOLD}
};