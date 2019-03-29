import React from 'react';
import { Image} from 'react-native';

import styles from './styles';

import backgroundImage from '../../assets/bc_nav_bar.png';

function HeaderBackground() {
    return (
        <Image
        style={styles.image}
        source={backgroundImage}
        resizeMode="stretch"
      />
    )
};

export default HeaderBackground;