import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import BookPreview from './components/BookPreview';
import UserCard from './components/UserCard';

import styles from './styles';

function Profile () {

  
    return (
      <View style={styles.container}>
        <UserCard firstName={'Alejo'} lastName={'Aquili'}/>

        <Carousel
              data={this.state.entries}
              renderItem={({item, index}) => {<BookPreview name={item.name}/>}}
              sliderWidth={'100%'}
              itemWidth={'100%'}
        />
        <BookPreview name={'Nombre'} author={'Autor'} onPress={() => {console.warn('Presione')}}/>

      </View>
    )
  };

export default Profile;
  