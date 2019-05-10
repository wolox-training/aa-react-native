import React, { PureComponent } from 'react';
import { ScrollView, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import UserCard from './components/UserCard';
import styles from './styles';

import { defaultBooks } from '../BookList/books';
import { CAROUSEL_WIDTH } from '../../../constants/platform';
import WithLoading from '../../components/WithLoading';
import { CAROUSEL_LAYOUT, LOOP_CLONES_PER_SIDE, AUTOPLAY_DELAY, AUTOPLAY_INTERVAL } from '../../../constants/carousel';
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
            	layout={CAROUSEL_LAYOUT}
            	loop
            	loopClonesPerSide={LOOP_CLONES_PER_SIDE}
            	autoplay
            	autoplayDelay={AUTOPLAY_DELAY}
            	autoplayInterval={AUTOPLAY_INTERVAL}
              />
        </ScrollView>
    );
  }
}

export default WithLoading(props => props.isLoading)(Profile);
  