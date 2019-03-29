import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Comment from './components/Comment';
import styles from './styles';

class CommentList extends Component {

    state = { isViewedAll: false }

    renderItem = ({ item }) =>  <Comment username={item.user.name}  userImageSource={item.user.imageSource} comment={item.comment}/>;

    keyExtractor = item => `${item.id}`;

    handlePressViewAll = () => this.setState({ isViewedAll: true });

    renderViewAllText = comments => comments.length > 2 && <Text style={styles.footerText}>View All</Text>;

    renderViewAll = (comments, isViewedAll) => !isViewedAll && <TouchableOpacity style={styles.footer} onPress={this.handlePressViewAll} >{this.renderViewAllText(comments)}</TouchableOpacity>;

    getCommentsByIndex = (comments, index) => comments.filter((x,i) => index.includes(i));

    render() {
        const { comments } = this.props;
        const { isViewedAll } = this.state;

        return (
            <FlatList
            data={ (isViewedAll) ? this.getCommentsByIndex(comments, [0, 1, 2, 3, 4]) : this.getCommentsByIndex(comments, [0, 1])}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            contentContainerStyle={styles.container}
            ListFooterComponent={<View>{this.renderViewAll(comments, isViewedAll)}</View>}
          />
        );

    }

}

export default CommentList;

