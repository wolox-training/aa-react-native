import React, { PureComponent } from 'react';
import { ScrollView, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import UserCard from './components/UserCard';
import styles from './styles';

import { defaultBooks } from '../BookList/books';
import { CAROUSEL_WIDTH } from '../../../constants/platform';
import WithLoading from '../../components/WithLoading';


class Profile extends PureComponent {

  carousel = {};
  state = { entries: defaultBooks };
  
  render () {
    const { entries } = this.state;
    const { currentUser, renderItem } = this.props;
    return (
        <ScrollView style={styles.container}>
            <UserCard firstName={currentUser.data.first_name} lastName={currentUser.data.last_name}/>
            <Text style={styles.text}> Suggestions</Text> 
            <Carousel
              ref={(c) => { this.carousel = c; }}
              data={entries}
              renderItem={renderItem}
              contentContainerStyle={styles.contentContainer}
              slideStyle={styles.slide}
              sliderWidth={CAROUSEL_WIDTH}
              itemWidth={CAROUSEL_WIDTH}
              layout={'default'}
              loop
              loopClonesPerSide={2}
              autoplay
              autoplayDelay={500}
              autoplayInterval={3000}
              />
        </ScrollView>
      );
}
  }

  export default WithLoading(props => props.isLoading)(Profile);
  