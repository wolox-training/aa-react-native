import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import backImage from '../../assets/ic_back.png';

class BackButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => { this.props.navigation.goBack()}}>
        <Image style={styles.image} source={backImage} resizeMode="stretch"/>
      </TouchableOpacity>
    )
  }
}  


export default withNavigation(BackButton);