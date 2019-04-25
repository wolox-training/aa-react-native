import React, { PureComponent } from 'react';
import { SearchBar } from 'react-native-elements';

import styles from './styles';

import { CANCEL_BUTTON } from '../../../constants/titles';

class SearchBarWrapper extends PureComponent {

    render() {
        const { searchValue, onChangeText } = this.props;
        return (
            <SearchBar
                round
                lightTheme
                value={searchValue}
                onChangeText={onChangeText}
                cancelButtonTitle={CANCEL_BUTTON}
                containerStyle={styles.container}
                inputContainerStyle={styles.inputContainer}
            />
        );
  }
}  


export default SearchBarWrapper;

