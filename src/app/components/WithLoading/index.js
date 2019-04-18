import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

import styles from './styles';

import { blue } from '../../../constants/colors';

const Loading = () => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color={blue}/>
        <Text style={styles.text}>Loading... Please wait.</Text>
    </View>
);

const WithLoading = shouldLoad => WrappedComponent => {
    return props => (shouldLoad(props) ? <Loading /> : <WrappedComponent {...props} />);
  };
  

export default WithLoading;
  

