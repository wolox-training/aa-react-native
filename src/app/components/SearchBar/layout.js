import React, { PureComponent } from 'react';
import { SearchBar } from 'react-native-elements';

import styles from './styles';

class SearchBarWrapper extends PureComponent {

    render() {
        const { searchValue, onChangeText, onCancel } = this.props;
        return (
            <SearchBar
                platform="android"
                value={searchValue}
                onChangeText={onChangeText}
                containerStyle={styles.container}
                inputContainerStyle={styles.inputContainer}
                onCancel={onCancel}
            />
        );
  }
}  


export default SearchBarWrapper;

