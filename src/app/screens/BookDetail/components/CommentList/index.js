import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Comment from './components/Comment';
import styles from './styles';

class CommentList extends Component {

    constructor(props) {
        super(props);
        this.state = { isViewedAll: false };
    }
    renderItem = ({item}) =>  <Comment username={item.user.name}  userImageSource={item.user.imageSource} comment={item.comment}/>;

    keyExtractor = (item) => `${item.id}`;

    onPressHandler = () => (this.setState(previousState => ({ isViewedAll: true })));
    render() {
        const {comments} = this.props;
        return (
            <FlatList
            data={ (this.state.isViewedAll) ? comments.filter((x,i) => [0,1,2,3,4].includes(i)) : comments.filter((x,i) => [0,1].includes(i))}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            contentContainerStyle={styles.container}
            ListFooterComponent={() =><View>{(this.state.isViewedAll) ? <Text></Text> : <TouchableOpacity style={styles.footer} onPress={this.onPressHandler} >{(comments.length <= 2) ? <Text></Text> : <Text style={styles.footerText}>View All</Text>}</TouchableOpacity>}</View>}
          />
        );

    }

}

export default CommentList;

