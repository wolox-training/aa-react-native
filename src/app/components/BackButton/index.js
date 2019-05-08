import React, { PureComponent } from 'react';
import { withNavigation } from 'react-navigation';

import backImage from '../../assets/ic_back.png';
import ImageButton from '../ImageButton';

class BackButton extends PureComponent {
  handleGoBack = () => this.props.navigation.goBack();
  render() {
    return (
      <ImageButton image={backImage} onPress={this.handleGoBack}/>
    )
  }
}  


export default withNavigation(BackButton);