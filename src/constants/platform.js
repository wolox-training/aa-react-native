import { Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');

export const HEADER_HEIGHT = windowDimensions.height * 0.15;
export const CAROUSEL_WIDTH = windowDimensions.width;
