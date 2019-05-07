import React, { PureComponent } from 'react';
import { SearchBar } from 'react-native-elements';

import styles from './styles';

function  SearchBarWrapper({ searchValue, onChangeText, onCancel }) {
    return (
        <SearchBar
            platform="android"
            value={searchValue}
            onChangeText={onChangeText}
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            onCancel={onCancel}
        />
    )
}; 

export default SearchBarWrapper;

