import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import backImage from '../../assets/ic_back.png';

class BackButton extends PureComponent {
  handleGoBack = () => this.props.navigation.goBack();
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.handleGoBack}>
        <Image style={styles.image} source={backImage} resizeMode="stretch"/>
      </TouchableOpacity>
    )
  }
}  


export default withNavigation(BackButton);