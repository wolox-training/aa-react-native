import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Comment from './components/Comment';
import styles from './styles';

class CommentList extends Component {

    renderItem = ({item}) =>  <Comment username={item.user.name}  userImageSource={item.user.imageSource} comment={item.comment}/>;

    keyExtractor = (item) => `${item.id}`;

    render() {
        const {comments} = this.props;
        return (
            <FlatList
            data={comments}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            contentContainerStyle={styles.container}
          />
        );

    }

}

export default CommentList;

