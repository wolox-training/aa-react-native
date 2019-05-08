import React, { PureComponent } from 'react';
import { withNavigation } from 'react-navigation';

import searchImage from '../../assets/ic_search.png';
import ImageButton from '../ImageButton';
import { Search } from '../../../constants/routes';

class SearchButton extends PureComponent {
  handleOnPress = () => this.props.navigation.navigate(Search);
  render() {
    return (
        <ImageButton image={searchImage} onPress={this.handleOnPress}/>
    )
  }
}  


export default withNavigation(SearchButton);

